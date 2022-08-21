import React from 'react'
import Form from './component/Form'
import ContextProvider from './ContextProvider'

const App = () => {
  return (
    <ContextProvider>
      <Form/>
    </ContextProvider>
  )
}

export default App