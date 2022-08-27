import { createContext, useState } from "react";

export const AuthCTX = createContext({
  token: '',
  isAuthenticate: false,
  authenticateUser:() =>{},
  logout:() =>{}
})

const AuthenticateAppProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState()

  const authenticateUser = (token) => {
    setAuthToken(token)
  }
  const logout = () => {
    setAuthToken(null)
  }
  const value = {
    token: setAuthToken,
    isAuthenticate: !!authToken,
    authenticateUser: authenticateUser,
    logout:logout
  }
  return <AuthCTX.Provider value={value}>
     {children}
   </AuthCTX.Provider>
}

export default AuthenticateAppProvider