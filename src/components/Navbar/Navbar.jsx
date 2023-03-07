import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Navbarq =()=> {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Delicious</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="nav-link active" aria-current="page">Home</Link>
            <Link to="/about" className="nav-link active" aria-current="page">About</Link>
            <Link to="/github" className="nav-link active" aria-current="page">Github</Link>
            <Link to="/login" className="nav-link active" aria-current="page">Logout</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarq;