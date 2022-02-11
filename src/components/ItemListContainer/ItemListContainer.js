import ItemCount from "../ItemCount/ItemCount";
import Container from "../../../node_modules/react-bootstrap/Container/";

const ItemListContainer = () => {
  function handleOnAdd(countItem) {
    if (countItem > 0) {
      console.log(`Se agregaron ${countItem} productos`);
    }
  }

  return (
    <Container>
      <div>Bienvenido</div>
      <ItemCount stock={5} initial={0} onAdd={handleOnAdd}></ItemCount>
    </Container>
  );
};

export default ItemListContainer;
