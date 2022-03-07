import Spinner from "../../../node_modules/react-bootstrap/Spinner/";
import Container from "../../../node_modules/react-bootstrap/Container/";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import { firestoreDb } from "../../services/firebase/firebase";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const { productId } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true); //cada vez que cambia de estado el productId se vuelve a ejecutar este setLoading(true) para simular el loading del componente

    const docRef = doc(firestoreDb, "products", productId);

    getDoc(docRef)
      .then((doc) => {
        const product = { id: doc.id, ...doc.data() };
        setProduct(product);
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [productId]);

  return (
    <Container>
      {loading && product ? (
        <Spinner animation="grow" />
      ) : (
        <ItemDetail product={product}></ItemDetail>
      )}
    </Container>
  );
};

export default ItemDetailContainer;
