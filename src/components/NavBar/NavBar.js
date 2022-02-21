import "./NavBar.css";
import Container from "../../../node_modules/react-bootstrap/Container/";
import Navbar from "../../../node_modules/react-bootstrap/Navbar/";
import Nav from "../../../node_modules/react-bootstrap/Nav/";
import Button from "../../../node_modules/react-bootstrap/Button/";
import Offcanvas from "../../../node_modules/react-bootstrap/Offcanvas/";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar className="navbar px-5" variant="dark" expand={false}>
      <Container fluid>
        <Navbar.Toggle aria-controls="tiendaNavbar" onClick={handleShow} />
        <Navbar.Offcanvas
          id="tiendaNavbar"
          aria-labelledby="tiendaNavbarLabel"
          placement="start"
          show={show}
          onHide={handleClose}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="tiendaNavbarLabel"></Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav
              style={{ alignItems: "center" }} //por default pone los child items en stretch y puede dificultar UX
            >
              <NavLink
                onClick={handleClose}
                to={"/"}
                className={
                  ({ isActive }) => (isActive ? "ActiveOption" : "Option") //cambiar
                }
              >
                Home
              </NavLink>
              <NavLink
                onClick={handleClose}
                to={"/category/excursion"}
                className={
                  ({ isActive }) => (isActive ? "ActiveOption" : "Option") //cambiar
                }
              >
                Excursiones
              </NavLink>
              <NavLink
                onClick={handleClose}
                to={"/category/navegacion"}
                className={
                  ({ isActive }) => (isActive ? "ActiveOption" : "Option") //cambiar
                }
              >
                Navegaciones
              </NavLink>

              <NavLink
                onClick={handleClose}
                to={"/category/trekking"}
                className={
                  ({ isActive }) => (isActive ? "ActiveOption" : "Option") //cambiar
                }
              >
                Trekking
              </NavLink>
              {/* <Nav.Link href="#">Contacto</Nav.Link>
              <Nav.Link href="#">
                {" "}
                <Button variant="light">Login</Button>
              </Nav.Link> */}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
        <Navbar.Brand href="#">
          <NavLink to={"/"}>Argentina 360</NavLink>
        </Navbar.Brand>
        <CartWidget />
      </Container>
    </Navbar>
  );
};

export default NavBar;
