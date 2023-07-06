import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import logo from '../../assets/logo.png'
import './Navbar.scss'
import { NavLink } from 'react-bootstrap';

function CollapsibleExample() {
    return (
        <Navbar fixed="top" collapseOnSelect expand="lg" className="bg-body-tertiary myNavbar">
            <Container>
                <Navbar.Brand href="#">
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
                    <Nav className="me-auto">
                        <Nav.Link href="#">Docs</Nav.Link>
                        <Nav.Link href="https://assemble-script.vercel.app/playground">Playground</Nav.Link>
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

export default CollapsibleExample;