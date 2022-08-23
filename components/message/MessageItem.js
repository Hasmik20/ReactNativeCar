import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

import { GlobalStyles } from '../../constants/styles'

const MessageItem = ({ profileImg, name, description, price, date}) => {
  return (
    <View style={styles.container}>
      <View>
        <Image source={{
          uri: profileImg,
        }} style={styles.img} />
      </View>
      <View>
        <Text style={styles.title}>{name}</Text>
        <View style={styles.infoContainer}>
          <Text style={styles.description}>{description}</Text>
          <Text style={styles.price}>{price } $</Text>
        </View>
        <Text>{ date}</Text>
      </View>
    </View>
  )
}

export default MessageItem

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems:'center',
    borderBottomColor: GlobalStyles.color.grayLight,
    borderBottomWidth:1,
    paddingVertical:18,
  },
   img: {
     width: 55,
    height: 55,
     borderRadius: 27.5,
    marginRight:26,
  },
     title: {
    fontSize:16,
    color: GlobalStyles.color.black,
    fontWeight: 'bold',
    paddingVertical:6,
  },
  infoContainer: {
    flexDirection: 'row',
    borderColor: GlobalStyles.color.grayLight,
    borderWidth:1,
    borderRadius: 8,
    width:210,
    padding: 6,
    marginVertical:8,
  },
  description: {
    width: 122,
    fontSize: 12,
    borderRightColor: GlobalStyles.color.grayLight,
    borderRightWidth:1,
  },
  price: {
    color: GlobalStyles.color.black,
     fontSize: 12,
    marginLeft:10,
  },
})