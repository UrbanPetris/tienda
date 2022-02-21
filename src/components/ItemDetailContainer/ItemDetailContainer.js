import Spinner from "../../../node_modules/react-bootstrap/Spinner/";
import Container from "../../../node_modules/react-bootstrap/Container/";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../asyncmock.js";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const { productId } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //este product está dentro del scope de la callback de useEffects
    //el useEffect se ejecuta después de que se renderice el componente con el return
    getProduct(productId)
      .then((product) => {
        setProduct(product);
      }, [])
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
