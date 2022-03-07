import { useContext } from "react";
import { Container, Row, Col } from "../../../node_modules/react-bootstrap/";
import { CartXFill } from "react-bootstrap-icons";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, clearCart, getTotal } = useContext(CartContext);

  const cartEmpty = {
    cursor: "pointer",
  };

  const total = {
    padding: 20,
    display: "flex",
    borderBottom: "1px solid #E1E8EE",
    alignItems: "center",
    justifyContent: "space-between",
  };

  if (cart.length === 0)
    return (
      <>
        <h1>Comprá productos, chabón</h1>
        <Link to={"/"}>
          <div>Continuar compra</div>
        </Link>
      </>
    ); // agregar una clase al Link

  return (
    <Container>
      <Row style={{ textAlign: "center", justifyContent: "center" }}>
        <div className="title">Carrito</div>
        {cart.map((product) => {
          return <CartItem key={product.id} product={product}></CartItem>;
        })}
        <div style={total}>
          <Col md={1} title="Vaciar carrito de compras">
            <CartXFill
              size={35}
              style={cartEmpty}
              onClick={() => clearCart()}
            ></CartXFill>
          </Col>
          <Col md={1}>
            <strong>Total: ${getTotal()}</strong>
          </Col>
        </div>
      </Row>
    </Container>
  );
};

export default Cart;
