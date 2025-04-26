"use client"

import { createContext, useState, useEffect, useContext } from "react"
import { AuthContext } from "./LoginContext"

const CartContext = createContext({
  items: [],
  addItem: () => {},
  removeItem: () => {},
  clearCart: () => {},
  onLoadItems: () => {},
  totalAmount: 0,
  showCart: false,
  toggleCart: () => {},
})

export const CartProvider = ({ children }) => {
  const authCtx = useContext(AuthContext)
  const userEmail = authCtx.email

  const [cartItems, setCartItems] = useState([])
  const [totalAmount, setTotalAmount] = useState(0)
  const [showCart, setShowCart] = useState(false)

 
  useEffect(() => {
    const loadUserCart = async () => {
      if (userEmail) {
        try {
          
          const safeEmail = userEmail.replace(/\./g, "_")
          const response = await fetch(`https://ecom-4091c-default-rtdb.firebaseio.com/carts/${safeEmail}.json`)

          if (response.ok) {
            const data = await response.json()
            if (data) {
            
              if (typeof data === "object" && !Array.isArray(data)) {
            
                const firstKey = Object.keys(data)[0]
                if (data[firstKey] && data[firstKey].items) {
                  setCartItems(data[firstKey].items || [])
                  setTotalAmount(data[firstKey].totalAmount || 0)
                  return
                }
              }

              
              if (data.items) {
                setCartItems(data.items || [])
                setTotalAmount(data.totalAmount || 0)
              }
            } else {
              // No cart exists for this user yet
              setCartItems([])
              setTotalAmount(0)
            }
          }
        } catch (error) {
          console.error("Error loading cart:", error)
          // Fallback to empty cart
          setCartItems([])
          setTotalAmount(0)
        }
      } else {
        // No user logged in, clear local cart state only
        setCartItems([])
        setTotalAmount(0)
      }
    }

    loadUserCart()
  }, [userEmail])

  // Save cart to Firebase whenever it changes
  useEffect(() => {
    const saveUserCart = async () => {
      if (userEmail && (cartItems.length > 0 || totalAmount > 0)) {
        try {
          // Create a safe key for Firebase by replacing dots with underscores
          const safeEmail = userEmail.replace(/\./g, "_")
          await fetch(`https://ecom-4091c-default-rtdb.firebaseio.com/carts/${safeEmail}.json`, {
            method: "PUT",
            body: JSON.stringify({
              items: cartItems,
              totalAmount: totalAmount,
              lastUpdated: new Date().toISOString(),
            }),
            headers: {
              "Content-Type": "application/json",
            },
          })
        } catch (error) {
          console.error("Error saving cart:", error)
        }
      }
    }

    if (userEmail) {
      saveUserCart()
    }
  }, [cartItems, totalAmount, userEmail])

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

  const clearCart = () => {
    // Only clear local state, but keep the data in Firebase
    setCartItems([])
    setTotalAmount(0)

    
    if (userEmail) {
      const safeEmail = userEmail.replace(/\./g, "_")
      fetch(`https://ecom-4091c-default-rtdb.firebaseio.com/carts/${safeEmail}.json`, {
        method: "DELETE",
      }).catch((error) => {
        console.error("Error clearing cart from Firebase:", error)
      })
    }
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
    clearCart: clearCart,
    onLoadItems: loadItems,
    totalAmount: totalAmount,
    showCart: showCart,
    toggleCart: toggleCart,
  }

  return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
}

export default CartContext






// "use client"

// import { createContext, useState, useEffect } from "react"

// const CartContext = createContext({
//   items: [],
//   addItem: () => {},
//   removeItem: () => {},
//   clearCart: () => {}, // Add clearCart function
//   onLoadItems: () => {},
//   totalAmount: 0,
//   showCart: false,
//   toggleCart: () => {},
// })

// export const CartProvider = ({ children }) => {
//   // Load cart items from localStorage if available, else default to an empty array
//   const storedItems = localStorage.getItem("cartItems")
//   const initialItems = storedItems ? JSON.parse(storedItems) : []

//   const [cartItems, setCartItems] = useState(initialItems)
//   const [totalAmount, setTotalAmount] = useState(() => {
//     // Initialize totalAmount based on cartItems from localStorage
//     return initialItems.reduce((total, item) => total + item.price * item.quantity, 0)
//   })
//   const [showCart, setShowCart] = useState(false)

//   // Update localStorage whenever cartItems or totalAmount changes
//   useEffect(() => {
//     localStorage.setItem("cartItems", JSON.stringify(cartItems))
//   }, [cartItems])

//   const addItemToCart = (item) => {
//     setCartItems((prevItems) => {
//       const existingItemIndex = prevItems.findIndex((i) => i.id === item.id)

//       if (existingItemIndex !== -1) {
//         const updatedItems = [...prevItems]
//         updatedItems[existingItemIndex] = {
//           ...updatedItems[existingItemIndex],
//           quantity: updatedItems[existingItemIndex].quantity + 1,
//         }
//         return updatedItems
//       } else {
//         return [...prevItems, { ...item, quantity: 1 }]
//       }
//     })

//     setTotalAmount((prevTotal) => prevTotal + item.price)
//   }

//   const removeItemFromCart = (id) => {
//     setCartItems((prevItems) => {
//       const itemToRemove = prevItems.find((item) => item.id === id)
//       const filteredItems = prevItems.filter((item) => item.id !== id)

//       if (itemToRemove) {
//         setTotalAmount((prevTotal) => prevTotal - itemToRemove.price * itemToRemove.quantity)
//       }

//       return filteredItems
//     })
//   }

//   // Add clearCart function
//   const clearCart = () => {
//     setCartItems([])
//     setTotalAmount(0)
//     localStorage.removeItem("cartItems")
//   }

//   const loadItems = () => {
//     // If you need to implement this for additional sources (like an API), do it here
//   }

//   const toggleCart = () => {
//     setShowCart((prevState) => !prevState)
//   }

//   const contextValue = {
//     items: cartItems,
//     addItem: addItemToCart,
//     removeItem: removeItemFromCart,
//     clearCart: clearCart, // Add clearCart to context value
//     onLoadItems: loadItems,
//     totalAmount: totalAmount,
//     showCart: showCart,
//     toggleCart: toggleCart,
//   }

//   return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
// }

// export default CartContext



