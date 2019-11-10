import React from 'react'
import { Provider } from 'react-redux'
import store from './src/redux/store'
import AppNavigator from './src/routes/AppNavigator'

interface Props { }
const App: React.FC<Props> = () => {
  return (
    <Provider store={ store }>
      <AppNavigator />
    </Provider>
  )
}

export default App
