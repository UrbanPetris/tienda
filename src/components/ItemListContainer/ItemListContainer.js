import Container from "../../../node_modules/react-bootstrap/Container/";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import Spinner from "../../../node_modules/react-bootstrap/Spinner/";
import { useNotificationServices } from "../../services/notification/NotificationServices";
import { getProducts } from "../../services/firebase/firebase";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]); //tengo que inicializar el estado con un array si no el método de array de map en ItemList se rompe
  const { categoryId } = useParams();
  const [loading, setLoading] = useState(true);
  const { setNotification, setMessageBackground } = useNotificationServices();

  useEffect(() => {
    //este products está dentro del scope de la callback de useEffects
    //el useEffect se ejecuta después de que se renderice el componente con el return
    setLoading(true); //cada vez que cambia de estado el categoryId se vuelve a ejecutar este setLoading(true) para simular el loading del componente

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
