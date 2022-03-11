import { useState, createContext, useContext } from "react";

const NotificationContext = createContext();
export const useNotificationServices = () => {
  return useContext(NotificationContext);
};

export const NotificationServicesProvider = ({ children }) => {
  const [message, setMessage] = useState("");
  const [messageHeader, setMessageHeader] = useState("");
  const [showNotification, setShowNotification] = useState(false);
  const [messageWidth, setMessageWidth] = useState("item");
  const [messageBackground, setMessageBackground] = useState("light");

  const setNotification = (action, detail) => {
    setMessageHeader(action);
    setMessage(detail);
    setShowNotification(true);
  };

  return (
    <NotificationContext.Provider
      value={{
        setNotification,
        message,
        setMessage,
        messageHeader,
        setMessageHeader,
        showNotification,
        setShowNotification,
        messageWidth,
        setMessageWidth,
        messageBackground,
        setMessageBackground,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};
