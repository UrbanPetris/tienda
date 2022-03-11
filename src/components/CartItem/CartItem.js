import { X } from "react-bootstrap-icons";
import { useContext } from "react";
import { Link } from "react-router-dom";
import "./CartItem.css";
import { CartContext } from "../../context/CartContext";
import { Col, Row } from "../../../node_modules/react-bootstrap/";

const CartItem = ({ product }) => {
  const { removeProduct } = useContext(CartContext);
  const subtotal = product.price * product.quantity;

  return (
    <Row className="item" key={product.id} product={product}>
      <Col md={1} title="Quitar producto">
        <X
          style={{ cursor: "pointer" }}
          size={35}
          onClick={() => removeProduct(product.id)}
        ></X>
      </Col>
      <Col md={4} className="cartItemImage">
        <Link to={`/item/${product.id}`} title="Ir al producto">
          <img src={product.img} alt={product.name} />
        </Link>
      </Col>
      <Col md={6} className="details pt-3 pt-md">
        <div>{product.name}</div>
        <div>
          {product.quantity} x ${product.price}
        </div>
        <div>{product.categoryDescription}</div>
      </Col>
      <Col md={1} className="pt-3 pt-md">
        <div>Subotal</div>
        <div>${subtotal}</div>
      </Col>
    </Row>
  );
};

export default CartItem;
