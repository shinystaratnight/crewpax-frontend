import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Welcome from '../screens/Welcome'
import Home from '../screens/Home'
import { State } from '../redux/common/states'
import { checkLoginStatus } from '../redux/actions/userActions'

const mapStateToProps = (state: State) => ({
  isLogged: state.users.logged
})

const mapDispatchToProps = {
  checkLoginStatus
}

interface Props {
  isLogged: boolean,
  checkLoginStatus: () => void
}

const AppNavigator: React.FC<Props> = ({ isLogged, checkLoginStatus}) => {
  useEffect(() => {
    checkLoginStatus()
  }, [])
  
  return (
    !isLogged ? <Welcome /> : <Home />
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppNavigator)