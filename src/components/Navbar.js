import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar, Nav, Container, Form, Button } from "react-bootstrap";
import { Sun, Moon, Bookmark } from "react-feather";

function MyNavbar({ setSearchQuery }) {  // ✅ Ensure setSearchQuery is received
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  useEffect(() => {
    document.body.className = darkMode ? "dark-mode" : "light-mode";
  }, [darkMode]);

  return (
    <Navbar expand="lg" bg={darkMode ? "dark" : "light"} variant={darkMode ? "dark" : "light"} className="shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold">
          HiringHood
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className={location.pathname === "/" ? "active" : ""}>Home</Nav.Link>
            <Nav.Link as={Link} to="/saved-jobs" className={location.pathname === "/saved-jobs" ? "active" : ""}>
              <Bookmark size={18} />
            </Nav.Link>
          </Nav>

          {/* ✅ Search Bar */}
          <Form className="d-flex">
            <Form.Control
              type="text"
              placeholder="Search jobs..."
              onChange={(e) => setSearchQuery(e.target.value)} // ✅ Fix: Use setSearchQuery correctly
              className="me-2"
            />
            <Button variant="outline-primary">Search</Button>
          </Form>

          {/* Dark Mode Toggle */}
          <Button variant="outline-secondary" className="ms-3" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
