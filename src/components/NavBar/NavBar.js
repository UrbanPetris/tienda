import "./NavBar.css";
import Container from "../../../node_modules/react-bootstrap/Container/";
import Navbar from "../../../node_modules/react-bootstrap/Navbar/";
import Nav from "../../../node_modules/react-bootstrap/Nav/";
import Button from "../../../node_modules/react-bootstrap/Button/";

const NavBar = () => {
  return (
    <Navbar className="navbar px-5" variant="dark" expand="md">
      <Container>
        <Navbar.Brand href="#">Argentina 360</Navbar.Brand>
        <Navbar.Toggle aria-controls="tienda-nav" />
        <Navbar.Collapse id="tienda-nav">
          <Nav
            className="justify-content-end"
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
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
