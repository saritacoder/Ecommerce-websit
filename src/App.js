


// import './App.css';
import {useState} from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
// import ProductList from './components/Store';
import About from './components/About/About';
import Home from './components/Home/Home'
import Store from './components/Store'

import Contact from './components/Contact/Contact';
import ProctuctDetails from './Products/ProctuctDetails';


function App() {
  
  return (

    <Router>
    
    
    <Header />
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/store' element={<Store />} />
      <Route path='/product/:id' element={<ProctuctDetails />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />

      </Routes>
      {/* <Cart /> */}
     
    <Footer />
    </Router>
    
    
      );
    }
    
    export default App;

    


