import ItemCount from "../ItemCount/ItemCount";
import { Cart, EmojiSunglasses } from "react-bootstrap-icons";
import { BiLandscape } from "react-icons/bi";
import Card from "../../../node_modules/react-bootstrap/Card";
import Col from "../../../node_modules/react-bootstrap/Col/";
import Row from "../../../node_modules/react-bootstrap/Row/";
import { Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import Button from "../../../node_modules/react-bootstrap/Button";
import "./ItemDetail.css";

const ItemDetail = ({ product }) => {
  const [quantitytobuy, setQuantitytobuy] = useState(0);
  const { addToCart } = useContext(CartContext);

  const handleAdd = (quantity) => {
    setQuantitytobuy(quantity);
    addToCart(product, quantity);
  };

  return (
    <>
      <Col xs={12} className="pt-3">
        {" "}
        <h5> {product.name}</h5>
      </Col>
      <Row className="pt-4 align-items-center">
        <Col lg={6} className="imageColumn">
          {" "}
          <div className="imageContainer">
            <img
              style={{ maxWidth: "100%" }}
              src={product.img}
              alt={product.name}
            ></img>
            <Badge className="tipoExcursion" bg="success">
              {product.categoryDescription}
            </Badge>
          </div>
        </Col>
        <Col lg={6} className="mt-4 mt-lg-0 description">
          <Card.Body>
            <Card.Text>Detalle: {product.description}</Card.Text>
            <Card.Text>Precio: ${product.price}</Card.Text>
            <Row style={{ rowGap: 10 }}>
              {" "}
              {quantitytobuy > 0 ? (
                <>
                  <Col sm={4}>
                    <Button
                      variant="outline-success"
                      onClick={() => {
                        setQuantitytobuy(0);
                      }}
                    >
                      <BiLandscape
                        style={{
                          paddingRight: "10px",
                          fontSize: "30px",
                        }}
                      />
                      <span>Modificar</span>
                    </Button>
                  </Col>
                  <Col sm={4}>
                    <Link to={"/"}>
                      <Button variant="outline-success">
                        <EmojiSunglasses
                          style={{
                            paddingRight: "10px",
                            fontSize: "30px",
                          }}
                        />
                        <span>Ver más excursiones</span>
                      </Button>
                    </Link>
                  </Col>
                  <Col sm={4}>
                    <Link to={"/Cart"}>
                      <Button variant="outline-success">
                        <Cart
                          style={{
                            paddingRight: "10px",
                            fontSize: "30px",
                          }}
                        />
                        <span>Ir al carrito </span>
                      </Button>
                    </Link>
                  </Col>
                </>
              ) : (
                <ItemCount
                  stock={product.stock}
                  initial={1}
                  onAdd={handleAdd}
                ></ItemCount>
              )}
            </Row>
          </Card.Body>
        </Col>
      </Row>
    </>
  );
};

export default ItemDetail;
