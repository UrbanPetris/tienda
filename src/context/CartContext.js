import { createContext, useContext } from "react";
import { useNotification } from "./NotificationContext";
import { useLocalStorage } from "../services/firebase/useLocalStorage";

const CartContext = createContext();
export const useCart = () => {
  return useContext(CartContext);
};

export const CartContextProvider = ({ children }) => {
  // const cartState =
  //   localStorage.cart != undefined
  //     ? JSON.parse(localStorage.getItem("cart"))
  //     : [];

  // const [cart, setCart] = useState(cartState);
  const [cart, setCart] = useLocalStorage("cart", []);
  const { setNotification, setMessageWidth, setMessageBackground } =
    useNotification();

  // useEffect(() => {
  //   localStorage.setItem("cart", JSON.stringify(cart));
  // }, [cart]);

  const addToCart = (item, quantity) => {
    setMessageWidth("item");
    setMessageBackground("light");
    if (isInCart(item.id)) {
      sumQuantity(item.id, quantity);

      setNotification(
        "Se actualizó en el carrito:",
        `"${item.name}" con ${quantity} unidad/es`
      );
    } else {
      setCart([...cart, { ...item, quantity }]);
      setNotification(
        "Se agregó al carrito...",
        `"${item.name}" (x${quantity})`
      );
    }
  };

  const isInCart = (id) => {
    return cart.some((product) => product.id === id);
  };

  const sumQuantity = (id, quantity) => {
    setCart(
      [...cart],
      cart.map((product) => product.id === id && (product.quantity = quantity))
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const removeProduct = (id) => {
    setCart(cart.filter((product) => product.id !== id));
  };

  const removeProducts = (productsToRemove) => {
    setCart(
      cart.filter((ct) => productsToRemove.every((pr) => pr.id !== ct.id))
    );
  };

  const getQuantity = () => {
    return cart.reduce(
      (accumulator, current) => accumulator + Number(current["quantity"]),
      0
    );
  };

  const getTotal = () => {
    let totalToPay = 0;
    cart.forEach((product) => (totalToPay += product.quantity * product.price));
    return totalToPay;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        getQuantity,
        clearCart,
        getTotal,
        removeProducts,
        removeProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
