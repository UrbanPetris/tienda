import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item, quantity) => {
    if (isInCart(item.id)) {
      sumQuantity(item.id, quantity);
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  const isInCart = (id) => {
    return cart.some((product) => product.id === id);
  };

  const sumQuantity = (id, quantity) => {
    setCart(
      [...cart],
      cart.map((product) => product.id === id && (product.quantity += quantity))
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const removeProduct = (id) => {
    setCart(cart.filter((product) => product.id !== id));
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
        removeProduct,
        getTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
