"use client"

import { useContext } from "react"
import "./Cart.css"
import CartItem from "./CartItem"
import CartContext from "../../context/CartContext"
import { AuthContext } from "../../context/LoginContext"
import Modal from "../Modal/Modal"

const Cart = () => {
  const cartCtx = useContext(CartContext)
  const authCtx = useContext(AuthContext)

  if (!cartCtx.showCart || !authCtx.isLoggedIn) return null

  const handlePurchase = async () => {
    alert("Thank you for your purchase!")

    cartCtx.clearCart()

    
    cartCtx.toggleCart()
  }

  return (
    <Modal className="cart">
      <div className="cart-header">
        <h3>Cart</h3>
        <button className="cart-close-btn" type="button" onClick={cartCtx.toggleCart}>
          X
        </button>
      </div>
      <CartItem />
      <footer className="cart-footer">
        <div className="cart-total">
          <h3>Total: </h3>
          <b>₹ {cartCtx.totalAmount}</b>
        </div>
        <button className="purchase-btn" type="button" onClick={handlePurchase} disabled={cartCtx.items.length === 0}>
          Purchase
        </button>
      </footer>
    </Modal>
  )
}

export default Cart




