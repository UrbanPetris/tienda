import "./Item.css";
import Card from "../../../node_modules/react-bootstrap/Card";
import Col from "../../../node_modules/react-bootstrap/Col/";
import { NavLink } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <Col md={6} xxl={4} className="pt-4">
      <Card>
        <Card.Img variant="top" src={product.img} alt={product.name} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>
            {" "}
            <NavLink className="itemDetail" to={`/item/${product.id}`}>
              Ver detalle
            </NavLink>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Item;
