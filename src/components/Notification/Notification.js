import { useNotification } from "../../context/NotificationContext";
import "./Notification.css";
import { Toast } from "react-bootstrap";

const Notification = () => {
  const {
    message,
    messageHeader,
    showNotification,
    setShowNotification,
    messageWidth,
    messageBackground,
  } = useNotification();

  const handleClickNotification = (e) => {
    e.preventDefault();
  };

  const config =
    messageWidth === "item"
      ? {
          className: "toast-item",
        }
      : messageWidth === "order"
      ? {
          className: "toast-order",
        }
      : {};

  return (
    <Toast
      {...config}
      show={showNotification}
      onClose={() => {
        setShowNotification(!showNotification);
      }}
      delay={8000}
      autohide
      bg={messageBackground}
    >
      {" "}
      <Toast.Header
        onClick={(e) => {
          handleClickNotification(e);
        }}
      >
        {messageHeader}
      </Toast.Header>
      <Toast.Body
        onClick={(e) => {
          handleClickNotification(e);
        }}
      >
        {message}
      </Toast.Body>
    </Toast>
  );
};

export default Notification;
