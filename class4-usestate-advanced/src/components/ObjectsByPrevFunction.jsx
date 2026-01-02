import React, { useState } from 'react'

// batch update using useState  in array


const ObjectsByPrevFunction = () => {
  let [num, setNum] = useState({user: "irshad", age:20 })

  const btnClicked =()=>{
    setNum(prev=>({...prev,user:"anurag", age:23}))

  }

  return (
    <div>
      <h1>hi i am ,{num.user}</h1>
      <h1>i am {num.age} years old</h1>
      <button onClick={btnClicked} className='px-5 py-3 bg-gray-400 rounded '>Click me</button>
    </div>
  )
}

export default ObjectsByPrevFunction
