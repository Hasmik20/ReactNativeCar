import { StyleSheet, Text, View } from 'react-native'
import {useState} from 'react'

import CarsDisplay from '../components/car/CarsDisplay'
import InputSearch from '../components/form/InputSearch'

const MainScreen = () => {
  const [inputValue, setInputValue] = useState('')
   
  const filterHandler = (enteredValue) => {
    setInputValue(enteredValue)
  }
  return (
    <View style={styles.container}>
      <InputSearch placeholder="Search by cars brands" isSearch={true} value={inputValue} onChangeText={ filterHandler} />
      <CarsDisplay selectedItem={inputValue.toLocaleLowerCase()} />
    </View>
  )
}

export default MainScreen

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'white',
    alignItems: 'center',
    paddingTop:46,
  }
})