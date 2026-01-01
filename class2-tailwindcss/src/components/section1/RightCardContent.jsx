import React from 'react'
import { ArrowRight } from "lucide-react";

const RightCardContent = (props) => {
    console.log(props);
    
  return (
    <div className=" h-full w-full absolute top-0 left-0 p-5 flex flex-col justify-between">
            <h3 className="h-11 w-11 text-xl bg-white border border-black rounded-full flex items-center justify-center">{props.id+1}</h3>
            <div >
                <p className="text-white  text-lg leading-normal mb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae itaque porro provident minima ea reiciendis, laboriosam ex quia pariatur. </p>
                <div className="flex items-center justify-between ">
                    <button style={{backgroundColor:props.color}} className="text-xl  font-semibold bg-blue-600 px-5 py-3 rounded-full text-white">{props.tags}</button>
                    <button className="text-xl font-semibold bg-blue-600 px-3 py-3 rounded-full text-white"><ArrowRight /></button>
                </div>
            </div>
      </div>
  )
}

export default RightCardContent
