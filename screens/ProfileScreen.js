import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProfileInfo from '../components/profile/ProfileInfo'

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <ProfileInfo />
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'white',
    paddingTop: 46,
    paddingHorizontal:24,
  }
})