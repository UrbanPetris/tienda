import { useContext, useEffect, useState } from "react";
import { useContactForm } from "../../context/ContactFormContext";
import { useNotification } from "../../context/NotificationContext";
import { Container, Row, Col } from "../../../node_modules/react-bootstrap/";
import Button from "../../../node_modules/react-bootstrap/Button";
import { CartXFill, CartCheck, EmojiSunglasses } from "react-bootstrap-icons";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import { Link, useNavigate } from "react-router-dom";
import { Timestamp } from "firebase/firestore";
import {
  addOrder,
  getProductsInOrder,
  batch,
} from "../../services/firebase/firebase";
import "./Cart.css";

const Cart = () => {
  const [processingOrder, setProcessingOrder] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [contactDataMissing, setContactDataMissing] = useState(false);
  const { cart, clearCart, getTotal, removeProducts } = useContext(CartContext); //Hacer un export useContext en CartContext como está para SetNotification así alivio Webpack
  const { setNotification, setMessageWidth, setMessageBackground } =
    useNotification();
  const { contact, contactformvalidated } = useContactForm();

  let navigate = useNavigate();

  useEffect(() => {
    if (contactDataMissing) {
      return navigate("/contactform");
    }

    if (orderConfirmed) {
      return navigate("/");
    }
  }, [contactDataMissing, orderConfirmed]);

  const confirmOrder = () => {
    if (contactformvalidated) {
      setProcessingOrder(true);

      const objOrder = {
        buyer: contact,
        items: cart,
        total: getTotal(),
        date: Timestamp.fromDate(new Date()),
      };
      const outOfStock = [];
      const ids = objOrder.items.map((i) => i.id);

      const processMessage = () => {
        return new Promise((resolve) => {
          setMessageBackground("info");
          setNotification(
            "Procesando orden...",
            "En breve le brindaremos los detalles"
          );
          setTimeout(() => {
            resolve();
          }, 8000);
        });
      };

      const processOrder = () => {
        getProductsInOrder(ids)
          .then((response) => {
            response.docs.forEach((docSnapshot) => {
              if (
                docSnapshot.data().stock >=
                objOrder.items.find((prod) => prod.id === docSnapshot.id)
                  .quantity
              ) {
                batch.update(docSnapshot.ref, {
                  stock:
                    docSnapshot.data().stock -
                    objOrder.items.find((prod) => prod.id === docSnapshot.id)
                      .quantity,
                });
              } else {
                outOfStock.push({ id: docSnapshot.id, ...docSnapshot.data() });
              }
            });
          })
          .then(() => {
            if (outOfStock.length === 0) {
              addOrder(objOrder).then(({ id }) => {
                batch.commit();
                setMessageBackground("light");
                setMessageWidth("order");
                setNotification(
                  "La orden se generó exitósamente. ¡Gracias por su compra!",
                  `Su número de orden es: ${id}`
                );
                setOrderConfirmed(true);
                clearCart();
              });
            } else {
              const textoProducto =
                outOfStock.length > 1 ? "Los productos..." : "El producto...";
              const textoUnidades =
                outOfStock.length > 1
                  ? "...no poseen las unidades seleccionadas"
                  : "...no posee las unidades seleccionadas";

              setMessageBackground("warning");

              setNotification(
                "No se pudo proceder con la orden",
                <div className="toast-body-text">
                  <div>{textoProducto}</div>
                  <div className="toast-body-cartItems">
                    {" "}
                    {outOfStock.map((product) => {
                      return <li key={product.id}>{product.name}</li>;
                    })}{" "}
                  </div>
                  <div>{textoUnidades}</div>
                </div>
              );
              removeProducts(outOfStock);
            }
          })
          .catch((error) => {
            setMessageBackground("danger");
            setNotification("Error generando compra", error);
          })
          .finally(() => {
            setProcessingOrder(false);
          });
      };

      processMessage().then(processOrder);
    } else {
      setMessageBackground("warning");
      setNotification(
        "Redireccionando...",
        "Debe completar los datos de contacto para generar la orden."
      );
      setTimeout(() => {
        setContactDataMissing(true);
      }, 3000);
    }
  };

  if (cart.length === 0)
    return (
      <Container>
        <Row className="pt-4" style={{ rowGap: 15 }}>
          <Col xs={12} style={{ maxHeight: 600 }}>
            <img
              src="../img/empty_cart.png"
              alt="empty_cart"
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            ></img>
          </Col>
          <Col xs={12}>
            <h1>El carrito se encuentra vacío</h1>
          </Col>
          <Col xs={12}>
            <Link to={"/"}>
              <Button variant="outline-success">
                <EmojiSunglasses
                  style={{
                    paddingRight: "10px",
                    fontSize: "30px",
                  }}
                />
                <span>Continuar comprando</span>
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    );

  return (
    <Container>
      <Row style={{ textAlign: "center", justifyContent: "center" }}>
        <div className="title">Carrito</div>
        {cart.map((product) => {
          return <CartItem key={product.id} product={product}></CartItem>;
        })}
        <Row className="total justify-content-between justify-content-md-end align-items-center">
          <Col xs={12} md={4} lg={3} xxl={2} style={{ paddingRight: 30 }}>
            <Row style={{ rowGap: 10 }}>
              <Button
                disabled={processingOrder}
                variant="danger"
                onClick={() => clearCart()}
              >
                <CartXFill size={35}></CartXFill>
                <span>Cancelar compra</span>
              </Button>
              <Button
                disabled={processingOrder}
                variant="success"
                onClick={() => confirmOrder()}
              >
                <CartCheck size={35}></CartCheck>{" "}
                <span>
                  {" "}
                  {processingOrder ? "Procesando…" : "Confirmar compra"}
                </span>
              </Button>
            </Row>
          </Col>
          <Col xs={12} md={1}>
            <strong>Total: ${getTotal()}</strong>
          </Col>
        </Row>
      </Row>
    </Container>
  );
};

export default Cart;
