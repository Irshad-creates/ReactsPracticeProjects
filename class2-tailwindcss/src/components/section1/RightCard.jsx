import React from "react";
import RightCardContent from "./RightCardContent";


const RightCard = (props) => {
    
  return (
    <div className=" h-full w-80 shrink-0  rounded-3xl overflow-hidden relative" >
        <img className="object-cover h-full w-full" src={props.img} alt=""/>
        <RightCardContent id={props.id} tags={props.tag} color={props.color}/>
    </div>
  );
};

export default RightCard;
