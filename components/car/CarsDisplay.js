import { StyleSheet, Text, View, FlatList } from 'react-native'
import { useContext } from 'react'
import { useNavigation } from '@react-navigation/native';

import {CarCtx} from '../../state/ContextApi'
import CarItem from './CarItem'

const CarsDisplay = ({selectedItem}) => {
  const navigation = useNavigation()
  const { cars, favId, addLiked, removeLiked, } = useContext(CarCtx)

  const carDisplayHandler = ({ item }) => {
    const addDetailHandler = () => {
      navigation.navigate("Details", {
        id:item.id
      })
    }
    const likedHandler = () => {
      const likedCar = favId.includes(item.id)
      if (likedCar) {
        item.isLiked = false
        removeLiked(item.id)
      } else {
        item.isLiked = true
        addLiked(item.id) 
        navigation.navigate('Favorite', {
          id:item.id
        })
      }
   }
    return <CarItem {...item} onPress={addDetailHandler} likedHandler={ likedHandler} />
  }
  
  const filteredCars = cars.filter(item => item.marka.toLocaleLowerCase() === selectedItem)
  
  if (selectedItem) {
    return (
    <View>
      <FlatList data={ filteredCars} keyExtractor={(item) => item.id} renderItem={carDisplayHandler} />
    </View>
  )
  }
  return (
    <View>
      <FlatList data={ cars} keyExtractor={(item) => item.id} renderItem={carDisplayHandler} />
    </View>
  )
}

export default CarsDisplay

const styles = StyleSheet.create({})