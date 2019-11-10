import { AUTO_SIGN_IN, SIGN_IN, SIGN_OUT } from '../common/types'
import { UserState as State } from '../common/states'

const initialState: State = {
  id: null,
  emailer: true,
  logged: false,
  fullname: null,
  username: null,
  avatar: null,
  location: null
}

export type Actions = 
  { type: "SIGN_IN" } | 
  { type: "SIGN_OUT" } | 
  { type: "AUTO_SIGN_IN" }

export default function (state = initialState, action: Actions): State {
  switch (action.type) {
    case AUTO_SIGN_IN:
      return { ...state, logged: true }
    case SIGN_IN:
        return { ...state, logged: true }
    case SIGN_OUT:
      return { ...state, logged: false }
    default:
      return state
  }
}