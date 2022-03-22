import { useContactForm } from "../../context/ContactFormContext";
import { useNotificationServices } from "../../services/notification/NotificationServices";
import { useEffect, useState } from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";
import { GrContactInfo } from "react-icons/gr";
import Card from "../../../node_modules/react-bootstrap/Card";

const ContactForm = () => {
  const {
    name,
    setName,
    lastname,
    setLastName,
    phone,
    setPhone,
    address,
    setAddress,
    comment,
    setComment,
    contactformvalidated,
    setContactFormValidated,
  } = useContactForm();

  const { setNotification, setMessageBackground } = useNotificationServices();

  const [toggledisableddatos, setToggleDisabledDatos] = useState(true);
  const [disablesubmit, setDisableSubmit] = useState(true);

  useEffect(() => {
    if (name !== "" && lastname !== "" && phone !== "" && address !== "") {
      setDisableSubmit(false);
    } else {
      setDisableSubmit(true);
    }
  }, [name, lastname, phone, address]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setContactFormValidated(true);
    setMessageBackground("info");
    setNotification(
      "Actualización exitosa",
      "Se han completado los datos de contacto"
    );
  };

  return (
    <Container>
      <Row>
        <Col className="pt-4">
          <Row className="justify-content-center">
            <Card>
              <Card.Body>
                <Form
                  noValidate
                  validated={contactformvalidated}
                  onSubmit={handleSubmit}
                >
                  <Card.Title>Datos de Contacto</Card.Title>
                  <Form.Group as={Col} controlId="name">
                    <Form.Label>Nombre/s</Form.Label>
                    <Form.Control
                      disabled={toggledisableddatos}
                      required
                      type="text"
                      placeholder="Nombre/s"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="lastname">
                    <Form.Label>Apellido/s</Form.Label>
                    <Form.Control
                      disabled={toggledisableddatos}
                      required
                      type="text"
                      placeholder="Apellido/s"
                      value={lastname}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="phone">
                    <Form.Label>Teléfono de Contacto</Form.Label>
                    <Form.Control
                      disabled={toggledisableddatos}
                      required
                      type="text"
                      placeholder="+54911..."
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="address">
                    <Form.Label>Dirección de Facturación</Form.Label>
                    <Form.Control
                      disabled={toggledisableddatos}
                      required
                      type="text"
                      placeholder="Calle Número, Localidad, Provincia, País"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="comment">
                    <Form.Label>Comentarios</Form.Label>
                    <Form.Control
                      disabled={toggledisableddatos}
                      as="textarea"
                      rows={3}
                      placeholder="Agregue un comentario o aclaración a su pedido"
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                    />
                  </Form.Group>
                  <Row
                    style={{ columnGap: 20 }}
                    className="justify-content-center pt-2"
                  >
                    <Button
                      disabled={disablesubmit}
                      style={{ width: "auto" }}
                      variant="success"
                      type="submit"
                    >
                      <GrContactInfo
                        style={{
                          paddingRight: "10px",
                          fontSize: "30px",
                        }}
                      />
                      {contactformvalidated
                        ? "Actualizar datos"
                        : "Confirmar datos"}{" "}
                    </Button>
                    <Button
                      variant="info"
                      style={{ width: "auto" }}
                      onClick={() => {
                        setToggleDisabledDatos(!toggledisableddatos);
                      }}
                    >
                      <FaEdit
                        style={{
                          paddingRight: "10px",
                          fontSize: "30px",
                        }}
                      />
                      Editar datos
                    </Button>
                  </Row>
                </Form>
              </Card.Body>
            </Card>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactForm;
