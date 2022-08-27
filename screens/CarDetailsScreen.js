import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import {useContext, useLayoutEffect} from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

import { CarCtx } from '../state/ContextApi'
import Button from '../components/util/Button';
import Detail from '../components/util/Detail';
import { GlobalStyles } from '../constants/styles';

const CarDetailsScreen = ({ route,navigation }) => {
  const id = route.params.id
  const { cars } = useContext(CarCtx)
  
  const selectedCar = cars.find(item => item.id === id)
  const { title,
    description,
    price,
    imageUrl,
    marka,
    date,
    type,
    time,
    address,
    box } = selectedCar
  
    useLayoutEffect(() => {
    navigation.setOptions({
      title: selectedCar.marka
    })
    }, [id, navigation])
  

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <View style={styles.innerContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>{price}</Text>
        <Text style={styles.info}>{address}</Text>
        <Text style={styles.info}>{time}</Text>
        <Text style={styles.description}>{description}</Text>
        <View style={styles.detailContainer}>
          <Text style={[styles.info, styles.label]}>Car Brand</Text>
          <Text>{ marka}</Text>
        </View>
         <View style={styles.detailContainer}>
          <Text style={[styles.info, styles.label]}>Manufacture date</Text>
          <Text>{ date}</Text>
        </View>
         <View style={styles.detailContainer}>
          <Text style={[styles.info, styles.label]}>Transmission box</Text>
          <Text>{ box}</Text>
        </View>
        <View style={styles.detailContainer}>
          <Text style={[styles.info, styles.label]}>Steering Wheel</Text>
          <Text>{type}</Text>
        </View>
         <Detail />
      </View>
      <View style={styles.btnContainer}>
        <LinearGradient colors={[GlobalStyles.color.green50, GlobalStyles.color.green100]} style={styles.btn}>
          <Button name="call-outline" action="Call"  />
        </LinearGradient>
        <LinearGradient colors={[GlobalStyles.color.blue50, GlobalStyles.color.blue100]} style={styles.btn}>
          <Button name="chatbox-ellipses-outline" action="Email"/>
        </LinearGradient>
      </View>
      <View style={styles.iconContainer}>
        <FontAwesome5 name="location-arrow" size={24} color="white" />
        <AntDesign name="hearto" size={24} color="white" style={styles.icon} />
      </View>
    </ScrollView>
  )
}

export default CarDetailsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 12,
    paddingBottom: 20,
    position:'relative',
  },
  image: {
    minWidth: 410,
    height: 268,
  },
  innerContainer: {
    padding: 24,
    borderTopRightRadius: 34,
    borderTopLeftRadius: 34,
    margin: -10,
    backgroundColor:GlobalStyles.color.gray50
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
  description: {
    marginTop: 8,
    marginBottom:20,
    lineHeight:24
  },
  detailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    marginRight: 24,
    marginVertical: 10,
    width:134,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent:'space-between',
    marginTop: 20,
    marginBottom:10,
    marginHorizontal:16,
  },
  btn: {
    borderRadius:18,
  },
  iconContainer: {
    flexDirection: 'row',
    position: 'absolute',
    top: 22,
    right:22
  },
  icon: {
    marginLeft:34
  }
})