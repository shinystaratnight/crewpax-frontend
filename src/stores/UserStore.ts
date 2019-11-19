import { observable } from 'mobx'
import { RootStore } from './RootStore'

export class UserStore {
  constructor(private rootStore: RootStore) { }

  @observable loggedIn = false
}