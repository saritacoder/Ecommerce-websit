
// import React from 'react';
// import { Card, Button, Row, Col } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';

// const productsArr = [
//   {
//     id: 1,
//     title: 'Colors',
//     price: 100,
//     imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
//   },
//   {
//     id: 2,
//     title: 'Black and white Colors',
//     price: 50,
//     imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
//   },
//   {
//     id: 3,
//     title: 'Yellow and Black Colors',
//     price: 70,
//     imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
//   },
//   {
//     id: 4,
//     title: 'Blue Color',
//     price: 100,
//     imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
//   }
// ];

// const Store = () => {
//   const navigate = useNavigate();

//   const handleAddToDetailsPage = (id) => {
//     // Navigate to the product details page using the product's id
//     navigate(`/product/${id}`);
//   };


//   function handleAddToCart(){

//   }
//   return (
//     <div className="container my-5">
//       <h1 className="text-center mb-5" style={{ fontStyle: 'italic' }}>Music</h1>
//       <Row>
//         {productsArr.map((product) => (
//           <Col md={6} key={product.id}>
//             <Card className="mb-4">
//               <Card.Body>
//                 <Card.Title className="text-center">{product.title}</Card.Title>
//                 <div className="text-center">
//                   <Card.Img variant="top" onClick={() => handleAddToDetailsPage(product.id)} src={product.imageUrl} />
//                 </div>
//                 <div className="d-flex justify-content-between mt-3">
//                   <span>${product.price}</span>
//                   <Button variant="primary" onClick={() => handleAddToCart(product.id)}>
//                     ADD TO CART
//                   </Button>
//                 </div>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </div>
//   );
// };

// export default Store;





import React, { useContext } from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
// import CartContext from '../../context/CartContext';
import CartContext from '../context/CartContext';

const productsArr = [
    {
        id: 1,
        title: 'Colors',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    },
    {
        id: 2,
        title: 'Black and white Colors',
        price: 50,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    },
    {
        id: 3,
        title: 'Yellow and Black Colors',
        price: 70,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    },
    {
        id: 4,
        title: 'Blue Color',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    }
];


const Store = () => {
  const navigate = useNavigate();
  const cartCtx = useContext(CartContext);

  const handleAddToDetailsPage = (id) => {
    navigate(`/product/${id}`);
  };

  const handleAddToCart = (product) => {
    cartCtx.addItem({
      id: product.id,
      title: product.title,
      price: product.price,
      imageUrl: product.imageUrl
    });
  };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-5" style={{ fontStyle: 'italic' }}>Music</h1>
      <Row>
        {productsArr.map((product) => (
          <Col md={6} key={product.id}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title className="text-center">{product.title}</Card.Title>
                <div className="text-center">
                  <Card.Img 
                    variant="top" 
                    onClick={() => handleAddToDetailsPage(product.id)} 
                    src={product.imageUrl}
                  />
                </div>
                <div className="d-flex justify-content-between mt-3">
                  <span>${product.price}</span>
                  <Button 
                    variant="primary" 
                    onClick={() => handleAddToCart(product)}
                  >
                    ADD TO CART
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Store;