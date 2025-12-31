import React from 'react'
import {Bookmark} from 'lucide-react'

const card = (props) => {


  console.log(props)
  
  return (
    <div className="card">
      <div className="top">
          <img src={props.brandlogo} alt="" />
          <div>
          <button>Save <Bookmark size={13} color='#5b5a5aff' /></button>
          </div>
        </div>
        <div className="center">
          <h3>{props.company}<span> {props.datePosted}</span></h3>
          <h2>{props.post}</h2>
          <div id="center-down">
            <h3>{props.tag1}</h3>
            <h3>{props.tag2}</h3>
          </div>
        </div>
        <div className="bottom">
          <div id="bottom-up" >
            <h3>{props.pay}</h3>
            <p>{props.location}</p>
          </div>
          <button>Apply Now</button>
        </div>
    </div>
    
  )
}

export default card
