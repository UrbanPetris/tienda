import "./NavBar.css";
import Container from "../../../node_modules/react-bootstrap/Container/";
import Navbar from "../../../node_modules/react-bootstrap/Navbar/";
import Nav from "../../../node_modules/react-bootstrap/Nav/";
import Offcanvas from "../../../node_modules/react-bootstrap/Offcanvas/";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar className="navbar px-sm-5 px-1" variant="dark" expand={false}>
      <Container
        fluid
        className="justify-content-around justify-content-sm-between"
      >
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
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
        <Navbar.Brand href="#">
          <NavLink
            to={"/"}
            style={{ fontSize: 27, fontFamily: "Brush Script MT" }}
          >
            Argentina 360
          </NavLink>
        </Navbar.Brand>

        <CartWidget />
      </Container>
    </Navbar>
  );
};

export default NavBar;
