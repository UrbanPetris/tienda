import "./App.css";
import NavBar from "./components/NavBar/NavBar.js";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ContactForm from "./components/ContactForm/ContactForm";
import Cart from "./components/Cart/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from "./context/CartContext";
import { NotificationContextProvider } from "./context/NotificationContext";
import { ContactFormProvider } from "./context/ContactFormContext";

function App() {
  return (
    <div className="App">
      <NotificationContextProvider>
        <ContactFormProvider>
          <CartContextProvider>
            <BrowserRouter>
              <NavBar />
              <Routes>
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
                <Route path="/contactform" element={<ContactForm />} />
              </Routes>
            </BrowserRouter>
          </CartContextProvider>
        </ContactFormProvider>
      </NotificationContextProvider>
    </div>
  );
}

export default App;
