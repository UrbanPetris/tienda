import Container from "../../../node_modules/react-bootstrap/Container/";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import Spinner from "../../../node_modules/react-bootstrap/Spinner/";
import { useNotification } from "../../context/NotificationContext";
import { getProducts } from "../../services/firebase/firebase";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();
  const [loading, setLoading] = useState(true);
  const { setNotification, setMessageBackground } = useNotification();

  useEffect(() => {
    setLoading(true);
    getProducts(categoryId)
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => {
        setMessageBackground("danger");
        setNotification("error", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  return (
    <Container>
      {loading ? (
        <Spinner animation="grow" />
      ) : products.length ? (
        <>
          <ItemList products={products}></ItemList>
        </>
      ) : (
        <h1>¡No hay productos!</h1>
      )}
    </Container>
  );
};

export default ItemListContainer;
