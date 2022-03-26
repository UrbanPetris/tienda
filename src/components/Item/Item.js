import "./Item.css";
import Card from "../../../node_modules/react-bootstrap/Card";
import Col from "../../../node_modules/react-bootstrap/Col/";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <Col md={6} xxl={4} className="pt-4">
      <Card>
        <div className="img-wraper">
          <Link to={`/item/${product.id}`}>
            <Card.Img variant="top" src={product.img} alt={product.name} />
          </Link>
          <p className="img-detail">Ver detalle</p>
        </div>
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Item;
