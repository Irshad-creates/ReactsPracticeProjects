import React from 'react'
import Navbar from './Navbar'
import HeroContainer from './HeroContainer'

const Section1 = (props) => {


  return (
    <div className='h-screen w-full '>
      <Navbar />
      <HeroContainer user={props.users}/>
    </div>
  )
}

export default Section1
