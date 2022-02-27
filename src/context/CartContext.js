import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item, quantity) => {
    if (isInCart(item.id)) {
      sumQuantity(item.id, quantity);
      //   removeProduct(item.id);
      //   clearCart();
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  const isInCart = (id) => {
    return cart.some((product) => product.id === id);
  };

  const sumQuantity = (id, quantity) => {
    // setCart(
    //   [...cart],
    //   cart.map((product) => product.id === id && (product.quantity += quantity))
    // );

    const copia = [...cart];
    copia.map((product) => product.id === id && (product.quantity += quantity)); //consultar ACÁ!!!!
  };

  const clearCart = () => {
    setCart([]);
  };

  const removeProduct = (id) => {
    setCart(cart.filter((product) => product.id !== id));
  };

  console.log(cart);

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
