import ItemCount from "../ItemCount/ItemCount";
import Container from "../../../node_modules/react-bootstrap/Container/";
import { useEffect, useState } from "react";
import { getProducts } from "../../asyncmock.js";
import ItemList from "../ItemList/ItemList";
import Spinner from "../../../node_modules/react-bootstrap/Spinner/";

const ItemListContainer = ({ saludo }) => {
  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //este products está dentro del scope de la callback de useEffects
    getProducts()
      .then((products) => {
        setProducts(products);
      }, [])
      .finally(() => {
        setLoading(false);
      });
  });

  const handleOnAdd = (countItem) => {
    countItem > 0 && console.log(`Se agregaron ${countItem} productos`);
  };

  return (
    <Container>
      {/* <ItemCount stock={5} initial={1} onAdd={handleOnAdd}></ItemCount> */}
      {loading ? (
        <Spinner animation="grow" />
      ) : (
        <>
          <div>{saludo}</div>
          <ItemList products={products}></ItemList>
        </>
      )}
    </Container>
  );
};

export default ItemListContainer;
