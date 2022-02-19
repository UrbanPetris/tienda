import "./App.css";
import NavBar from "./components/NavBar/NavBar.js";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer saludo="Hola mundo" />
      <ItemDetailContainer />
    </div>
  );
}

export default App;
