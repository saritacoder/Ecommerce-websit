import React from 'react'
import { Navbar, Nav, Container, Button,Row, Col } from 'react-bootstrap';
import youtube from "../../Assets/youtube.jpeg"
import spotify from "../../Assets/spotify.jpeg"
import facebook from '../../Assets/facebook.jpeg';

const Footer = () => {
  return (
    <>
    <div style={{display:'flex'}}>
        <Container fluid className="full-width-column">
      <Row>
        <Col>
        <h1 className="generic">The Generies</h1>
        </Col>
       </Row>
      
      
         </Container>


         <img src={youtube} alt="" width={150} />
         <img src={spotify} alt=""></img>
         <img src={facebook} alt="" />
    </div>
    </>
  )
}

export default Footer
