import React from 'react'
import { Navbar, Nav, Container,Row, Col} from 'react-bootstrap';
import "./Navbar.css"


const AppNavbar = () => {
  return (
    <>
    <Navbar  bg="dark" data-bs-theme="dark"  >  
   
      <Container >
     
        <Nav  className="custom-nav" >
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#store">STORE</Nav.Link>
          <Nav.Link href="#about">ABOUT</Nav.Link>
        </Nav>
       
      </Container>
      <button className='cart-button'>cart</button>
    </Navbar>
    
   <Container fluid className="full-width-column">
<Row>
  <Col>
  <h1 className="generic">The Generies</h1>
  </Col>
</Row>

   </Container>
  </>
  )
}

export default AppNavbar




// import React from 'react';
// import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
// import './Navbar.css';

// const AppNavbar = () => {
//   return (
//     <>
//       <Navbar bg="dark" data-bs-theme="dark">
//         <Container>
//           <Nav className="custom-nav">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#store">STORE</Nav.Link>
//             <Nav.Link href="#about">ABOUT</Nav.Link>
//           </Nav>
//         </Container>
//         <button className="cart-button">cart</button>
//       </Navbar>

//       {/* Full-width column below the navbar */}
//       <Container fluid className="full-width-column">
//         <Row>
//           <Col>
//             <h1 className="custom-heading">Welcome to Our Store</h1>
//           </Col>
//         </Row>
//       </Container>
//     </>
//   );
// };

// export default AppNavbar;
