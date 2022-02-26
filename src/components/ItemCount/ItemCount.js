import "./ItemCount.css";
import Button from "../../../node_modules/react-bootstrap/Button";
import { useState } from "react";

const ItemCount = (props) => {
  const { stock, initial, onAdd } = props;
  const [quantity, setQuantity] = useState(initial);

  const decrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  return (
    <>
      <div className="itemCounterContainer">
        <Button variant="outline-success" onClick={decrement}>
          -
        </Button>
        <div>{quantity}</div>
        <Button variant="outline-success" onClick={increment}>
          +
        </Button>{" "}
      </div>
      <Button
        variant="outline-success"
        onClick={() => onAdd(quantity)}
        disabled={quantity > 0 ? false : true}
      >
        Agregar al carrito
      </Button>{" "}
    </>
  );
};

export default ItemCount;
