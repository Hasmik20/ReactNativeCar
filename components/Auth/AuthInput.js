import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

import { GlobalStyles } from './../../constants/styles';

const AuthInput = ({
  placeholder,
  keyboardType,
  secure,
  onUpdateValue,
  value,
  isInvalid,
}) => {
  return (
   <View style={styles.inputContainer}>
      <TextInput
        style={[styles.input, isInvalid && styles.inputInvalid]}
        autoCapitalize={false}
        placeholder={placeholder}
        keyboardType={keyboardType}
        secureTextEntry={secure}
        onChangeText={onUpdateValue}
        value={value}
      />
    </View>
  )
}

export default AuthInput


const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 8,
 
  },
  labelInvalid: {
    color: GlobalStyles.color.red,
  },
  input: {
    width: 264,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 10,
    fontSize: 16,
    backgroundColor:GlobalStyles.color.gray50,
  },
  inputInvalid: {
    backgroundColor: GlobalStyles.color.red
  },
});
