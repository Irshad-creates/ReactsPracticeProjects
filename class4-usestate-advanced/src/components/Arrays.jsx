import React, { useState } from 'react'
// using useState on the arrays  with a newNum
const Arrays = () => {

  const [num, setNum] = useState([10,20,30])

  const btnclicked = ()=>{
    
    const newNum = [...num]
    newNum.push(40)
    setNum(newNum)
  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={btnclicked} className='px-5 py-3 bg-gray-400 rounded '>Click me</button>
    </div>
  )
}

export default Arrays
