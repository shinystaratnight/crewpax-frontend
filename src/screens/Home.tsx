import React from 'react'
import { View, Text, Button } from 'react-native'

import { commonStyles } from '../styles'

const Home = () => {
  return (
    <View style={commonStyles.container}>
      <Text>Home Screen</Text>
      <Button title="Sign Out" onPress={() => { }} />
    </View>
  )
}

export default Home
