

import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';

const productsArr = [
  {
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  },
  {
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  },
  {
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  },
  {
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
  }
];

const ProductList = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-5" style={{ fontStyle: 'italic' }}>Music</h1>
      <Row>
        {productsArr.map((product, index) => (
          <Col md={6} key={index}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title className="text-center" >{product.title}</Card.Title>
                <div className="text-center">
                  <Card.Img variant="top" src={product.imageUrl} />
                </div>
                <div className="d-flex justify-content-between mt-3">
                  <span>${product.price}</span>
                  <Button variant="primary">Add to Cart</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <div className='d-flex justify-content-center mt-4'> 
        <Button type="button" variant="secondary" >See the cart</Button>
      </div>
      
    </div>
  );
};

export default ProductList;
