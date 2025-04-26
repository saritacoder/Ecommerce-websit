"use client"

import { useContext } from "react"
import { Card, Button, Row, Col } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import CartContext from "../../context/CartContext"
import { AuthContext } from "../../context/LoginContext"
import "./Store.css"

const productsArr = [
  {
    id: 1,
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    id: 2,
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    id: 3,
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    id: 4,
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
]

const merchArr = [
  {
    id: 5,
    title: "T-Shirt",
    price: 500,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Shirt.png",
  },
  {
    id: 6,
    title: "Coffee Cup",
    price: 250,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Cofee.png",
  },
]

const Store = () => {
  const navigate = useNavigate()
  const cartCtx = useContext(CartContext)
  const authCtx = useContext(AuthContext)

  const handleAddToDetailsPage = (id) => {
    navigate(`/product/${id}`)
  }

  const handleAddToCart = (product) => {
    if (!authCtx.isLoggedIn) {
      alert("Please login to add items to cart")
      navigate("/login")
      return
    }

    cartCtx.addItem({
      id: product.id,
      title: product.title,
      price: product.price,
      imageUrl: product.imageUrl,
    })
  }

  const renderProducts = (products) => (
    <Row>
      {products.map((product) => (
        <Col md={6} key={product.id}>
          <Card className="mb-4 w-100">
            <Card.Body className="card-body-uniform">
              <Card.Title className="text-center mb-3">{product.title}</Card.Title>
              <div className="text-center">
                <Card.Img
                  className="product-image hover-effect"
                  variant="top"
                  onClick={() => handleAddToDetailsPage(product.id)}
                  src={product.imageUrl}
                />
              </div>
              <div className="d-flex justify-content-between mt-3">
                <span className="fw-bold">${product.price}</span>
                <Button
                  variant="primary"
                  style={{ transition: "transform 0.3s ease" }}
                  onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
                  onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
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
  )

  return (
    <div className="container my-5">
      <h1 className="text-center mb-5" style={{ fontStyle: "italic" }}>
        Music
      </h1>
      {renderProducts(productsArr)}

      <h1 className="text-center mb-5 mt-5" style={{ fontStyle: "italic" }}>
        Merch
      </h1>
      {renderProducts(merchArr)}

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button variant="secondary" onClick={cartCtx.toggleCart}>
          See the cart
        </Button>
      </div>
    </div>
  )
}

export default Store



