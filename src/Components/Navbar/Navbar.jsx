import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import logo from '../../assets/logo.png';
import { useLocation } from 'react-router-dom';
import './Navbar.scss'

function AssembleNav() {
    const location = useLocation();
    return (
        <Navbar fixed="top" collapseOnSelect expand="lg" className="bg-body-tertiary myNavbar">
            <Container>
                <Navbar.Brand href="/">
                    <img
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                    &nbsp;
                    AssembleScript
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav activeKey={location.pathname} className="me-auto">
                        <Nav.Link href="/docs">Docs</Nav.Link>
                        <Nav.Link href="/playground">Playground</Nav.Link>
                        <Nav.Link href="#">Team</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#">
                            <Button className='my-btn' variant="light"><i className="fa-solid fa-code"></i> Code</Button>
                            </Nav.Link>
                        <Nav.Link  href="#">
                            <Button variant="dark"><i className="fa-brands fa-github"></i> GitHub</Button>
                            </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default AssembleNav;