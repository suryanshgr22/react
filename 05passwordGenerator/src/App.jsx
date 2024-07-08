import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false)
  const [character, setChar] = useState(false)
  const [password, setPassword] = useState()

  const passwordref = useRef(null)

  const passwordgenerator = useCallback(()=>{
    let pass = ""
    let str= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (number) str+="123456789"
    if (character) str+="!@#$%^&*()_+{}[]|\\:;<>,.?/"
    for (let i = 1; i <= length; i++) {
      let c = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(c);
    }
    setPassword(pass)


  }, [length,number,character, setPassword])


  const copypasswordtoclipboard = useCallback(()=>{
    passwordref.current?.select()
    passwordref.current?.setSelectionRange(0,4)
    window.navigator.clipboard.writeText(password)
  },[password])


  useEffect(()=>{passwordgenerator()}, [length,number,character, passwordgenerator])
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg my-8 px-4 text-orange-500 bg-gray-800' >
      <h1 className='text-center'>Password Generator</h1>
        <div className='mb-4 flex shadow rounded-lg overflow-hidden' >
          <input type="text" value={password} className='outline-none w-full py-1 px-3' placeholder='Password' readOnly ref={passwordref} />
          <button onClick={copypasswordtoclipboard} className='text-white bg-sky-900 px-2 py-2' >copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" 
            min={6} max={100} value={length} className='cursor-pointer' onChange={(e) => {setLength(e.target.value)}}/>
            <label >Length:{length}</label>

          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" value={number} onChange={()=> {setNumber((prev)=>!prev)}} />
            <label >Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={character}
              id="characterInput"
              onChange={() => {
                  setChar((prev) => !prev )
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>


    </>
  )
}

export default App
