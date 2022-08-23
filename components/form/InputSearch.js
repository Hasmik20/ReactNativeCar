import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import { GlobalStyles } from './../../constants/styles';

const InputSearch = ({placeholder, isSearch, onChangeText}) => {
  return (
    <View style={styles.container}>
      <Ionicons style={ styles.icon} name="search-outline" size={24} color={GlobalStyles.color.gray100} /> 
      <TextInput style={styles.input} placeholder={placeholder} onChangeText={onChangeText} />
      {
        isSearch && 
        <View style={styles.innerContainer}>
          <Entypo style={ styles.icon2} name="list" size={24} color={ GlobalStyles.color.gray100} />
        </View>
      }
    </View>
  )
}

export default InputSearch

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    width: 350,
    height: 44,
    padding:8,
    borderRadius: 14,
    backgroundColor: GlobalStyles.color.gray50
  },
  icon: {
   color:GlobalStyles.color.grayLight
  },
  icon2: {
    color: GlobalStyles.color.green50,
   
  },
  innerContainer: {
     borderLeftColor: GlobalStyles.color.grayLight,
    borderLeftWidth: 2,
    paddingLeft:8,
  },
  input: {
    width: 264,
    paddingHorizontal: 10,
    color:GlobalStyles.color.grayLight,
  }
})