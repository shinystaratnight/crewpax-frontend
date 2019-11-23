import React,
{
  useState,
  useRef,
  useContext
} from 'react'
import {
  Text,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  SafeAreaView
} from 'react-native'

import { RootStoreContext } from '../stores/RootStore'
import Button from '../components/common/Button'
import Title from '../components/common/Title'
import Input from '../components/common/Input'
import { crewpax } from '../static/entries'
import { loginStyles } from '../static/styles'

const EmailSignup = (props: any) => {
  const { navigate } = props.navigation
  const rootStore = useContext(RootStoreContext)
  const signup = () => {
    rootStore.userStore.signup()
  }
  return (
    <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>
      <SafeAreaView style={loginStyles.container}>
        <Image
          source={crewpax}
        />
        <Title
          value="Create Account"
        />
        <Input
          placeholder='Name'
          onChangeText={signup}
        />
        <Input
          placeholder='Email'
          keyboardType='email-address'
          onChangeText={() => {}}
        />
        <Input
          placeholder='Password'
          secureTextEntry={true}
          onChangeText={() => {}}
        />
        <Button
          value="Sign Up"
          onPress={signup}
        />
        <Text
          style={[loginStyles.textLink, styles.loginText]}
        >
          Already a member? {'  '}
          <Text
            style={styles.black}
            onPress={() => navigate('EmailLogin')}
          >
            Login
          </Text>
        </Text>
      </SafeAreaView>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  wrapper: {},
  black: {
    color: '#000',
  },
  loginText: {
    color: 'rgba(45, 49, 69, .4)',
    textAlign: 'center',
  },
})

export default EmailSignup
