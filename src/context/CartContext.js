
"use client"

import { createContext, useState, useEffect } from "react"

const CartContext = createContext({
  items: [],
  addItem: () => {},
  removeItem: () => {},
  clearCart: () => {}, // Add clearCart function
  onLoadItems: () => {},
  totalAmount: 0,
  showCart: false,
  toggleCart: () => {},
})

export const CartProvider = ({ children }) => {
  // Load cart items from localStorage if available, else default to an empty array
  const storedItems = localStorage.getItem("cartItems")
  const initialItems = storedItems ? JSON.parse(storedItems) : []

  const [cartItems, setCartItems] = useState(initialItems)
  const [totalAmount, setTotalAmount] = useState(() => {
    // Initialize totalAmount based on cartItems from localStorage
    return initialItems.reduce((total, item) => total + item.price * item.quantity, 0)
  })
  const [showCart, setShowCart] = useState(false)

  // Update localStorage whenever cartItems or totalAmount changes
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems))
  }, [cartItems])

  const addItemToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex((i) => i.id === item.id)

      if (existingItemIndex !== -1) {
        const updatedItems = [...prevItems]
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + 1,
        }
        return updatedItems
      } else {
        return [...prevItems, { ...item, quantity: 1 }]
      }
    })

    setTotalAmount((prevTotal) => prevTotal + item.price)
  }

  const removeItemFromCart = (id) => {
    setCartItems((prevItems) => {
      const itemToRemove = prevItems.find((item) => item.id === id)
      const filteredItems = prevItems.filter((item) => item.id !== id)

      if (itemToRemove) {
        setTotalAmount((prevTotal) => prevTotal - itemToRemove.price * itemToRemove.quantity)
      }

      return filteredItems
    })
  }

  // Add clearCart function
  const clearCart = () => {
    setCartItems([])
    setTotalAmount(0)
    localStorage.removeItem("cartItems")
  }

  const loadItems = () => {
    // If you need to implement this for additional sources (like an API), do it here
  }

  const toggleCart = () => {
    setShowCart((prevState) => !prevState)
  }

  const contextValue = {
    items: cartItems,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
    clearCart: clearCart, // Add clearCart to context value
    onLoadItems: loadItems,
    totalAmount: totalAmount,
    showCart: showCart,
    toggleCart: toggleCart,
  }

  return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
}

export default CartContext



