import ItemCount from "../ItemCount/ItemCount";
import Container from "../../../node_modules/react-bootstrap/Container/";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts, getByCategory } from "../../asyncmock.js";
import ItemList from "../ItemList/ItemList";
import Spinner from "../../../node_modules/react-bootstrap/Spinner/";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]); //tengo que inicializar el estado con un array si no el método de array de map en ItemList se rompe
  const { categoryId } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //este products está dentro del scope de la callback de useEffects
    //el useEffect se ejecuta después de que se renderice el componente con el return
    setLoading(true); //cada vez que cambia de estado el categoryId se vuelve a ejecutar este setLoading(true) para simular el loading del componente
    if (!categoryId) {
      getProducts()
        .then((products) => {
          setProducts(products);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      getByCategory(categoryId)
        .then((products) => {
          setProducts(products);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [categoryId]);

  const handleOnAdd = (countItem) => {
    countItem > 0 && console.log(`Se agregaron ${countItem} productos`);
  };

  return (
    <Container>
      {/* <ItemCount stock={5} initial={1} onAdd={handleOnAdd}></ItemCount> */}
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
