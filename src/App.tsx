import React, { useEffect, useContext } from 'react'
import { RootStoreContext } from './stores/RootStore'
import Welcome from './routes/Welcome'
import Home from './routes/Home'

const App = () => {
  const rootStore = useContext(RootStoreContext)
  
  useEffect(() => {
    
  }, [])

  return (
    !rootStore.userStore.loggedIn ? 
      <Welcome /> : <Home />
  )
}

export default App
