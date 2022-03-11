import { useContext, useState } from "react";
import { useNotificationServices } from "../../services/notification/NotificationServices";
import { Container, Row, Col } from "../../../node_modules/react-bootstrap/";
import Button from "../../../node_modules/react-bootstrap/Button";
import { CartXFill, CartCheck, EmojiSunglasses } from "react-bootstrap-icons";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import { Link, Navigate } from "react-router-dom";
import {
  Timestamp,
  writeBatch,
  doc,
  getDoc,
  addDoc,
  collection,
} from "firebase/firestore";
import { firestoreDb } from "../../services/firebase/firebase";
import "./Cart.css";

const Cart = () => {
  const [processingOrder, setProcessingOrder] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const [contact, setContact] = useState({
    //Completar luego la parte del fomurlario de contacto... preferiría hacer un context para los datos de formulario y que éste esté en el menú desplegable. Si el formulario está incompleto se alertará al usuario y se le conducirá a la página respectiva.
    name: "",
    phone: "",
    address: "",
    comment: "",
  });

  const { cart, clearCart, getTotal, removeProduct } = useContext(CartContext); //Hacer un export useContext en CartContext como está para SetNotification así alivio Webpack
  const { setNotification, setMessageWidth, setMessageBackground } =
    useNotificationServices();

  const confirmOrder = () => {
    setProcessingOrder(true);

    const objOrder = {
      buyer: contact,
      items: cart,
      total: getTotal(),
      date: Timestamp.fromDate(new Date()),
    };

    const batch = writeBatch(firestoreDb);
    const outOfStock = [];

    const checkOut = () => {
      if (outOfStock.length === 0) {
        addDoc(collection(firestoreDb, "orders"), objOrder)
          .then(({ id }) => {
            batch.commit().then(() => {
              setMessageBackground("light");
              setMessageWidth("order");
              setNotification(
                "La orden se generó exitósamente. ¡Gracias por su compra!",
                `Su número de orden es: ${id}`
              );
              setOrderConfirmed(true);
              clearCart();
            });
          })
          .catch((error) => {
            console.log("Error generando compra:", error); //implementar un setNotification
          })
          .finally(() => {
            setProcessingOrder(false);
          });
      } else {
        outOfStock.forEach((prod) => {
          setMessageBackground("danger");
          setNotification(
            "No se pudo proceder con la orden",
            `El producto "${prod.name}" no posee las unidades seleccionadas`
          );
          removeProduct(prod.id);
          setProcessingOrder(false);
        });
      }
    };

    objOrder.items.forEach((prod) => {
      const docRef = doc(firestoreDb, "products", prod.id);
      getDoc(docRef)
        .then((response) => {
          if (response.data().stock >= prod.quantity) {
            batch.update(doc(firestoreDb, "products", response.id), {
              stock: response.data().stock - prod.quantity,
            });
          } else {
            outOfStock.push({ id: response.id, ...response.data() });
          }
        })
        .catch((error) => {
          console.log("Error getting document:", error); //implementar un setNotification
        })
        .then(() => {
          checkOut();
        });
    });
  };

  if (processingOrder) {
    return <h1>Se esta procesando su orden</h1>;
  } //No me convence como UX... mejor cambiar el botón de Confirmar compra por un loading

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
    <>
      {orderConfirmed && <Navigate to="/" replace={true} />}
      <Container>
        <Row style={{ textAlign: "center", justifyContent: "center" }}>
          <div className="title">Carrito</div>
          {cart.map((product) => {
            return <CartItem key={product.id} product={product}></CartItem>;
          })}
          <Row className="total justify-content-between justify-content-md-end align-items-center">
            <Col xs={12} md={4} lg={3} xxl={2} style={{ paddingRight: 30 }}>
              <Row style={{ rowGap: 10 }}>
                <Button variant="danger" onClick={() => clearCart()}>
                  <CartXFill size={35}></CartXFill>
                  <span>Cancelar compra</span>
                </Button>
                <Button variant="success" onClick={() => confirmOrder()}>
                  <CartCheck size={35}></CartCheck>{" "}
                  <span>Confirmar compra</span>
                </Button>
              </Row>
            </Col>
            <Col xs={12} md={1}>
              <strong>Total: ${getTotal()}</strong>
            </Col>
          </Row>
        </Row>
      </Container>
    </>
  );
};

export default Cart;
