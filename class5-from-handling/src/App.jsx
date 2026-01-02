import React from 'react'

  const App = () => {

    const submitHandler=(elem)=>{
      elem.preventDefault()
      console.log("submitted");
      
    }

  return (
    <div >
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
      <input type="text" placeholder='Enter here'  />
      <button>Submit</button>
      </form>
    </div>
  )
}

export default App
