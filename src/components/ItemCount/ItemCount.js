import "./ItemCount.css";
import Button from "../../../node_modules/react-bootstrap/Button";
import { useState } from "react";
import Col from "../../../node_modules/react-bootstrap/Col/";
import { CartPlusFill } from "react-bootstrap-icons";

const ItemCount = (props) => {
  const { stock, initial, onAdd } = props;
  const [quantity, setQuantity] = useState(initial);

  const decrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const increment = () => {
    // if (quantity < stock) {
    setQuantity(quantity + 1);
    // }
  };

  return (
    <>
      <Col>
        <div className="item-counter-container">
          <Button variant="outline-success" onClick={decrement}>
            -
          </Button>
          <div>{quantity}</div>
          <Button variant="outline-success" onClick={increment}>
            +
          </Button>{" "}
        </div>
      </Col>
      <Col>
        {" "}
        <Button
          variant="outline-success"
          onClick={() => {
            onAdd(quantity);
          }}
          disabled={quantity > 0 ? false : true}
        >
          <CartPlusFill
            style={{
              paddingRight: "10px",
              fontSize: "30px",
            }}
          />
          <span>Agregar al carrito </span>
        </Button>{" "}
      </Col>
    </>
  );
};

export default ItemCount;
