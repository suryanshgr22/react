import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400' >Tailwind test</h1>
      <Card username='Keshav'/>
      <Card username='shivansh'/>
      <Card username='shreyash'/>
      <Card/>
    </>
  )
}

export default App
