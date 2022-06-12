import { Navbar, Nav, Container } from "react-bootstrap"


const NavBar = () =>
<Container>
  <Navbar bg="primary" expand="lg" variant="dark">
  <Container>
    <Navbar.Brand href="#home">Waiter.app</Navbar.Brand>
    <Nav.Item>
        <Nav.Link href="/home">Home</Nav.Link>
    </Nav.Item>
  </Container>
  </Navbar>
</Container>

export default NavBar;