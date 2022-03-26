import { BsX } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./CartItem.css";
import { useCart } from "../../context/CartContext";
import { Col, Row } from "../../../node_modules/react-bootstrap/";

const CartItem = ({ product }) => {
  const { removeProduct } = useCart();
  const subtotal = product.price * product.quantity;

  return (
    <Row className="item" key={product.id} product={product}>
      <Col md={1} title="Quitar producto">
        <BsX
          style={{ cursor: "pointer" }}
          size={35}
          onClick={() => removeProduct(product.id)}
        ></BsX>
      </Col>
      <Col md={4} className="cart-item-image">
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
