

import { useContext, useRef, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/LoginContext"
import "./Login.css"

const Login = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const authCtx = useContext(AuthContext)

  // Pre-fill form with signup data if available
  useEffect(() => {
    const signupEmail = localStorage.getItem("signupEmail")
    const signupPassword = localStorage.getItem("signupPassword")

    if (signupEmail && emailRef.current) {
      emailRef.current.value = signupEmail
    }

    if (signupPassword && passwordRef.current) {
      passwordRef.current.value = signupPassword
    }

    // Clear the stored credentials after pre-filling
    localStorage.removeItem("signupEmail")
    localStorage.removeItem("signupPassword")
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const enteredEmail = emailRef.current.value
    const enteredPassword = passwordRef.current.value

    setError("")
    setIsLoading(true)

    try {
      const res = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAbUy5evKN-VSMQp6pan71s_ydy5W0gD_s",
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
        authCtx.login(data.idToken, enteredEmail) // Updated to pass email too
        navigate("/store")
      } else {
        throw new Error("Wrong email or password") // Provide a custom error message
      }
    } catch (error) {
      setIsLoading(false)
      setError(error.message) // Set error state to display the message
      alert(error.message) // Alert the user with the error
    }
  }

  return (
    <section className="auth">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="control">
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailRef} />
        </div>
        <div className="control">
          <label htmlFor="password">Your Password</label>
          <input type="password" id="password" required ref={passwordRef} />
        </div>
        {error && <p className="error-text">{error}</p>}
        <div className="actions">
          <button type="submit" disabled={isLoading}>
            {isLoading ? "Logging in..." : "Login"}
          </button>
          <button type="button" className="toggle" onClick={() => navigate("/signup")}>
            Create new account
          </button>
        </div>
      </form>
    </section>
  )
}

export default Login


