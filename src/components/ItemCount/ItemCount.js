import "./ItemCount.css";
import Button from "../../../node_modules/react-bootstrap/Button";
import { useState } from "react";
import Col from "../../../node_modules/react-bootstrap/Col/";
import { BsCartPlusFill } from "react-icons/bs";

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
      {stock > 1 ? (
        <>
          <Col>
            <div className="item-counter-container">
              <Button variant="outline-success" onClick={decrement}>
                -
              </Button>
              <div>
                {quantity} de {stock}
              </div>
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
              <BsCartPlusFill
                style={{
                  paddingRight: "10px",
                  fontSize: "30px",
                }}
              />
              <span>Agregar al carrito </span>
            </Button>{" "}
          </Col>
        </>
      ) : (
        <Col>
          <Button variant="outline-danger" disabled>
            No hay stock
          </Button>
        </Col>
      )}
    </>
  );
};

export default ItemCount;
