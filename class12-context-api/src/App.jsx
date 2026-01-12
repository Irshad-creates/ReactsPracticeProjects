import React, { useState } from 'react'
import Navbar from './components/Navbar'

const App = () => {

  const [theme, setTheme] = useState("light")

  return (
    <div>
      <Navbar theme={theme} >
        <h2>this is me</h2>
      </Navbar>
    </div>
  )
}

export default App