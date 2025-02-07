


// import React, { useContext, useRef, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { AuthContext } from '../../context/LoginContext';
// import './Login.css';

// const Login = () => {
//   const emailRef = useRef();
//   const passwordRef = useRef();
//   const [error, setError] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const navigate = useNavigate();

//   const authCtx = useContext(AuthContext);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const enteredEmail = emailRef.current.value;
//     const enteredPassword = passwordRef.current.value;

//     setError('');
//     setIsLoading(true);

//     try {
//       const res = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAbUy5evKN-VSMQp6pan71s_ydy5W0gD_s', {
//         method: 'POST',
//         body: JSON.stringify({
//           email: enteredEmail,
//           password: enteredPassword,
//           returnSecureToken: true,
//         }),
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });

//       const data = await res.json();
//       setIsLoading(false);

//       if (res.ok) {
//         authCtx.login(data.idToken); // Login user and store the token
//         navigate('/store');
//       } else {
//         throw new Error(data.error.message);
//       }
//     } catch (error) {
//       setIsLoading(false);
//       setError(error.message);
//     }
//   };

//   return (
//     <section className='auth'>
//       <form onSubmit={handleSubmit}>
//         <div className='control'>
//           <label htmlFor='email'>Your Email</label>
//           <input type='email' id='email' required ref={emailRef} />
//         </div>
//         <div className='control'>
//           <label htmlFor='password'>Your Password</label>
//           <input type='password' id='password' required ref={passwordRef} />
//         </div>
//         <div className='actions'>
//           {!authCtx.isLoggedIn && <button type='submit'>Login</button>}
//         </div>
//       </form>
//     </section>
//   );
// };

// export default Login;





// ==============



import React, { useContext, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/LoginContext';
import './Login.css';

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const authCtx = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;

    setError('');
    setIsLoading(true);

    try {
      const res = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAbUy5evKN-VSMQp6pan71s_ydy5W0gD_s', {
        method: 'POST',
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await res.json();
      setIsLoading(false);

      if (res.ok) {
        authCtx.login(data.idToken); // Login user and store the token
        navigate('/store');
      } else {
        throw new Error('Wrong email or password'); // Provide a custom error message
      }
    } catch (error) {
      setIsLoading(false);
      setError(error.message); // Set error state to display the message
      alert(error.message); // Alert the user with the error
    }
  };

  return (
    <section className='auth'>
      <form onSubmit={handleSubmit}>
        <div className='control'>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={emailRef} />
        </div>
        <div className='control'>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' required ref={passwordRef} />
        </div>
        {error && <p className="error-text">{error}</p>} {/* Display error if it exists */}
        <div className='actions'>
          {!authCtx.isLoggedIn && <button type='submit'>Login</button>}
        </div>
      </form>
    </section>
  );
};

export default Login;




// // Why use useRef?
// // The useRef hook in React is used to directly access DOM elements or persist a mutable value across renders without causing a re-render.
// // In this code, useRef is used to get the current value of the email and password input fields without requiring controlled components (i.e., without using useState to track their values).
// // Performance: Avoids re-renders since useRef doesn't update the component state.
// // Simplicity: Useful for forms where you only need the input values at the time of form submission.



// // What does ref={emailRef} mean?
// // By writing ref={emailRef} in the input box, you link the DOM element (the <input> element) to the emailRef object.
// // emailRef.current now points to the DOM element itself, and you can access its properties, such as .value, .focus(), etc.
// // Example:

// // If emailRef is linked to <input>, then emailRef.current.value will return the current text entered in the input field.



// // What is the self-invoking function doing?
// // The self-invoking function is an immediately-invoked function expression (IIFE), which means it is defined and executed at the same time.


// // Why not write async directly in handleSubmit?
// // The function handleSubmit itself isn't marked as async because it doesn't return a Promise. Instead, it encapsulates the async logic in the self-invoking function. This separation:
// // Keeps handleSubmit simpler.
// // Avoids potential issues with event.preventDefault() when combining with an async function.