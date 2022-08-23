import { StyleSheet, Text, View, FlatList } from 'react-native'
import {useContext} from 'react'

import InputSearch from '../form/InputSearch'
import { CarCtx } from '../../state/ContextApi'
import MessageItem from './MessageItem'

const MessageDisplay = ({ placeholder, isSearch }) => {
  const { message } = useContext(CarCtx)
  const messageDisplayHandler = ({ item }) => {
    return <MessageItem {...item} />
  }
  return (
    <View>
      <InputSearch placeholder={placeholder} isSearch={isSearch} />
      <FlatList data={message} keyExtractor={(item) => item.id} renderItem={messageDisplayHandler} />
    </View>
  )
}

export default MessageDisplay

const styles = StyleSheet.create({})