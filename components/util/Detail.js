import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

import { GlobalStyles } from '../../constants/styles'

const Detail = () => {
  return (
    <View style={styles.root}>
      <View style={styles.imgContainer}>
        <Image source={{ uri: 'https://images.unsplash.com/photo-1618641986557-1ecd230959aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80' }} style={ styles.img} />

      </View>
      <View>
        <Text style={styles.name}> John</Text>
        <Text style={styles.comment}>17 comments</Text>
      </View>
    </View>
  )
}

export default Detail

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    paddingVertical:22,
    borderBottomColor: GlobalStyles.color.gray100,
    borderBottomWidth: 1,
     borderTopColor: GlobalStyles.color.gray100,
    borderTopWidth: 1,
    marginTop:20,
  },
  label: {
    color:'red'
  },
  imgContainer: {
    width:100,
  },
  img: {
    width: 50,
    height: 50,
    borderRadius:25,
  },
  name: {
    fontWeight: 'bold',
    marginBottom:8,
  },
  comment: {
    color: GlobalStyles.color.blue100,
    lineHeight:18,
  }
})