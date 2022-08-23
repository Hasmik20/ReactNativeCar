import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { GlobalStyles } from '../../constants/styles'
import InfoDetails from '../util/InfoDetails'

const ContactInfo = () => {
  return (
    <View>
      <View style={styles.innerContainer}>
         <Image source={{ uri: 'https://www.aljazeera.com/wp-content/uploads/2022/08/390193807.jpg?resize=770%2C513' }} style={ styles.img} />
        <View style={styles.infoContainer}>
          <Text style={styles.name}>Elon Musk</Text>
          <View style={styles.numContainer}>
            <Text style={styles.logo}>Profile number</Text>
            <Text style={styles.number}>123467</Text>
          </View>
        </View>
      </View>
      <InfoDetails />
    </View>
  )
}

export default ContactInfo

const styles = StyleSheet.create({
  innerContainer: {
    flexDirection: 'row',
  },
   img: {
    width: 80,
    height: 80,
    borderRadius:40,
  },
  infoContainer: {
     marginLeft:22,
  },
  name: {
    fontSize: 24,
    color: GlobalStyles.color.black,
    fontWeight:'bold'
  },
  numContainer: {
    flexDirection: 'row',
    marginTop:10,
  },
  logo: {
    color: GlobalStyles.color.grayLight,
    fontSize:18,
    marginRight:10,
  },
  number: {
    fontSize: 18,
    fontWeight: 'bold',
    color:GlobalStyles.color.black
  }
})