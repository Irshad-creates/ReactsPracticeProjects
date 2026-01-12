import React, { useContext } from 'react'
import Navbar2 from './Navbar2'
import { useState } from 'react'
import ThemeContext, { ThemeContextData } from '../context/ThemeContext'

const Navbar = (props) => {

  const data = useContext(ThemeContextData)
  
  console.log(data);
  
  
    
  return (
    <div className='nav'>
        <h1>{data}</h1>
        {props.children}
        <Navbar2 theme={props.theme}/>
    </div>

  )
}

export default Navbar