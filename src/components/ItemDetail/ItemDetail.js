import Card from "../../../node_modules/react-bootstrap/Card";
import Col from "../../../node_modules/react-bootstrap/Col/";
import Row from "../../../node_modules/react-bootstrap/Row/";
import "./ItemDetail.css";

const ItemDetail = ({ product }) => {
  return (
    <Row style={{ rowGap: 10 }}>
      <Col md={6} xxl={4}>
        <Card>
          <Card.Img variant="top" src={product.img} alt={product.name} />
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>Tipo de salida: {product.category}</Card.Text>
            <Card.Text>Detalle: {product.description}</Card.Text>
            <Card.Text>Precio: {product.price}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default ItemDetail;
