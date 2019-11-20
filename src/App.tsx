import React, { useEffect, useContext } from 'react'
import { RootStoreContext } from './stores/RootStore'
import Index from './routes/Index'
import Home from './routes/Home'

const App = () => {
  const rootStore = useContext(RootStoreContext)
  
  useEffect(() => {
    return () => {}
  }, [])

  return (
    !rootStore.userStore.loggedIn ? 
      <Index /> : <Home />
  )
}

export default App
