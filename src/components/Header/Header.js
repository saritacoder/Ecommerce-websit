
// import React from 'react';
// import { Navbar, Nav, Container, Button,Row, Col } from 'react-bootstrap';
// import "./Header.css";

// const Header = ({ toggleDrawer }) => {
//   console.log("toggleDrawer :", toggleDrawer);

//   return (
//     <>
//     <Navbar bg="dark" data-bs-theme="dark">
//       <Container>
//         <Nav className="custom-nav">
//           <Nav.Link href="/">Home</Nav.Link>
//           <Nav.Link href="store">STORE</Nav.Link>
//           <Nav.Link href="about">ABOUT</Nav.Link>
//           <Nav.Link href="contact">Contact Us</Nav.Link>

//         </Nav>
//       </Container>
//        <Button id="checkId" variant="primary" onClick={toggleDrawer}>
//         Cart
//       </Button>
      

// <Nav.Link onClick={toggleDrawer} id="checkId" variant="primary">
//   Cart
// </Nav.Link>
//       </Navbar>


//      {<Container fluid className="full-width-column">
// <Row>
//   <Col>
//   <h1 className="generic">The Generies</h1>
//   </Col>
//  </Row>


//    </Container>}

//   </>
//   );
// };
// export default Header;







import { useContext } from 'react';
// import { Link, useHistory } from 'react-router-dom';
import './Header.css';
import Navigation from './Navigation';
import CartButton from './CartButton';
import Cart from '../Carts/Cart'
// import AuthContext from '../../Context/AuthContext';
import CartContext from '../../context/CartContext';

export default function Header() {
  // const authCtx = useContext(AuthContext);
  const cartCtx = useContext(CartContext);

  // const history = useHistory();

  return (
    <div>
    {/*  <header className="header"> */}
      {/* { <Link className="navbar-brand" to="/home"> */}
        {/* Brand name/logo or additional content can be added here if needed */}
      {/* </Link> } */}
      <nav>
        <Navigation />
      </nav>
      {/* <div className="login-cart-btn"> */}
        {/* {!authCtx.isLoggedIn && ( */}
          {/* <Link className="login-btn" to="/auth">
            Login
          </Link>
        )} */}
        {/* {authCtx.isLoggedIn && (
          <button
            className="login-btn"
            onClick={() => {
              authCtx.logout();
              history.replace('/home');
            }}
          >
            Logout
          </button>
        )} */}
        <CartButton onShowCart={cartCtx.toggleCartVisibility} />
        {cartCtx.showCart && <Cart onShowCart={cartCtx.toggleCartVisibility} />}
      {/* </div> */}
    {/* </header> */}
    </div>
  );
}
