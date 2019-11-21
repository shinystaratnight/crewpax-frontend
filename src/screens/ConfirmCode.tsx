import React from 'react'
import { 
  View, 
  Image, 
  StyleSheet,
  KeyboardAvoidingView,
  Text,
} from 'react-native'

import {
  crewpax,
  enterCodeDescription
} from '../static/entries'
import { loginStyles } from '../static/styles'
import Title from '../components/common/Title'
import Description from '../components/common/Description'
import Button from '../components/common/Button'
import Code from '../components/signup/Code'

const ConfirmCode = () => {
  return (
    <KeyboardAvoidingView behavior='padding' style={{}}>
      <View style={loginStyles.container}>
        <Image source={crewpax} />
        <Title
          value="Enter your Code"
        />
        <Description
          description={enterCodeDescription}
        />
        <Code />
        <Button
          value="Verify"
        />
      </View>
      <Text
        style={[loginStyles.textLink, styles.resendText]}
      >
        Send again
      </Text>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 18,
    paddingTop: 20,
  },
  resendText: {
    textAlign: 'center',
    color: '#4CD964',
  },
})
export default ConfirmCode
