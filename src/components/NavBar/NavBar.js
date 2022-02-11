import "./NavBar.css";
import Container from "../../../node_modules/react-bootstrap/Container/";
import Navbar from "../../../node_modules/react-bootstrap/Navbar/";
import Nav from "../../../node_modules/react-bootstrap/Nav/";
import Button from "../../../node_modules/react-bootstrap/Button/";
import Offcanvas from "../../../node_modules/react-bootstrap/Offcanvas/";

import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <Navbar className="navbar px-5" variant="dark" expand={false}>
      <Container fluid>
        <Navbar.Toggle aria-controls="tiendaNavbar" />
        <Navbar.Offcanvas
          id="tiendaNavbar"
          aria-labelledby="tiendaNavbarLabel"
          placement="start"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="tiendaNavbarLabel"></Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav
              style={{ width: "100%", alignItems: "center" }} //por default pone los child items en stretch y puede dificultar UX
            >
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">Paquetes</Nav.Link>
              <Nav.Link href="#">Excursiones</Nav.Link>
              <Nav.Link href="#">Mapas</Nav.Link>
              <Nav.Link href="#">Contacto</Nav.Link>
              <Nav.Link href="#">
                {" "}
                <Button variant="light">Login</Button>
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
        <Navbar.Brand href="#">Argentina 360</Navbar.Brand>
        <CartWidget />
      </Container>
    </Navbar>
  );
};

export default NavBar;
