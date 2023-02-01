import React from 'react'
import {NavLink} from 'react-router-dom'


function Navbar() {
  return (
    <>
      <div className='navbar' data-testid="navbar">
      <img alt='logo'  src='https://www.workset.in/wp-content/uploads/2022/06/Group-130-1.png'/>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/About'>About</NavLink>
      <NavLink to='/Features' className="me-5">Features</NavLink>
      </div>
    </>
  )
}

export default Navbar
