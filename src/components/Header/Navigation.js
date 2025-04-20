
"use client"
import { Navbar, Nav, Container } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../../context/LoginContext"
import "./Navigation.css"

const Navigation = () => {
  const authCtx = useContext(AuthContext)
  const navigate = useNavigate()

  const handleStoreClick = () => {
    if (authCtx.isLoggedIn) {
      navigate("/store")
    } else {
      navigate("/login") // Redirect to login if not logged in
    }
  }

  const handleLogout = () => {
    authCtx.logout() // Call the logout function from the context
    navigate("/login") // Redirect to login page after logout
  }

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Nav className="custom-nav">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link onClick={handleStoreClick}>STORE</Nav.Link>
          <Nav.Link href="/about">ABOUT</Nav.Link>
          <Nav.Link href="/contact">CONTACT US</Nav.Link>
          {!authCtx.isLoggedIn && <Nav.Link href="/login">Login</Nav.Link>}
          {!authCtx.isLoggedIn && <Nav.Link href="/signup">Sign Up</Nav.Link>}
          {authCtx.isLoggedIn && <Nav.Link onClick={handleLogout}>Logout</Nav.Link>}
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Navigation


