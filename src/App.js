import { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import "./App.css"

import Header from './components/Header/Header';

import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Home from './components/Home/Home';
import Store from './components/Store/Store';
import Contact from './components/Contact/Contact';
import ProctuctDetails from './Products/ProctuctDetails';
import Login from './components/Login/Login';
import { AuthContext } from './context/LoginContext';




function App() {
  const authCtx = useContext(AuthContext);

  return (
    <Router>
      <div className="app-container">
        <Header />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/store"
              element={authCtx.isLoggedIn ? <Store /> : <Navigate to="/login" />}
            />
            <Route path="/product/:id" element={<ProctuctDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/login"
              element={authCtx.isLoggedIn ? <Navigate to="/store" /> : <Login />}
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;





// below code is working fine - 6-feb ,745pm  , upper code i m trying to fix footer gap 


// import { useContext } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import "./App.css"

// import Header from './components/Header/Header';

// import Footer from './components/Footer/Footer';
// import About from './components/About/About';
// import Home from './components/Home/Home';
// import Store from './components/Store/Store';
// import Contact from './components/Contact/Contact';
// import ProctuctDetails from './Products/ProctuctDetails';
// import Login from './components/Login/Login';
// import { AuthContext } from './context/LoginContext';

// function App() {
//   const authCtx = useContext(AuthContext);

//   return (
  
//     <Router>
//       <Header />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route
//           path="/store"
//           element={authCtx.isLoggedIn ? <Store /> : <Navigate to="/login" />}
//         />
//         <Route path="/product/:id" element={<ProctuctDetails />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route
//           path="/login"
//           element={authCtx.isLoggedIn ? <Navigate to="/store" /> : <Login />}
//         />
//         <Route path="*" element={<Navigate to="/" />} />
//       </Routes>
     
//       <Footer />
      
//     </Router>
   
  
//   );
// }

// export default App;
