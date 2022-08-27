import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import {useState} from 'react'
import { useNavigation } from '@react-navigation/native';

import AuthInput from './AuthInput'
import { GlobalStyles } from './../../constants/styles';
import Button from '../util/Button';



const AuthForm = ({ isLogin, onSubmit, credentialsInvalid }) => {
   const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredConfirmEmail, setEnteredConfirmEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [enteredConfirmPassword, setEnteredConfirmPassword] = useState('');

  const navigation = useNavigation()

  const { email: emailIsInvalid,
    confirmEmail: emailsDontMatch,
    password: passwordIsInvalid,
    confirmPassword: passwordsDontMatch,
  } = credentialsInvalid;

  function updateInputValueHandler(inputType, enteredValue) {
    switch (inputType) {
      case 'email':
        setEnteredEmail(enteredValue);
        break;
      case 'confirmEmail':
        setEnteredConfirmEmail(enteredValue);
        break;
      case 'password':
        setEnteredPassword(enteredValue);
        break;
      case 'confirmPassword':
        setEnteredConfirmPassword(enteredValue);
        break;
    }
  }

  function submitHandler() {
    onSubmit({
      email: enteredEmail,
      confirmEmail: enteredConfirmEmail,
      password: enteredPassword,
      confirmPassword: enteredConfirmPassword,
    });
  }

  const toggleSignUpHandler = () => {
if (isLogin) {
  navigation.replace('SignUp')
} else {
   navigation.replace('SignIn')
}
  }
  
  return (
    <View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Login or</Text>
        <Text style={styles.text}> register</Text>
      </View>
      <AuthInput
          placeholder="Email Address"
          onUpdateValue={updateInputValueHandler.bind(this, 'email')}
          value={enteredEmail}
          keyboardType="email-address"
          isInvalid={emailIsInvalid}
      />
     
      {
        !isLogin &&  <AuthInput
          placeholder="Confirm Email Address"
        onUpdateValue={updateInputValueHandler.bind(this, 'confirmEmail')}
            value={enteredConfirmEmail}
            keyboardType="email-address"
            isInvalid={emailsDontMatch}
      />
      }
          <AuthInput
         placeholder="Password"
         onUpdateValue={updateInputValueHandler.bind(this, 'password')}
          secure
          value={enteredPassword}
          isInvalid={passwordIsInvalid}
      />
      {
        !isLogin && 
            <AuthInput
        placeholder="Confirm Password"
          onUpdateValue={updateInputValueHandler.bind(
              this,
              'confirmPassword'
            )}
            secure
            value={enteredConfirmPassword}
            isInvalid={passwordsDontMatch}
      />
      }
    
       <LinearGradient colors={[GlobalStyles.color.green50, GlobalStyles.color.green100]} style={styles.btn}>
        <Button action={isLogin ? 'Log In' : 'Sign up'}  onPress={submitHandler} />
      </LinearGradient>
      <View style={styles.imgContainer}>
        <Pressable style={({pressed}) => pressed && styles.pressed}>
          <Image  source={{
          uri: 'https://www.dtl.coventry.domains/wp-content/uploads/2020/07/Google-Logo.png',
        }} style={styles.img} />

        </Pressable>
        <Pressable style={({pressed}) => pressed && styles.pressed}>
            <Image  source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/VK_Compact_Logo_%282021-present%29.svg/800px-VK_Compact_Logo_%282021-present%29.svg.png',
          }} style={styles.img} />
        </Pressable>
        <Pressable style={({pressed}) => pressed && styles.pressed}>
          <Image  source={{
            uri: 'https://www.facebook.com/images/fb_icon_325x325.png',
          }} style={styles.img} />

        </Pressable>

      </View>
      <View style={styles.logInContainer}>
        <Text>Don't have an account?</Text>
       <Pressable  onPress={toggleSignUpHandler} style={({pressed}) => [ pressed && styles.pressed]}>
         <Text style={styles.logIn}> { !isLogin ? 'Log In' : 'Sign up'} </Text> 
       </Pressable>
      </View>
    </View>
  )
}

export default AuthForm

const styles = StyleSheet.create({
  textContainer: {
    justifyContent: "center",
    alignItems: 'center',
   marginBottom: 16,
  },
    text: {
    color: GlobalStyles.color.black,
    fontSize: 38,
    alignItems: 'center',
  
  },
  btn: {
    marginTop:12,
    alignItems: 'center',
    borderRadius:10,
  },
  logInContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:26,
  },
  logIn: {
    color:GlobalStyles.color.green100
  },
  pressed: {
    opacity:0.7,
  },
  imgContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    // alignItems:'center',
    marginVertical:22,
  },
  img: {
    width: 50,
    height:50
  }
})