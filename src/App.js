import "./App.css";
import NavBar from "./components/NavBar/NavBar.js";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { CartContextProvider } from "./context/CartContext";
import { NotificationServicesProvider } from "./services/notification/NotificationServices";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <NotificationServicesProvider>
        <CartContextProvider>
          {/* <BrowserRouter> */}
          <NavBar />
          <TransitionGroup component={null}>
            <CSSTransition key={location.key} classNames="fade" timeout={500}>
              <Routes location={location}>
                {/* <Routes> */}
                <Route path="/" element={<ItemListContainer />} />
                <Route
                  path="/category/:categoryId"
                  element={<ItemListContainer />}
                />
                <Route
                  path="/item/:productId"
                  element={<ItemDetailContainer />}
                />
                <Route path="/Cart" element={<Cart />} />
              </Routes>
            </CSSTransition>
          </TransitionGroup>
          {/* </BrowserRouter> */}
        </CartContextProvider>
      </NotificationServicesProvider>
    </div>
  );
}

export default App;
