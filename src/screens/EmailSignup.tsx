import React from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native'

import Button from '../components/common/Button'
import Title from '../components/common/Title'
import Input from '../components/common/Input'
import { crewpax } from '../static/entries'
import { loginStyles } from '../static/styles'

const EmailSignup = (props: any) => {
  const { navigate } = props.navigation

  return (
    <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>
      <View style={loginStyles.container}>
        <Image source={crewpax} />
        <Title value="Create Account" />
        <Input
          placeholder='Name'
          onChangeText={ () => {}}
        />
        <Input
          placeholder='Email'
          onChangeText={ () => {}}
        />
        <Input
          placeholder='Password'
          secureTextEntry={true}
          onChangeText={ () => {}}
        />
        <Button
          value="Sign Up"
          onPress={() => navigate('ConfirmCode')}
        />
        <Text style={[loginStyles.textLink, styles.loginText]}>
          Already a member? {'  '}
          <Text
            style={styles.black}
            onPress={() => navigate('EmailLogin')}
          >
            Login
          </Text>
        </Text>
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
  },
  container: {
    paddingHorizontal: 18,
    paddingTop: 20,
  },
  black: {
    color: '#000',
  },
  loginText: {
    color: 'rgba(45, 49, 69, .4)',
    textAlign: 'center',
  },
})

export default EmailSignup
