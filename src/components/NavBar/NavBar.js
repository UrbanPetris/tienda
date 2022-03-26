import "./NavBar.css";
import Container from "../../../node_modules/react-bootstrap/Container/";
import Navbar from "../../../node_modules/react-bootstrap/Navbar/";
import Nav from "../../../node_modules/react-bootstrap/Nav/";
import Offcanvas from "../../../node_modules/react-bootstrap/Offcanvas/";
import CartWidget from "../CartWidget/CartWidget";
import { getCategories } from "../../services/firebase/firebase";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

const NavBar = () => {
  const [show, setShow] = useState(false);
  const [categories, setCategories] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    getCategories().then((response) => {
      const categories = response.docs.map((cat) => {
        return { id: cat.id, ...cat.data() };
      });
      setCategories(categories);
    });
  }, []);

  return (
    <Navbar
      sticky="top"
      className="navbar px-sm-5 px-1"
      variant="dark"
      expand={false}
    >
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
            <Nav style={{ alignItems: "center" }}>
              <NavLink
                onClick={handleClose}
                to={"/"}
                className={({ isActive }) =>
                  isActive ? "ActiveOption" : "Option"
                }
              >
                Home
              </NavLink>

              {categories.map((cat) => (
                <NavLink
                  key={cat.id}
                  to={`/category/${cat.id}`}
                  className={({ isActive }) =>
                    isActive ? "ActiveOption" : "Option"
                  }
                >
                  {cat.description}
                </NavLink>
              ))}

              <NavLink
                onClick={handleClose}
                to={"/contactform"}
                className={({ isActive }) =>
                  isActive ? "ActiveOption" : "Option"
                }
              >
                Datos de Contacto
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
