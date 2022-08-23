import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MessageDisplay from '../components/message/MessageDisplay'

const ChatScreen = () => {
  return (
    <View style={styles.container}>
      <MessageDisplay placeholder="Search by messages" isSearch={ false }/>
    </View>
  )
}

export default ChatScreen

const styles = StyleSheet.create({
   container: {
    flex:1,
    backgroundColor:'white',
    alignItems: 'center',
    paddingTop:46,
  }
})