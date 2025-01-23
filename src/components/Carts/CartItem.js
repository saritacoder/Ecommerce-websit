// import React from 'react'
// import { useContext } from 'react';
// import CartContext from '../../context/CartContext';
// import   './CartItem.css'

// const CartItem = () => {
//     const cartEle = useContext(CartContext);

//   return (
//     <section className="cart-items">
//       <table>
//         <tbody>
//             <tr>
//                 <th>ITEM</th>
//                 <th>PRICE</th>
//                 <th>QUANTITY</th>
//             </tr>
//             {cartEle.items.map((ele,i)=>{
//               return(
//                 <tr key={i}>
//                     <td className="cart-item-title">
//                         <img src={ele.imageUrl} alt="img"  width={80}/>
//                         <p>{ele.title}</p>
//                     </td>
//                     <td>₹ {ele.price}</td>
//                     <td>x {ele.quantity}</td>

                    
//                     <button className="cart-item-remove">Remove</button>
//                 </tr>
//               )

//             })}
//         </tbody>
//       </table>
//     </section>
//   )
// }

// export default CartItem




import React from 'react'
import { useContext } from 'react';
import CartContext from '../../context/CartContext';
import   './CartItem.css'

const CartItem = () => {
    const cartEle  = useContext(CartContext);

  return (
    <section className="cart-items">
      <table>
        <tbody>
            <tr>
                <th>ITEM</th>
                <th>PRICE</th>
                <th>QUANTITY</th>
            </tr>
            {cartEle .items.map((ele,i)=>{
              return(
                <tr key={i}>
                    <td className="cart-item-title">
                        <img src={ele.imageUrl} alt="img"  width={80}/>
                        <p>{ele.title}</p>
                    </td>
                    <td>₹ {ele.price}</td>
                    <td>x {ele.quantity}</td>

                    
                    <button className="cart-item-remove" onClick={()=>cartEle .removeItem(ele.id)}>Remove</button>
                </tr>
              )

            })}
        </tbody>
      </table>
    </section>
  )
}

export default CartItem
