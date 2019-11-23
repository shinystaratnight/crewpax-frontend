import React, { useRef } from 'react'
import {
  View,
  KeyboardAvoidingView,
  Image,
  StyleSheet,
} from 'react-native'

import {
  crewpax,
  forgotPasswordDescription
} from '../static/entries'
import { loginStyles } from '../static/styles'
import Title from '../components/common/Title'
import Description from '../components/common/Description'
import Input from '../components/common/Input'
import Button from '../components/common/Button'

const ForgotPassword = () => {
  return (
    <KeyboardAvoidingView behavior='padding' style={{}}>
      <View style={loginStyles.container}>
        <Image
          source={crewpax}
        />
        <Title
          value="Forgot Password?"
        />
        <Description
          description={forgotPasswordDescription}
        />
        <Input
          placeholder="Email"
          onChangeText={() => {}}
        />
        <Button
          value="Request"
        />
      </View>
    </KeyboardAvoidingView>
  )
}

export default ForgotPassword
