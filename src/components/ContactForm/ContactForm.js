import { useContactForm } from "../../context/ContactFormContext";
import { useNotification } from "../../context/NotificationContext";
import { useEffect, useState } from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";
import { GrContactInfo } from "react-icons/gr";
import Card from "../../../node_modules/react-bootstrap/Card";

const ContactForm = () => {
  const {
    name,
    setName,
    lastName,
    setLastName,
    phone,
    setPhone,
    address,
    setAddress,
    comment,
    setComment,
    contactFormValidated,
    setContactFormValidated,
  } = useContactForm();

  const { setNotification, setMessageBackground } = useNotification();

  const [toggleDisabledDatos, setToggleDisabledDatos] = useState(true);
  const [disableSubmit, setDisableSubmit] = useState(true);

  const nameHolder = "";

  useEffect(() => {
    if ([name, lastName, phone, address].every((v) => v !== "")) {
      setDisableSubmit(false);
    } else {
      setDisableSubmit(true);
      setContactFormValidated(false);
    }
  }, [name, lastName, phone, address]);

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
                  validated={contactFormValidated}
                  onSubmit={handleSubmit}
                >
                  <Card.Title>Datos de Contacto</Card.Title>
                  <Form.Group as={Col} controlId="name">
                    <Form.Label>Nombre/s</Form.Label>
                    <Form.Control
                      disabled={toggleDisabledDatos}
                      required
                      type="text"
                      placeholder="Nombre/s"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="lastName">
                    <Form.Label>Apellido/s</Form.Label>
                    <Form.Control
                      disabled={toggleDisabledDatos}
                      required
                      type="text"
                      placeholder="Apellido/s"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="phone">
                    <Form.Label>Teléfono de Contacto</Form.Label>
                    <Form.Control
                      disabled={toggleDisabledDatos}
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
                      disabled={toggleDisabledDatos}
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
                      disabled={toggleDisabledDatos}
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
                    {contactFormValidated ? (
                      <Button
                        variant="info"
                        style={{ width: "auto" }}
                        onClick={() => {
                          setToggleDisabledDatos(!toggleDisabledDatos);
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
                    ) : (
                      <Button
                        disabled={disableSubmit}
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
                        Confirmar datos
                      </Button>
                    )}
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
