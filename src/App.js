
import './App.css';
import Cart from './components/Cart';
import Footer from './components/Footer/Footer';
import ProductList from './components/Store';
import About from './components/About/About';
import Home from './components/Home/Home'
function App() {

  
  return (
<>
    {/* <AppNavbar toggleDrawer={toggleDrawer} /> */}
    
{/* <Cart  toggleDrawer={toggleDrawer} isopen={isopen}  /> */}
<Cart />
<ProductList />
<Footer />
<About />
<Home />
</>

   
  );
}

export default App;



