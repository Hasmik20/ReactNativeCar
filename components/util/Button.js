import { StyleSheet, Text, View, Pressable} from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'; 



const Button = ({name,action, style, onPress}) => {
  return (
    <View  style={[styles.container]}>
      <Pressable style={({ pressed }) => [styles.innerContainer, pressed && styles.pressed]}
       onPress={onPress}
      >
        <Ionicons name={name} size={24} color="white" />
        <Text style={[styles.text,style]}>{action }</Text>
      </Pressable>
    </View>
  )
}

export default Button

const styles = StyleSheet.create({
  container: {
    width: 155,
    height: 50,
    borderRadius: 28,
    overflow:'hidden'
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: "space-evenly",
    alignItems:'center',
    paddingHorizontal: 20,
    paddingVertical: 10,

  },
  text: {
    color: 'white',
    fontSize:16,
  },
  pressed: {
    opacity:0.5,
  }
})