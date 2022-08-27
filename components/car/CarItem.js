import { View, Text, Pressable, Image,StyleSheet,Platform } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';

import { GlobalStyles } from '../../constants/styles';

const CarItem = ({ id,
    title,
    description,
    price,
    imageUrl,
    marka,
    date,
    type,
   direction,
   time,
   address,
    isLiked,likedHandler, onPress}) => {
  return (
    <View style={styles.container}>
      <Pressable style={({pressed}) => [styles.btn, pressed ? styles.pressed :null]} onPress={onPress}>
        <Image style={styles.img} source={{uri:imageUrl}} />
          <View>
          <Text style={styles.title}>{title} </Text>
            <Text style={styles.price}>{price} $</Text>
            <Text style={styles.info}>{address}</Text>
            <Text style={styles.info}>{ time}</Text>
        </View>
        <Pressable style={styles.heart} onPress={likedHandler}>
      <MaterialIcons name="favorite-border" size={20} color={isLiked ? GlobalStyles.color.red : GlobalStyles.color.gray50} />
        </Pressable>
      </Pressable>

    </View>
  )
}

export default CarItem

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minWidth:340,
    marginTop:18,
    borderRadius: 12,
    overflow: Platform.OS === "android" ? 'hidden' : 'visible',
    borderWidth: 1,
    borderColor:GlobalStyles.color.gray50,
  },
  btn: {
    flex:1,
    flexDirection:'row',
    position:'relative',
  },
  pressed: {
    opacity:0.7,
  },
  img: {
    width: 150,
    height: 125,
    marginRight: 10,
    borderTopRightRadius: 1,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius:1,
  },
  title: {
    fontSize:16,
    color: GlobalStyles.color.black,
    fontWeight: 'bold',
    paddingVertical:6,
  },
  price: {
    color: GlobalStyles.color.black,
    marginBottom:10,
  },
  info: {
    color: GlobalStyles.color.grayLight,
    marginBottom:4,
  },
  heart: {
    position: 'absolute',
    bottom: 10,
    left: 100,
    zIndex:99,
    borderRadius: 12,
    padding:6,
    backgroundColor:GlobalStyles.color.grayLight
  }
})