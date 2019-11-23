import { observable, action } from 'mobx'
import axios from 'axios'

import { RootStore } from './RootStore'
import { serverUrl } from '../static/entries'

export class UserStore {
  constructor(private rootStore: RootStore) { }

  @observable loggedIn = false

  @action signup = () => {
    axios.post(serverUrl + '/api/users/register', { username: "abc@gail.com", password: "12345", name: "Star" })
  }

}