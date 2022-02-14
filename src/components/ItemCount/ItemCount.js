import "./ItemCount.css";
import Card from "../../../node_modules/react-bootstrap/Card";
import Button from "../../../node_modules/react-bootstrap/Button";
import { useState } from "react";

const ItemCount = (props) => {
  const { stock, initial, onAdd } = props;

  const [quantity, setquantity] = useState(initial);

  const decrement = () => {
    if (quantity > 0) {
      setquantity(quantity - 1);
    }
  };

  const increment = () => {
    if (quantity < stock) {
      setquantity(quantity + 1);
    }
  };

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title>Producto</Card.Title>
        <Card.Text>Descripción</Card.Text>
        <div className="itemCounterContainer">
          <Button variant="outline-success" onClick={decrement}>
            -
          </Button>
          <div>{quantity}</div>
          <Button variant="outline-success" onClick={increment}>
            +
          </Button>{" "}
        </div>
        <Button variant="outline-success" onClick={() => onAdd(quantity)}>
          Agregar al carrito
        </Button>{" "}
      </Card.Body>
    </Card>
  );
};

export default ItemCount;
