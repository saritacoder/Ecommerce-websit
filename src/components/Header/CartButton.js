// import React from 'react'
// import { useContext } from 'react';
// import './CartButton.css';
// // import cartIcon from '../../Assets/cartIcon.jpeg';
// import cartIcon from '../../Assets/cartIcon.jpeg'
// import CartContext from '../../context/CartContext'


// const CartButton = (props) => {
//     const cartCtx = useContext(CartContext);

//   const totalCartItems = cartCtx.items.reduce((prevValue, currValue) => {
//     return prevValue + currValue.quantity;
//   }, 0);

//   return (
//     <button
//     className="cart-btn"
//     type="button"
//     onClick={() => {
//       props.onShowCart();
//       cartCtx.onLoadItems();
//     }}
//   >
//     <img src={cartIcon} alt="Cart Icon" />
//     <span>{totalCartItems}</span>
//   </button>
//   )
// }

// export default CartButton



import React from 'react';
import { useContext } from 'react';
import './CartButton.css';
import cartIcon from '../../Assets/cartIcon.jpeg';
import CartContext from '../../context/CartContext';

const CartButton = () => {
    const cartCtx = useContext(CartContext);

    const totalCartItems = cartCtx.items.reduce((prevValue, currValue) => {
        return prevValue + currValue.quantity;
    }, 0);

    return (
        <button
            className="cart-btn"
            type="button"
            onClick={cartCtx.toggleCart}
        >
            <img src={cartIcon} alt="Cart Icon" />
            <span>{totalCartItems}</span>
        </button>
    );
};

export default CartButton;