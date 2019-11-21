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

const EmailLogin = (props: any) => {
  const { navigate } = props.navigation

  return (
    <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>
      <View style={styles.container}>
        <Image
          source={crewpax}
        />
        <Title
          value="Log In"
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
        <Text
          style={styles.forgotPassword}
          onPress={() => navigate('ForgotPassword')}
        >
          Forgot your password?
        </Text>
        <Button
          value="Log In"
        />
        <Text style={styles.signupText}>
          Not yet a member? {'  '}
          <Text
            style={styles.black}
            onPress={() => navigate('EmailSignup')}
          >
            Sign Up
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
  forgotPassword: {
    color: '#4CD964',
    marginBottom: 15,
    marginTop: 10,
    textAlign: 'right',
  },
  signupText: {
    fontSize: 15,
    marginTop: 15,
    color: 'rgba(45, 49, 69, .4)',
    textAlign: 'center',
    fontWeight: '500',
  },
})

export default EmailLogin
