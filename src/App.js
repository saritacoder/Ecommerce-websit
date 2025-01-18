
// import './App.css';
// import { BrowserRouter as Router, Routes, Route,createBrowserRouter, RouterProvider} from "react-router-dom";
// import Cart from './components/Cart';
// import Footer from './components/Footer/Footer';
// // import ProductList from './components/Store';
// import About from './components/About/About';
// import Home from './components/Home/Home'
// import Store from './components/Store'
// import AppNavbar from './components/AppNavbar';
// function App() {

//   const router = createBrowserRouter([
//     {
//       path:"/", element:<Store />
//     },
//     {
//       path:"/home", element:<Home />
//     },
   
//     {
//       path:"/about", element:<About />
//     },
//     {
//       path:"/", element:<Home />
//     }
//   ])
  


//   return (

//     <RouterProvider router={router} /> 


//   );
// }

// export default App;


// import './App.css';
import {useState} from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from './components/Cart';
import Footer from './components/Footer/Footer';
// import ProductList from './components/Store';
import About from './components/About/About';
import Home from './components/Home/Home'
import Store from './components/Store'
import AppNavbar from './components/AppNavbar';


function App() {
  
  return (

    <Router>
      <AppNavbar />
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/store' element={<Store />} />
      <Route path='/about' element={<About />} />
      {/* <Route path='/cart' element={<Cart />} /> */}
      </Routes>
    <Footer />
    </Router>
    
    
      );
    }
    
    export default App;

    

{/* <RouterProvider router={router} />  technical thapa and sharpner ka 4 ass- 4-5th video   */}  

    {/* <AppNavbar toggleDrawer={toggleDrawer} /> */}
    
{/* <Cart  toggleDrawer={toggleDrawer} isopen={isopen}  /> */}
{/* <Cart />
<ProductList />
<Footer />
<About />
<Home /> */}
