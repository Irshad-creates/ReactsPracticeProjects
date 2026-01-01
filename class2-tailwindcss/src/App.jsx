import React from 'react'
import Section1 from './components/section1/section1'
import Section2 from './components/section2/section2'

const App = () => {
const AllUsers = [
  {
    img: "https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: "Satisfied",
    color: "royalblue"
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1661749342073-a28c018a2929?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: "Underserved",
    color: "pink"
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1661762742902-11e0bbc0b863?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: "Underbanking",
    color: "red"
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1661645312997-53c1204fae36?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: "Underwear",
    color: "yellow"
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1661719388886-931c3cdacdbc?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: "Average",
    color: "orange"
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1661638483466-0f783a1ada40?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: "Technique",
    color: "blue"
  }
];


  return (
    <div >
      <Section1 users={AllUsers}/>
    </div>
  )
}

export default App

