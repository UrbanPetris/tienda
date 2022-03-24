import Spinner from "../../../node_modules/react-bootstrap/Spinner/";
import Container from "../../../node_modules/react-bootstrap/Container/";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useNotificationServices } from "../../services/notification/NotificationServices";
import { getProductById } from "../../services/firebase/firebase";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const { productId } = useParams();
  const [loading, setLoading] = useState(true);
  const { setNotification, setMessageBackground } = useNotificationServices();

  useEffect(() => {
    setLoading(true); //cada vez que cambia de estado el productId se vuelve a ejecutar este setLoading(true) para simular el loading del componente

    getProductById(productId)
      .then((response) => {
        setProduct(response);
      })
      .catch((error) => {
        setMessageBackground("danger");
        setNotification("error", `Error buscando producto: ${error}`);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [productId]);

  const estiloContainer = {
    // minHeight: "92vh",
    // display: "flex",
    // flexDirection: "column",
  };

  return (
    <Container fluid style={estiloContainer}>
      {loading && product ? (
        <Spinner animation="grow" />
      ) : (
        <ItemDetail
          product={product}
          style={{
            display: "flex",
            alignItems: "center",
          }}
        ></ItemDetail>
      )}
    </Container>
  );
};

export default ItemDetailContainer;
