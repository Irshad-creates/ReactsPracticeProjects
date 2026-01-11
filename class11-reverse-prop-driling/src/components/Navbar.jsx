import React from 'react'

const Navbar = (props) => {

    function changeTheme (){
        console.log(props.setTheme);
        
        props.setTheme("DARK")
    }

  return (
    <div>
      <button onClick={changeTheme}
      >Change theme</button>
    </div>
  )
}

export default Navbar