import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between text-xl p-5 bg-gray-800'>
        <h2 className='text-2xl'>IRSHAD</h2>
        <div className='flex gap-20'>
            <Link to="/">Home</Link>
            <Link to="/Contact">Contact</Link>
            <Link to="/About">About</Link>
            <Link to="/course">Course</Link>
            <Link to="/Product">Product</Link>
            
        </div>
    </div>
  )
}

export default Navbar