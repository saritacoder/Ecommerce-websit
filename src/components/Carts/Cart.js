"use client"

import { useContext } from "react"
import "./Cart.css"
import CartItem from "./CartItem"
import CartContext from "../../context/CartContext"
import Modal from "../Modal/Modal"

const Cart = () => {
  const cartCtx = useContext(CartContext)

  if (!cartCtx.showCart) return null

  const handlePurchase = () => {
    // Show alert
    alert("Thank you for your purchase!")

    // Clear the cart
    cartCtx.clearCart()

    // Close the cart
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


