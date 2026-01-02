import React from 'react'
import Arrays from './components/arrays'
import ArraysByPrevFunction from './components/arraysByPrevFunction'
import Objects from './components/objects'
import ObjectsByPrevFunction from './components/objectsByPrevFunction'
const App = () => {
  return (
    <div>
      <Arrays />
      <ArraysByPrevFunction />

      <br />
      <Objects />
      <ObjectsByPrevFunction />
    </div>
  )
}

export default App
