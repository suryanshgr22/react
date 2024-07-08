import React from 'react'
import { useState, useEffect } from 'react'
import {useLoaderData} from 'react-router-dom'
function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/suryanshgr22')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])



  return (
    <>
    <div className='text-center m-4 bg-gray-600 text-orange-400 p-4 text-3xl' >
    <img src={data.avatar_url} alt="no" />
      Github : {data.login} </div>
    
    </>
  )
}

export default Github

export const githubInfoLoader = async()=>{
  const response = await fetch('https://api.github.com/users/suryanshgr22')
  return response.json()
}