import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const HeroContainer = (props) => {

  return (
    <div className=' h-[90%] w-full px-10 py-10 flex gap-10'>
      <LeftContent />
      <RightContent user={props.user}/>
    </div>
  )
}

export default HeroContainer
