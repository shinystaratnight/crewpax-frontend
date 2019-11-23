import React, {
  useContext,
  useRef
} from 'react'
import {
  Text,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  SafeAreaView,
} from 'react-native'
import { } from 'mobx-react'

import { RootStoreContext } from '../stores/RootStore'
import Button from '../components/common/Button'
import Title from '../components/common/Title'
import Input from '../components/common/Input'
import { crewpax } from '../static/entries'
import { loginStyles } from '../static/styles'

const EmailLogin = (props: any) => {
  const rootStore = useContext(RootStoreContext)
  const emailRef = useRef()
  const { navigate } = props.navigation
  const emailError = true

  const login = () => {
  }

  return (
    <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>
      <SafeAreaView style={loginStyles.container}>
        <Image
          source={crewpax}
        />
        <Title
          value="Log In"
        />
        <Input
          placeholder='Email'
          ref={emailRef}
          onChangeText={ () => {}}
          style={emailError ? styles.error : undefined}
        />
        <Input
          placeholder='Password'
          secureTextEntry={true}
          onChangeText={ () => {}}
        />
        <Text
          style={[loginStyles.textLink, styles.forgotPassword]}
          onPress={() => navigate('ForgotPassword')}
        >
          Forgot your password?
        </Text>
        <Button
          onPress={login}
          value="Log In"
        />
        <Text
          style={[loginStyles.textLink, styles.signupText]}
        >
          Not yet a member? {'  '}
          <Text
            style={styles.black}
            onPress={() => navigate('EmailSignup')}
          >
            Sign Up
          </Text>
        </Text>
      </SafeAreaView>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  wrapper: {},
  error: {
    borderBottomColor: '#F00',
    color: '#F00',
  },
  black: {
    color: '#000',
  },
  forgotPassword: {
    color: '#4CD964',
    textAlign: 'right',
  },
  signupText: {
    color: 'rgba(45, 49, 69, .4)',
    textAlign: 'center',
  },
})

export default EmailLogin
