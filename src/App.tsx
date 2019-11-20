import React, { useEffect, useContext } from 'react'
import { RootStoreContext } from './stores/RootStore'
import IndexNavigator from './routes/Index'
import HomeNavigator from './routes/Home'

const App = () => {
  const rootStore = useContext(RootStoreContext)
  
  useEffect(() => {
    return () => {}
  }, [])

  return (
    !rootStore.userStore.loggedIn ? 
      <IndexNavigator /> : <HomeNavigator />
  )
}

export default App
