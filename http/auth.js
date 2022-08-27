import axios from 'axios'

const API_KEY = 'AIzaSyAFZB9hqM1ZHeqZ_ZaFjgUDFdjw3TUGUTw'

const authUser = async(mode,email,password) => {
  const userData = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`, {
    email: email,
    password: password,
    returnSecureToken:true
  })
  const token = userData.data.idToken
  return token
}

export const createUser =  (email, password) => {
return  authUser('signUp',email,password)
}

export const loginUser = (email,password) => {
  return authUser('signInWithPassword',email,password)
}