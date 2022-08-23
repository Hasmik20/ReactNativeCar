import { StyleSheet, Text, View, FlatList } from 'react-native'
import {useContext} from 'react'

import { CarCtx } from '../state/ContextApi'
import CarItem from './../components/car/CarItem';
import { GlobalStyles } from '../constants/styles';

const FavoriteScreen = ({navigation}) => {
  const { cars, favId } = useContext(CarCtx)
  const favCars = cars.filter(item => favId?.includes(item.id))
  const displayFavCars = ({ item }) => {
    const addDetailHandler = () => {
      navigation.navigate('Details', {
        id:item.id
      })
    }
    return < CarItem {...item} onPress={addDetailHandler} />
  }

  if (favCars.length === 0) {
    return <View style={styles.container}>
     <Text style={styles.text}>There is no selected car</Text>
   </View>
 }
  return (
    <View style={styles.root}>
      <FlatList data={favCars} keyExtractor={(item) => item.id} renderItem={displayFavCars} />
    </View>
  )
}

export default FavoriteScreen

const styles = StyleSheet.create({
    root: {
    flex:1,
    backgroundColor: 'white',
    paddingHorizontal:20,
  },
    container: {
    flex:1,
    justifyContent: 'center',
    alignItems:'center'
  },
  text: {
    fontSize: 24,
    color:GlobalStyles.color.green100
  }
})