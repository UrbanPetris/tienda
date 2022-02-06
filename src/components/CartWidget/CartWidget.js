import { Cart } from "react-bootstrap-icons";
import "./CartWidget.css";

const CartWidget = () => {
  let counter = 0;

  return (
    <div className="cartWidetContainer">
      <Cart color="white" size={25} />
      <div className="cartWidgetCounter">{counter}</div>
    </div>
  );
};

export default CartWidget;
