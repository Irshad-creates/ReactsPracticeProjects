import React, { createContext } from 'react'

export const ThemeContextData = createContext()

const ThemeContext = (props) => {
  return (
    <div>
      <ThemeContextData.Provider value="irshad" >
        {props.children}
      </ThemeContextData.Provider>
    </div>
  )
}

export default ThemeContext 