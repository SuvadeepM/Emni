import { useState } from 'react'
import './App.css'

function App() {

  const [counter, setCounter] = useState(0)

  const addValue = () => {
    setCounter(counter + 1)
  }
  
  const decreaseValue = () => {
    if (counter < 1) {
      return 0
    }
    setCounter(counter - 1);

  }

  return (
    <>
    <h1>Suvadeep and React</h1>
    <h2>counter value: {counter}</h2>
    <button onClick={addValue}>add value</button>
    <br />
    <button onClick={decreaseValue}>decrease value</button>
    </>
  )
}

export default App
