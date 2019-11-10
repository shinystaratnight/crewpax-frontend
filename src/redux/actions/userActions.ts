import AsyncStorage from '@react-native-community/async-storage'
import { token as accessToken } from '../../../app.json'
import { AUTO_SIGN_IN, SIGN_IN, SIGN_OUT/*, SIGN_UP*/ } from '../common/types'
import { State, UserState } from '../common/states.js'
import { Action } from 'redux'

export const checkLoginStatus = () => {
  return async (dispatch: (action: Action) => UserState) => {
    const token = await AsyncStorage.getItem(accessToken)
    if (token) {
      dispatch({ type: AUTO_SIGN_IN })
    }
  }
}

export const login = (/*username: string, password: string, mailer: boolean*/) => {
  return (dispatch: (action: Action) => UserState, getState: () => State) => {
    dispatch({ type: SIGN_IN })
  }
}

export const logout = () => {
  return async (dispatch: (action: Action) => UserState) => {
    dispatch({ type: SIGN_OUT })
  }
}