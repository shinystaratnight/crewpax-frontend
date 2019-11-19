import { createContext } from 'react'

import { UserStore } from './UserStore'

export class RootStore {
  userStore = new UserStore(this)
}

export const RootStoreContext = createContext(new RootStore())

