import { StyleSheet, Text, View, Alert } from 'react-native'
import {useState} from 'react'
import AuthForm from './AuthForm'

const AuthContent = ({ isLogin, onAuthenticate }) => {
//  const navigation = useNavigation()
 const [credentialsInvalid, setCredentialsInvalid] = useState({
    email: '',
    password: '',
    confirmEmail: '',
    confirmPassword: '',
  });

 
  function submitHandler(credentials) {
    let { email, confirmEmail, password, confirmPassword } = credentials;

    email = email.trim();
    password = password.trim();

    const emailIsValid = email.includes('@');
    const passwordIsValid = password.length > 6;
    const emailsAreEqual = email === confirmEmail;
    const passwordsAreEqual = password === confirmPassword;

    if (
      !emailIsValid ||
      !passwordIsValid ||
      (!isLogin && (!emailsAreEqual || !passwordsAreEqual))
    ) {
      Alert.alert('Invalid input', 'Please check your entered credentials.');
      setCredentialsInvalid({
        email: !emailIsValid,
        confirmEmail: !emailIsValid || !emailsAreEqual,
        password: !passwordIsValid,
        confirmPassword: !passwordIsValid || !passwordsAreEqual,
      });
      return;
    }
    onAuthenticate({ email, password });
  }
  return (
    <View>
      <AuthForm  
         isLogin={isLogin}
        onSubmit={submitHandler}
        credentialsInvalid={credentialsInvalid} />
    </View>
  )
}

export default AuthContent

const styles = StyleSheet.create({})