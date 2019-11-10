import React from 'react'
import { connect } from 'react-redux'
import { View, Text, Button } from 'react-native'
import { logout } from '../redux/actions/userActions'

import { commonStyles } from '../styles'

const mapDispatchToProps = {
  logout
}

interface Props { 
  logout: () => void,
}
export default connect(
  null, 
  mapDispatchToProps
)(function Home({ logout: logoutDispatcher } : Props) {
  return (
    <View style={commonStyles.container}>
      <Text>Home Screen</Text>
      <Button title="Sign Out" onPress={() => {logoutDispatcher()}} />
    </View>
  )
})