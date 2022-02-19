import Spinner from "../../../node_modules/react-bootstrap/Spinner/";
import Container from "../../../node_modules/react-bootstrap/Container/";
import { useEffect, useState } from "react";
import { getProduct } from "../../asyncmock.js";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //este product está dentro del scope de la callback de useEffects
    getProduct()
      .then((product) => {
        setProduct(product);
      }, [])
      .finally(() => {
        setLoading(false);
      });
  });

  return (
    <Container>
      {loading ? (
        <Spinner animation="grow" />
      ) : (
        <ItemDetail product={product}></ItemDetail>
      )}
    </Container>
  );
};

export default ItemDetailContainer;
