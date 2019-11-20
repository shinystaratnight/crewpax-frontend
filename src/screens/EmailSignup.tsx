import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

import Left from '../components/navigation/Left'
import { crewpax } from '../static/entries'

const EmailSignup = () => {
  return (
    <View style={styles.container}>
      <Image source={crewpax} style={styles.crewpaxImage} />
      <Text></Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 18,
    paddingTop: 20,
  },
  crewpaxImage: {
    
  }
})
export default EmailSignup
