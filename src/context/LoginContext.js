

import { createContext, useState } from "react"

const AuthContext = createContext()

function AuthContextProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("token"))
  const [loggedUserEmail, setLoggedUserEmail] = useState(localStorage.getItem("loggedUserEmail"))
  const isLoggedIn = !!token

  function handleLogin(token, email) {
    setToken(token)
    localStorage.setItem("token", token)
    setLoggedUserEmail(email)
    localStorage.setItem("loggedUserEmail", email)
  }

  function handleLogout() {
    // Only clear authentication data, not cart data
    setToken(null)
    localStorage.removeItem("token")
    localStorage.removeItem("loggedUserEmail")
  }

  const contextValue = {
    token,
    email: loggedUserEmail,
    isLoggedIn,
    login: handleLogin,
    logout: handleLogout,
  }

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
}
export { AuthContext, AuthContextProvider }


