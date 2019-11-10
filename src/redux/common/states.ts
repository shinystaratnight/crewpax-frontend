export type Number = number | null
export type String = string | null

export type UserState = {
  id: Number,
  emailer: boolean,
  logged: boolean,
  fullname: String,
  username: String,
  avatar: String,
  location: String
}

export type State = {
  users: UserState
}