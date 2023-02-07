import React from 'react'
import {NavLink} from 'react-router-dom'

function Navbar() {
  return (
    <>
      <div className='navbar' data-testid='navbar'>
      <img alt='logo' src='https://hicoders.ch/wp-content/uploads/2022/11/hiCoders-Vector.png'/>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/Teacher'>Teacher</NavLink>
      <NavLink to='/Student'>Student</NavLink>
      </div>
    </>
  )
}

export default Navbar
