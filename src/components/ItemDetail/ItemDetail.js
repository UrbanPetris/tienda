import ItemCount from "../ItemCount/ItemCount";
import Card from "../../../node_modules/react-bootstrap/Card";
import Col from "../../../node_modules/react-bootstrap/Col/";
import Row from "../../../node_modules/react-bootstrap/Row/";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import "./ItemDetail.css";

const ItemDetail = ({ product }) => {
  const [quantitytobuy, setQuantitytobuy] = useState(0);
  const { addToCart } = useContext(CartContext);

  const handleAdd = (quantity) => {
    quantity > 0 && setQuantitytobuy(quantity);
    addToCart(product, quantity);
  };

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
