import React from 'react'
import { connect } from 'react-redux'
import { View, Text, Button  } from 'react-native'
import { commonStyles } from '../styles'
import { login } from '../redux/actions/userActions'

const mapDispatchToProps = {
  login
}

interface Props {
  login: () => void
}
export default connect(
  null,
  mapDispatchToProps
)(function Welcome({ login }: Props) {
  return (
    <View style={commonStyles.container}>
      <Text>Welcome Screen</Text>
      <Button title="Log In" onPress={() => login()} />
    </View>
  )
})
