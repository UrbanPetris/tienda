import { Cart } from "react-bootstrap-icons";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import CartNotification from "../CartNotification/CartNotification";
import { useCartNotificationServices } from "../../services/notification/CartNotificationServices";
import "./CartWidget.css";

const CartWidget = () => {
  const { getQuantity } = useContext(CartContext);
  const { message } = useCartNotificationServices;

  const cartWidgetContainer = {
    display: "flex",
    visibility: getQuantity() === 0 ? "hidden" : "visible",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    color: "green",
    textDecoration: "none",
    position: "relative",
  };

  const cartIcon = {
    position: "absolute",
    color: "white",
    fontSize: 25,
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
      <div className="cartWidgetCounter">{getQuantity()}</div>
      <CartNotification message={message} />
    </Link>
  );
};

export default CartWidget;
