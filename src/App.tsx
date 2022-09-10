import React, {useState} from 'react'
import { Hover } from './components/Hover'
import { useInput } from './hooks/useInput'

function App() {
  const username = useInput("")
  const password = useInput("")

  return (
    <div>
      <input {...username} placeholder="Username"/>
      <input {...password} placeholder="Password"/>

      <button onClick={() => console.log(username.value + " " + password.value)}> Click </button>

      <Hover />
    </div>
  )
}

export default App
