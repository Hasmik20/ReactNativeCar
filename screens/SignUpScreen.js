import { StyleSheet, Text, View, Alert } from 'react-native'
import {useState, useContext} from 'react'

import AuthForm from './../components/Auth/AuthForm';
import { createUser } from './../http/auth';
import { AuthCTX } from '../state/userContext'
import LoadingOverlay from '../components/util/LoadingOverlay';
import AuthContent from './../components/Auth/AuthContent';

const SignUpScreen = () => {
   const [isAuthenticated, setIsAuthenticated] = useState(false)
  const { authenticateUser } = useContext(AuthCTX)
  
  const signupHandler = async ({ email, password }) => {
    setIsAuthenticated(true)
    try {
      const token = await createUser(email, password) 
      authenticateUser(token)
    } catch (error) {
      Alert.alert('Authentication failed', "Could not create user. Please check your credentials or try later!")
      setIsAuthenticated(false)
    }
  }
  if (isAuthenticated) {
    return <LoadingOverlay message="Creating new user..." />
  }
  return (
    <View style={styles.container}>
      <AuthContent onAuthenticate={ signupHandler} />
    </View>
  )
}

export default SignUpScreen

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'white',
    alignItems: 'center',
    paddingTop:142,
  }
})