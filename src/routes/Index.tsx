import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import WelcomeScreen from '../screens/Welcome'
import EmailSignupScreen from '../screens/EmailSignup'

const Index = createStackNavigator(
  {
    Welcome: { 
      screen: WelcomeScreen,
      navigationOptions: {
        header: null,
      }
    },
    EmailSignup: { screen: EmailSignupScreen }
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
