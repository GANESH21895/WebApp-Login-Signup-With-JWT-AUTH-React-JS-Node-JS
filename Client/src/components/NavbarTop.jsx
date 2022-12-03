import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';

function NavbarTop() {
  const navigate = useNavigate()
  // const token = localStorage.getItem('token')

  function logoutButtonHandle() {
    localStorage.clear()
    navigate('/login')
  }
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="">
            <button style={{display:'contents'}} type="button" onClick={logoutButtonHandle} className="btn btn-dark">Logout</button>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarTop;