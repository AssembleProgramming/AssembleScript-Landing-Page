import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { useLocation } from "react-router-dom";
import "./Navbar.scss";
import { useEffect, useState } from "react";

function AssembleNav() {
  const location = useLocation();
  const [activeKey, setActiveKey] = useState("");
  useEffect(() => {
    if (location.pathname.includes("/docs/")) {
      setActiveKey("/docs/latest");
      return;
    }
    setActiveKey(location.pathname);
  }, [])


  return (
    <Navbar
      fixed="top"
      collapseOnSelect
      expand="lg"
      className="bg-body-tertiary myNavbar"
    >
      <Container>
        <Navbar.Brand href="/">
          <img
            src="../favicon.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="logo"
          />
          &nbsp; AssembleScript
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav activeKey={activeKey} className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/docs/latest">Docs</Nav.Link>
            <Nav.Link href="/playground">Playground</Nav.Link>
            <Nav.Link href="/team">Team</Nav.Link>
            {/* <Nav.Link href="/contest">Contest</Nav.Link> */}
            <Nav.Link href="/terms-of-service">Terms</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link
              target="_blank"
              href="https://github.com/AssembleProgramming/AssembleScript/blob/main/CONTRIBUTING.md"
            >
              <Button className="my-btn" variant="light">
                <i className="fa-solid fa-code-pull-request"></i> Contribute
              </Button>
            </Nav.Link>
            <Nav.Link
              target="_blank"
              href="https://github.com/AssembleProgramming"
            >
              <Button className="about-us-btn" variant="dark">
                <i className="fa-brands fa-github"></i> About Us
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AssembleNav;
