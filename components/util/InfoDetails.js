import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';

import { GlobalStyles } from '../../constants/styles';

const InfoDetails = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Feather name="phone" size={24} color={GlobalStyles.color.grayLight} style={styles.logo} />
        <Text style={styles.number}>+7 928 245 15 20</Text>
      </View>
       <View style={styles.logoContainer}>
        <Feather name="mail" size={24} color={GlobalStyles.color.grayLight} style={styles.logo} />
        <Text style={styles.number}>mail@gmail.com</Text>
      </View>
        <View style={styles.logoContainer}>
        <EvilIcons name="location" size={24} color={GlobalStyles.color.grayLight} style={styles.logo} />
        <Text style={styles.number}>Yerevan</Text>
      </View>
    </View>
  )
}

export default InfoDetails

const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyles.color.gray50,
    minWidth: 356,
    minHeight: 152,
    borderRadius: 12,
    marginVertical: 24,
  },
  logoContainer: {
    flexDirection: 'row',
    paddingHorizontal: 22,
    paddingTop:22,
    alignItems:'center'
  },
  logo: {
    paddingRight: 22,
  },
  number: {
    fontSize: 16,
    color:GlobalStyles.color.gray150
  }
})