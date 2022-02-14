import Item from "../Item/Item";
import Row from "../../../node_modules/react-bootstrap/Row/";

const ItemList = ({ products }) => {
  return (
    <Row style={{ rowGap: 10 }}>
      {products.map((product) => {
        return <Item key={product.id} product={product}></Item>;
      })}
    </Row>
  );
};

export default ItemList;
