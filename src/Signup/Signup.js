"use client"

import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Signup.css"

const Signup = () => {
  const nameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const phoneRef = useRef()
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const enteredName = nameRef.current.value
    const enteredEmail = emailRef.current.value
    const enteredPassword = passwordRef.current.value
    const enteredPhone = phoneRef.current.value

    setError("")
    setIsLoading(true)

    try {
    
      const res = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAbUy5evKN-VSMQp6pan71s_ydy5W0gD_s",
        {
          method: "POST",
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        },
      )

      const data = await res.json()
      setIsLoading(false)

      if (res.ok) {
        //  data in Firebase Realtime Database
        const userDataRes = await fetch("https://ecom-4091c-default-rtdb.firebaseio.com/users.json", {
          method: "POST",
          body: JSON.stringify({
            name: enteredName,
            email: enteredEmail,
            phone: enteredPhone,
            userId: data.localId,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        })

        if (userDataRes.ok) {
          // Store signup info in localStorage to pre-fill login form
          localStorage.setItem("signupEmail", enteredEmail)
          localStorage.setItem("signupPassword", enteredPassword)

          
          navigate("/login")
        } else {
          throw new Error("Failed to store user data")
        }
      } else {
        throw new Error(data.error.message || "Authentication failed")
      }
    } catch (error) {
      setIsLoading(false)
      setError(error.message)
      alert(error.message)
    }
  }

  return (
    <section className="auth">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div className="control">
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" required ref={nameRef} />
        </div>
        <div className="control">
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailRef} />
        </div>
        <div className="control">
          <label htmlFor="password">Your Password</label>
          <input type="password" id="password" required ref={passwordRef} />
        </div>
        <div className="control">
          <label htmlFor="phone">Your Phone</label>
          <input type="tel" id="phone" required ref={phoneRef} />
        </div>
        {error && <p className="error-text">{error}</p>}
        <div className="actions">
          <button type="submit" disabled={isLoading}>
            {isLoading ? "Creating Account..." : "Sign Up"}
          </button>
          <button type="button" className="toggle" onClick={() => navigate("/login")}>
            Login with existing account
          </button>
        </div>
      </form>
    </section>
  )
}

export default Signup
