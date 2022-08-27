import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'

import ContactInfo from './ContactInfo'
import { GlobalStyles } from '../../constants/styles'
import CarsDisplay from '../car/CarsDisplay'

const ProfileInfo = () => {
  return (
    <View>
      <ContactInfo />
      <View>
        <View style={styles.innerContainer}>
          <Text style={[styles.text, styles.active]}>Active</Text>
          <Text style={styles.text}>Inactive</Text>
        </View>
        <CarsDisplay  />
      </View>
    </View>
  )
}

export default ProfileInfo

const styles = StyleSheet.create({
  innerContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderBottomColor: GlobalStyles.color.gray50,
    borderBottomWidth: 2,
    marginTop:18,
  },
  text: {
    fontSize: 16,
    color: GlobalStyles.color.gray150,
    paddingBottom:18
  },
  active: {
    borderBottomColor: GlobalStyles.color.green100,
    borderBottomWidth:4
  },

})