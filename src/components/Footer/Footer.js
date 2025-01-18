// import React from 'react'
// import { Navbar, Nav, Container, Button,Row, Col } from 'react-bootstrap';
// import youtube from "../../Assets/youtube.jpeg"
// import spotify from "../../Assets/spotify.jpeg"
// import facebook from '../../Assets/facebook.jpeg';

// const Footer = () => {
//   return (
//     <>
//     <div style={{display:'flex'}}>
//         <Container fluid className="full-width-column">
//       <Row>
//         <Col>
//         <h1 className="generic">The Generies</h1>
//         </Col>
//        </Row>
      
      
//          </Container>


//          <img src={youtube} alt="" width={150} />
//          <img src={spotify} alt=""></img>
//          <img src={facebook} alt="" />
//     </div>
//     </>
//   )
// }

// export default Footer




import React from 'react';
import './Footer.css'; 
import youtube from "../../Assets/youtube.jpeg"
import spotify from "../../Assets/spotify.jpeg"
import facebook from '../../Assets/facebook.jpeg';

const Footer = () => {
  return (
    <footer className="footer">
    <div className="footer-content">
      <h1 className="footer-title">The Generics</h1>
      <div className="social-icons">
        <a href="#youtube">
          <img src={youtube} alt="YouTube" />
        </a>
        <a href="#spotify">
          <img src={spotify} alt="Spotify" />
        </a>
        <a href="#facebook">
          <img src={facebook} alt="Facebook" />
        </a>
      </div>
    </div>
  </footer>
);
};

export default Footer;