import { Container, Row, Col } from "../../../node_modules/react-bootstrap/";
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
        <Row className="pt-4" style={{ rowGap: 15 }}>
          <Col xs={12} style={{ maxHeight: 600 }}>
            <img
              src="../img/empty_cart.png"
              alt="empty_cart"
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            ></img>
          </Col>
          <Col xs={12}>
            <h1>¡No hay productos!</h1>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default ItemListContainer;
