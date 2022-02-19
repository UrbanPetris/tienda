import "./Item.css";
import Card from "../../../node_modules/react-bootstrap/Card";
import Col from "../../../node_modules/react-bootstrap/Col/";

const Item = ({ product }) => {
  return (
    <Col
      md={6}
      xxl={4}
      // style={{
      //   display: "flex",
      //   justifyContent: "center",
      //   alignItems: "center",
      // }}
    >
      <Card>
        <Card.Img variant="top" src={product.img} alt={product.name} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>Descripción</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Item;
