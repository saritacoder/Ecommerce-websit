import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import 'bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/react-bootstrap/dist/react-bootstrap";
// import "../node_modules/bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartProvider } from './context/CartContext';
import { AuthContextProvider } from './context/LoginContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <AuthContextProvider>
  <CartProvider>
    {/* <BrowserRouter> */}
      <App />
    {/* </BrowserRouter> */}
  </CartProvider>
</AuthContextProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
