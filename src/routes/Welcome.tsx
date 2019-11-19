import React from 'react'
import { View, Text, Button  } from 'react-native'
import { commonStyles } from '../styles'

const Welcome = () => {
  return (
    <View style={commonStyles.container}>
      <Text>Welcome Screen</Text>
      <Button title="Log In" onPress={() => {}} />
    </View>
  )
}

export default Welcome
