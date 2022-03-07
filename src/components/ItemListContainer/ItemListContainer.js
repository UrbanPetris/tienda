import Container from "../../../node_modules/react-bootstrap/Container/";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import Spinner from "../../../node_modules/react-bootstrap/Spinner/";
import { getDocs, collection, query, where } from "firebase/firestore";
import { firestoreDb } from "../../services/firebase/firebase";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]); //tengo que inicializar el estado con un array si no el método de array de map en ItemList se rompe
  const { categoryId } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //este products está dentro del scope de la callback de useEffects
    //el useEffect se ejecuta después de que se renderice el componente con el return
    setLoading(true); //cada vez que cambia de estado el categoryId se vuelve a ejecutar este setLoading(true) para simular el loading del componente

    const collectionRef = categoryId
      ? query(
          collection(firestoreDb, "products"),
          where("category", "==", categoryId)
        )
      : collection(firestoreDb, "products");

    getDocs(collectionRef)
      .then((querySnapshot) => {
        const products = querySnapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        setProducts(products);
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
