import React from 'react'
import { 
  View, 
  Text, 
  StyleSheet,
  TouchableOpacity, 
} from 'react-native'

interface Props {
  navigate: any
}

const LinksBox = (props: Props) => {
  const {navigate} = props

  return (
    <View style={styles.linksContainer}>
      <Text style={styles.description}>By Signing in, you agree to <Text onPress={() => {}} style={styles.termsLink}>Terms & Privacy</Text>.
      </Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.signupButton}
          onPress={() => navigate('EmailSignup')}
        >
          <Text style={styles.whiteText}>Email Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.signupButton, styles.mobileButton]}
          onPress={() => navigate('MobileSignup')}
        >
          <Text>Text Sign Up</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.loginText}>Already a member? {'  '}
        <Text
          style={styles.whiteText}
          onPress={() => navigate('EmailLogin')}
        >
          Login
        </Text>
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  linksContainer: {
    paddingHorizontal: '3%',
  },
  description: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 13,
    marginBottom: 15,
  },
  termsLink: {
    textDecorationLine: 'underline',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  signupButton: {
    backgroundColor: '#4CD964',
    width: '47%',
    height: 48,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mobileButton: {
    backgroundColor: '#FFF'
  },
  whiteText: {
    color: '#FFF',
  },
  loginText: {
    textAlign: 'center',
    color: 'rgba(255,255,255,0.5)',
    fontSize: 15,
    marginTop: 25,
  }
})

export default LinksBox
