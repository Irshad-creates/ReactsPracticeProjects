import React, { useState } from "react";
// using useState on the object  with a newNum

const Objects = () => {
  let [num, setNum] = useState({user: "irshad", age:20 })

  const btnClicked =()=>{
    const newNum = {...num}
    newNum.user ="anurag"
    newNum.age = 21
    setNum(newNum)
  }

  return (
    <div>
      <h1>hi i am ,{num.user}</h1>
      <h1>i am {num.age} years old</h1>
      <button onClick={btnClicked} className='px-5 py-3 bg-gray-400 rounded '>Click me</button>
    </div>
  )
}

export default Objects;
