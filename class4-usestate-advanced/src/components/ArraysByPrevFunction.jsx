import React, { useState } from 'react'


// batch update using useState 

const ArraysByPrevFunction = () => {
  const [num, setNum] = useState(10)

  const btnclicked = ()=>{
    setNum(prev=>(prev+1))
    setNum(prev=>(prev+1))
    setNum(prev=>(prev+1))
  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={btnclicked} className='px-5 py-3 bg-gray-400 rounded '>Click me</button>
    </div>
  )
}

export default ArraysByPrevFunction
