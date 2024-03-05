import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className= 'bg-green-500 text-black p-3 rounded-xl' >TailWind Test</h1>
     <Card username="chaiaurcode" btnText = "click me" />
     <Card username="Tharunn codes" />
  </>
  )
}

export default App
