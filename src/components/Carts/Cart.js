// import './Cart.css';
// // import Modal from '../UI/Modal';
// import CartItem from './CartItem';

// export default function Cart(props) {
//   return (
//     // <Modal className="cart">
//     <div className='cart'>
//       <div className="cart-header">
//         <h3>Cart</h3>
//         <button
//           className="cart-close-btn"
//           type="button"
//           onClick={() => props.onShowCart()}
//         >
//           X
//         </button>
//       </div>
//       <CartItem />
//       <footer className="cart-footer">
//         <div className="cart-total">
//           <h3>Total: </h3>
//           <b>₹ {0}</b>
//         </div>
//         <button className="purchase-btn" type="button">
//           Purchase
//         </button>
//       </footer>
//       </div>
// //    </Modal>
//   );
// }




// import React, { useContext } from 'react';
// import './Cart.css';
// import CartItem from './CartItem';
// import CartContext from '../../context/CartContext';

// const Cart = (props) => {
//     const cartCtx = useContext(CartContext);

//     return (
//         <div className='cart'>
//             <div className="cart-header">
//                 <h3>Cart</h3>
//                 <button
//                     className="cart-close-btn"
//                     type="button"
//                     onClick={() => props.onShowCart()}
//                 >
//                     X
//                 </button>
//             </div>
//             <CartItem />
//             <footer className="cart-footer">
//                 <div className="cart-total">
//                     <h3>Total: </h3>
//                     <b>₹ {cartCtx.totalAmount}</b>
//                 </div>
//                 <button className="purchase-btn" type="button">
//                     Purchase
//                 </button>
//             </footer>
//         </div>
//     );
// };

// export default Cart;





import React, { useContext } from 'react';
import './Cart.css';
import CartItem from './CartItem';
import CartContext from '../../context/CartContext';
import Modal from '../Modal/Modal';

const Cart = () => {
    const cartCtx = useContext(CartContext);

    if (!cartCtx.showCart) return null;

    return (
      <Modal className='cart'>
            <div className="cart-header">
                <h3>Cart</h3>
                <button
                    className="cart-close-btn"
                    type="button"
                    onClick={cartCtx.toggleCart}
                >
                    X
                </button>
            </div>
            <CartItem />
            <footer className="cart-footer">
                <div className="cart-total">
                    <h3>Total: </h3>
                    <b>₹ {cartCtx.totalAmount}</b>
                </div>
                <button className="purchase-btn" type="button">
                    Purchase
                </button>
            </footer>
        
        </Modal>
    );
};

export default Cart;