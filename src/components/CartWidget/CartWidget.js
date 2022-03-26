import { Cart } from "react-bootstrap-icons";
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
    // visibility: getQuantity() === 0 ? "hidden" : "visible",
  };

  const cartIcon = {
    position: "absolute",
    color: "white",
    fontSize: 25,
    visibility: getQuantity() === 0 ? "hidden" : "visible",
  };

  //problemas... por algún motivo React renderiza el número en cualquier lado
  const cartWidgetCounter = {
    float: "right",
    textAlign: "center",
    borderRadius: "50%",
    backgroundColor: "#9ed699",
    boxShadow: "0px 0px 9px 3px #3e533c",
    color: "white",
    width: 20,
    height: 20,
    lineHeight: 20,
    fontSize: "1rem",
    position: "absolute",
    left: 19,
    top: -21,
  };

  return (
    <Link to={"/Cart"} style={cartWidgetContainer}>
      <Cart style={cartIcon} />
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
