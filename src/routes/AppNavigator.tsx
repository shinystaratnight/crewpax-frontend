import React, { useEffect, useContext } from 'react'
import { RootStoreContext } from '../stores/RootStore'
import Welcome from '../screens/Welcome'
import Home from '../screens/Home'

export default function AppNavigator () {
  
  const rootStore = useContext(RootStoreContext)
  
  useEffect(() => {
    
  }, [])
  
  return (
    !rootStore.userStore.loggedIn ? 
      <Welcome /> : <Home />
  )
}