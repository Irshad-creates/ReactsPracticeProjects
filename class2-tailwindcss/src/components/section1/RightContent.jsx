import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {


  return (
    <div id='Right' className=' rounded-3xl h-full w-4/5 p-3 flex flex-nowrap gap-10 overflow-x-auto'>
    {props.user.map(function(elem,idx){

      return <RightCard key={idx} id={idx} img={elem.img} tag={elem.tags} color={elem.color} />
    })}
    </div>
  )
}

export default RightContent
