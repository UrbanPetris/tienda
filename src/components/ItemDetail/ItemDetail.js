import ItemCount from "../ItemCount/ItemCount";
import Card from "../../../node_modules/react-bootstrap/Card";
import Col from "../../../node_modules/react-bootstrap/Col/";
import Row from "../../../node_modules/react-bootstrap/Row/";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./ItemDetail.css";

const ItemDetail = ({ img, name, categoryDescription, description, price }) => {
  //agregar id

  const [quantitytobuy, setQuantitytobuy] = useState(0);

  const handleAdd = (quantity) => {
    quantity > 0 && setQuantitytobuy(quantity);
  };

  return (
    <Row style={{ rowGap: 10 }}>
      <Col md={6} xxl={4} className="pt-4">
        <Card>
          <Card.Img variant="top" src={img} alt={name} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>Tipo de salida: {categoryDescription}</Card.Text>
            <Card.Text>Detalle: {description}</Card.Text>
            <Card.Text>Precio: {price}</Card.Text>
            {quantitytobuy > 0 ? (
              <Link to={"/Cart"}>Ir al carrito</Link>
            ) : (
              <ItemCount stock={5} initial={1} onAdd={handleAdd}></ItemCount>
            )}
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default ItemDetail;
