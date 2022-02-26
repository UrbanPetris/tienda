import ItemCount from "../ItemCount/ItemCount";
import Card from "../../../node_modules/react-bootstrap/Card";
import Col from "../../../node_modules/react-bootstrap/Col/";
import Row from "../../../node_modules/react-bootstrap/Row/";
import "./ItemDetail.css";

const ItemDetail = ({ product }, inputType = "button") => {
  const handleOnAdd = (quantity) => {
    quantity > 0 && console.log(`Se agregaron ${quantity} productos`); // esta función en el componente padre va a ejecutar algo que suceda en el componetne hijo (ItemCount)
  };

  const ItemInput = () => {
    return "1";
  };

  const Count = inputType === "button" ? ItemCount : ItemInput;

  return (
    <Row style={{ rowGap: 10 }}>
      <Col md={6} xxl={4} className="pt-4">
        <Card>
          <Card.Img variant="top" src={product.img} alt={product.name} />
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>Tipo de salida: {product.categoryDescription}</Card.Text>
            <Card.Text>Detalle: {product.description}</Card.Text>
            <Card.Text>Precio: {product.price}</Card.Text>
            <Count stock={5} initial={1} onAdd={handleOnAdd}></Count>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default ItemDetail;
