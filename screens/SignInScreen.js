import { StyleSheet, Text, View, Alert } from 'react-native'
import {useState, useContext} from 'react'

import { AuthCTX } from '../state/userContext'
import { loginUser } from '../http/auth';
import LoadingOverlay from '../components/util/LoadingOverlay'
import AuthContent from './../components/Auth/AuthContent';

const SignInScreen = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
   const {authenticateUser} = useContext(AuthCTX)
  const loginHandler = async ({ email, password }) => {
    setIsAuthenticated(true)
    try {
      const token = await loginUser(email, password)
      authenticateUser(token)
    } catch (error) {
      Alert.alert('Authentication failed', "Could not log you in. Please check your credentials or try later!")
      setIsAuthenticated(false)
    }
  }
  if (isAuthenticated) {
    return <LoadingOverlay message="Logging you in..." />
  }
  return (
    <View style={styles.container}>
      <AuthContent isLogin onAuthenticate={loginHandler} />
    </View>
  )
}

export default SignInScreen

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'white',
    alignItems: 'center',
    paddingTop:142,
  }
})