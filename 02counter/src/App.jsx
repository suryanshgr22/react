import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(7)
  let [heart, setHeart] = useState("\uD83D\uDDA4");
  const addvalue = () =>{
    if(counter + 1 > 20){
      return
    }
    counter = counter+1;
    setCounter(counter)
  }
  const like= ()=>{
    if(heart == "\uD83D\uDDA4"){
      setHeart("\uD83E\uDDE1")
    }else{
      setHeart("\uD83D\uDDA4")
    }
  }
  return (
    <>
      <h1>Suryansh counter : {counter}</h1>
      <button onClick={addvalue} >Add</button>
      <div onClick={like}>{heart}</div>
    </>
  )
}

export default App
