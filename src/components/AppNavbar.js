
import React from 'react';
import { Navbar, Nav, Container, Button,Row, Col } from 'react-bootstrap';
import "./Navbar.css";

const AppNavbar = ({ toggleDrawer }) => {
  console.log("toggleDrawer :", toggleDrawer);

  return (
    <>
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Nav className="custom-nav">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="store">STORE</Nav.Link>
          <Nav.Link href="about">ABOUT</Nav.Link>
          {/* <Nav.Link href="cart">Cart</Nav.Link> */}

        </Nav>
      </Container>
       <Button id="checkId" variant="primary" onClick={toggleDrawer}>
        Cart
      </Button>
      

<Nav.Link onClick={toggleDrawer} id="checkId" variant="primary">
  Cart
</Nav.Link>
      </Navbar>


     {<Container fluid className="full-width-column">
<Row>
  <Col>
  <h1 className="generic">The Generies</h1>
  </Col>
 </Row>


   </Container>}

  </>
  );
};
export default AppNavbar;
