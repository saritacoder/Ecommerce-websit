

import { useContext } from 'react';
import './Header.css';
import Navigation from './Navigation';
import CartButton from './CartButton';
import Cart from '../Carts/Cart';
import CartContext from '../../context/CartContext';

 function Header() {
  const cartCtx = useContext(CartContext);

  return (
    <div>
      <nav>
        <Navigation />
      </nav>
      <CartButton onShowCart={cartCtx.toggleCartVisibility} />
      {cartCtx.showCart && <Cart onShowCart={cartCtx.toggleCartVisibility} />}
    </div>
  );
}


export default Header;
