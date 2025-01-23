

// import { createContext,useState,useEffect } from "react";

// const CartContext = createContext();

// function CartContextProvider(props) {
//   const [items, setItems] = useState([]);
//   const [showCart, setShowCart] = useState(false);

//   function handleAddItems(item) {
//     const updatedItems = items.map((i) => {
//       if (i.id === item.id) return { ...i, quantity: i.quantity + 1 };
//       return i;
//     });

//     if (!updatedItems.find((i) => i.id === item.id)) {
//       updatedItems.push(item);
//     }

//     setItems(updatedItems);
//   }

//   function handleRemoveItems(id) {
//     // Logic for removing items
//   }

//   function handleLoadItems() {
//     // Logic for loading items
//   }

//   function toggleCartVisibility() {
//     setShowCart((prevState) => !prevState);
//   }

//   const providerValue = {
//     items,
//     showCart,
//     toggleCartVisibility,
//     onAddItems: handleAddItems,
//     onRemoveItems: handleRemoveItems,
//     onLoadItems: handleLoadItems,
//   };

//   useEffect(() => {
//     fetch('https://crudcrud.com/api/8c02be127aa64444bfb4f592695889c9/cart')
//       .then((res) => {
//         if (!res.ok) throw new Error('Failed to fetch cart data');
//         return res.json();
//       })
//       .then((data) => setItems(data))
//       .catch((err) => console.error(err.message));
//   }, []);

//   return (
//     <CartContext.Provider value={providerValue}>
//       {props.children}
//     </CartContext.Provider>
//   );
// }

// export default CartContext;
// export { CartContextProvider };




// import React, { createContext, useState } from 'react';

// const CartContext = createContext({
//     items: [],
//     addItem: () => {},
//     removeItem: () => {},
//     onLoadItems: () => {},
//     totalAmount: 0
// });

// export const CartProvider = ({ children }) => {
//     const [cartItems, setCartItems] = useState([]);
//     const [totalAmount, setTotalAmount] = useState(0);

//     const addItemToCart = (item) => {
//         setCartItems(prevItems => {
//             const existingItemIndex = prevItems.findIndex(i => i.id === item.id);
            
//             if (existingItemIndex !== -1) {
//                 // Update quantity if item exists
//                 const updatedItems = [...prevItems];
//                 updatedItems[existingItemIndex] = {
//                     ...updatedItems[existingItemIndex],
//                     quantity: updatedItems[existingItemIndex].quantity + 1
//                 };
//                 return updatedItems;
//             } else {
//                 // Add new item with quantity 1
//                 return [...prevItems, { ...item, quantity: 1 }];
//             }
//         });
        
//         setTotalAmount(prevTotal => prevTotal + item.price);
//     };

//     const removeItemFromCart = (id) => {
//         setCartItems(prevItems => {
//             const itemToRemove = prevItems.find(item => item.id === id);
//             const filteredItems = prevItems.filter(item => item.id !== id);
            
//             if (itemToRemove) {
//                 setTotalAmount(prevTotal => 
//                     prevTotal - (itemToRemove.price * itemToRemove.quantity)
//                 );
//             }
            
//             return filteredItems;
//         });
//     };

//     const loadItems = () => {
//         // This can be implemented later to load from localStorage or API
//     };

//     const contextValue = {
//         items: cartItems,
//         addItem: addItemToCart,
//         removeItem: removeItemFromCart,
//         onLoadItems: loadItems,
//         totalAmount: totalAmount
//     };

//     return (
//         <CartContext.Provider value={contextValue}>
//             {children}
//         </CartContext.Provider>
//     );
// };

// export default CartContext;



import React, { createContext, useState } from 'react';

const CartContext = createContext({
    items: [],
    addItem: () => {},
    removeItem: () => {},
    onLoadItems: () => {},
    totalAmount: 0,
    showCart: false,
    toggleCart: () => {} // Add this new function
});

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);
    const [showCart, setShowCart] = useState(false); // Add this new state

    const addItemToCart = (item) => {
        setCartItems(prevItems => {
            const existingItemIndex = prevItems.findIndex(i => i.id === item.id);
            
            if (existingItemIndex !== -1) {
                const updatedItems = [...prevItems];
                updatedItems[existingItemIndex] = {
                    ...updatedItems[existingItemIndex],
                    quantity: updatedItems[existingItemIndex].quantity + 1
                };
                return updatedItems;
            } else {
                return [...prevItems, { ...item, quantity: 1 }];
            }
        });
        
        setTotalAmount(prevTotal => prevTotal + item.price);
    };

    const removeItemFromCart = (id) => {
        setCartItems(prevItems => {
            const itemToRemove = prevItems.find(item => item.id === id);
            const filteredItems = prevItems.filter(item => item.id !== id);
            
            if (itemToRemove) {
                setTotalAmount(prevTotal => 
                    prevTotal - (itemToRemove.price * itemToRemove.quantity)
                );
            }
            
            return filteredItems;
        });
    };

    const loadItems = () => {
        // This can be implemented later for localStorage or API
    };

    // Add this new function to toggle cart visibility
    const toggleCart = () => {
        setShowCart(prevState => !prevState);
    };

    const contextValue = {
        items: cartItems,
        addItem: addItemToCart,
        removeItem: removeItemFromCart,
        onLoadItems: loadItems,
        totalAmount: totalAmount,
        showCart: showCart,
        toggleCart: toggleCart
    };

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContext;