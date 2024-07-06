import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import "./App.css";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-body-white">
      <Container fluid>
        <Navbar.Brand className="logo" href="#">
          <img src="../src/assets/images/logo.png" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavDropdown
              className="Link"
              title="Home"
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item href="#action3">Home 1</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Home 2</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Home 3</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              className="Link"
              title="Page"
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item href="#action3">Page 1</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Page 2</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Page 3</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              className="Link"
              title="Course"
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item href="#action3">Course 1</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Course 2</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Course 3</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              className="Link"
              title="Blog"
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item href="#action3">Blog 1</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Blog 2</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Blog 3</NavDropdown.Item>
            </NavDropdown>
            <Nav className="Link1" href="#action1">
              Contact
            </Nav>
          </Nav>
          <Form className="d-flex Sreach">
            <Form.Control
              type="search"
              placeholder="Search"
              className="Srec"
              aria-label="Search"
            />
            <Button variant="outline-success">
              <span className="Srec">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </span>
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
