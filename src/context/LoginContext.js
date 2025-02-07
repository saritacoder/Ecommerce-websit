import { createContext,useState } from 'react'; 
import { useNavigate } from 'react-router-dom';


const AuthContext = createContext();

function AuthContextProvider({children}){
    const [token,setToken] = useState(localStorage.getItem('token'));

    const [loggedUserEmail, setLoggedUserEmail] = useState(localStorage.getItem('loggedUserEmail'));

    // let navigate = useNavigate();

    const isLoggedIn = !!token;


    function handleLogin(token, email) {

      // setToken(token);
      // setLoggedUserEmail(email);
        setToken(token);
        localStorage.setItem('token', token);
        setLoggedUserEmail(email);
        localStorage.setItem('loggedUserEmail', email);
      }


      function handleLogout() {
        
        
        // navigate('/');
        setToken(null);
        localStorage.removeItem('token');
        localStorage.removeItem('loggedUserEmail');
        // localStorage.clear();
      }

      
    const contextValue = {
        token,
        email:loggedUserEmail,
        isLoggedIn,
        login:handleLogin,
        logout:handleLogout,
    }

    return (
        <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
    )
}
export  {AuthContext,AuthContextProvider};

