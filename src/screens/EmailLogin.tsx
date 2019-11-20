import React from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
  TouchableHighlight
} from 'react-native'

import { crewpax } from '../static/entries'

const EmailLogin = (props: any) => {
  const { navigate } = props.navigation

  return (
    <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>
      <View style={styles.container}>
        <Image source={crewpax} style={styles.crewpaxImage} />
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder='Email'
          onChangeText={ () => {}}
        />
        <TextInput
          style={styles.input}
          placeholder='Password'
          secureTextEntry={true}
          onChangeText={ () => {}}
        />
        <TouchableHighlight
          style={styles.button}
        >
          <Text style={[styles.whiteText, styles.loginText]}>Log In</Text>
        </TouchableHighlight>
        <Text style={styles.signupText}>
          Not yet a member? {'  '}
          <Text
            style={styles.blackText}
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
  crewpaxImage: {
  },
  title: {
    fontSize: 34,
    lineHeight: 41,
    letterSpacing: 0.41,
    fontWeight: 'bold',
    marginVertical: 30,
  },
  input: {
    fontSize: 15,
    lineHeight: 18,
    color: 'rgba(45,49,69,0.4)',
    borderBottomWidth: 1,
    paddingVertical: 15,
    borderBottomColor: '#CACAD4',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#4CD964',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 18,
    borderRadius: 3,
    marginVertical: 5,
  },
  whiteText: {
    color: '#FFF',
  },
  blackText: {
    color: '#000',
  },
  loginText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  signupText: {
    fontSize: 15,
    marginTop: 25,
    color: 'rgba(45, 49, 69, .4)',
    textAlign: 'center',
    fontWeight: '500',
  },
})

export default EmailLogin
