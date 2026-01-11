import React from 'react'
import { useNavigate } from 'react-router-dom'


const Navbar2 = () => {

  let navigate =useNavigate()
    
  return (
    <div className='flex items-center gap-5 bg-blue-950 text-white px-2 py-3'>
      <button className='bg-amber-700 px-3 py-2 rounded-xl active:scale-95 '
      onClick={()=>{navigate('/')}}
      >Home</button>

      <button className='bg-amber-700 px-3 py-2 rounded-xl active:scale-95 '
      onClick={()=>{navigate(-1)}}
      >Back</button>

      <button className='bg-amber-700 px-3 py-2 rounded-xl active:scale-95 '
      onClick={()=>{navigate(+1)}}
      >Nextt</button>
      </div>
  )
}

export default Navbar2