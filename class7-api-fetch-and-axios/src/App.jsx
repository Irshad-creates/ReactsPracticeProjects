import React from 'react'
import axios from 'axios'

const App = () => {

  // fetching api by async-await
  const runapi = async ()=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    console.log(response);
  }

  const runApiFromAxios =async ()=>{
   const axiosResponse =await axios.get('https://jsonplaceholder.typicode.com/todos/1')
   console.log(axiosResponse);
   
  }


  return (
    <div>
      <button onClick={runapi}>async-await btn</button>
      <button onClick={runApiFromAxios}>axios btn</button>
    </div>
  )
}

export default App
