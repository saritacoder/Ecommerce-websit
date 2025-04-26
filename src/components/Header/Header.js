"use client"

import { useContext } from "react"
import { useLocation } from "react-router-dom"
import "./Header.css"
import Navigation from "./Navigation"
import CartButton from "./CartButton"
import Cart from "../Carts/Cart"
import CartContext from "../../context/CartContext"
import { AuthContext } from "../../context/LoginContext"

function Header() {
  const cartCtx = useContext(CartContext)
  const authCtx = useContext(AuthContext)
  const location = useLocation()

  // Hide cart button on login and signup pages
  const isAuthPage = location.pathname === "/login" || location.pathname === "/signup"

  return (
    <div>
      <nav>
        <Navigation />
      </nav>
      {!isAuthPage && authCtx.isLoggedIn && <CartButton onShowCart={cartCtx.toggleCartVisibility} />}
      {cartCtx.showCart && <Cart onShowCart={cartCtx.toggleCartVisibility} />}
    </div>
  )
}

export default Header



