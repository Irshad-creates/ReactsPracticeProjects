import React from 'react'
import HeroLeftText from './HeroLeftText';
import Arrow from './Arrow';

const LeftContent = () => {
  return (
    <div className=' h-full w-2/5 flex flex-col justify-between p-4'>
        <HeroLeftText />
        <Arrow />
    </div>
  )
}

export default LeftContent
