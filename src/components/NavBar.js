import '../App.css';
import {Nav, Navbar, Container} from "react-bootstrap";
import {Link} from "react-router-dom";

function NavBar() {
    return (
        <>
            <Navbar className="top-nav" expand="xl" variant="light">
                <Container id="Navbar">
                    <Navbar.Brand href="#home"></Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link className="nav-item" as={Link} to="/">Home</Nav.Link>
                            <Nav.Link className="nav-item" as={Link} to="/about">About</Nav.Link>
                            <Nav.Link className="nav-item" as={Link} to="/blog">Blog</Nav.Link>
                        </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;