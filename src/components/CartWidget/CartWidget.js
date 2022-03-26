import { BsCart } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import Notification from "../Notification/Notification";
import "./CartWidget.css";

const CartWidget = () => {
  const { getQuantity } = useCart();

  const cartWidgetContainer = {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    textDecoration: "none",
    position: "relative",
  };

  const cartIcon = {
    position: "absolute",
    color: "white",
    fontSize: 25,
    visibility: getQuantity() === 0 ? "hidden" : "visible",
  };

  return (
    <Link to={"/Cart"} style={cartWidgetContainer}>
      <BsCart style={cartIcon} />
      <div
        style={{ visibility: getQuantity() === 0 ? "hidden" : "visible" }}
        className="cart-widget-counter"
      >
        {getQuantity()}
      </div>
      <Notification />
    </Link>
  );
};

export default CartWidget;
