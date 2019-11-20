import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import WelcomeScreen from '../screens/Welcome'
import EmailSignupScreen from '../screens/EmailSignup'
import MobileSignupScreen from '../screens/MobileSignup'
import EmailLoginScreen from '../screens/EmailLogin'

const Index = createStackNavigator(
  {
    Welcome: { 
      screen: WelcomeScreen,
      navigationOptions: {
        header: null,
      }
    },
    EmailSignup: { screen: EmailSignupScreen },
    MobileSignup: { screen: MobileSignupScreen },
    EmailLogin: { screen: EmailLoginScreen }
  },
  {
    initialRouteName: 'Welcome',
    defaultNavigationOptions: {
      headerStyle: {
        borderStyle: 'solid',
        borderBottomWidth: 0
      }
    }
  }
)

export default createAppContainer(Index)
