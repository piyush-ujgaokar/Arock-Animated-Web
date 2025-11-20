import React from 'react'
import Logo from './Logo'
import Menu from './Menu'

const NavBar = (props) => {
  return (
    <div className='flex items-center w-full justify-between text-xl px-5 py-2'>
        <Logo  />
        <Menu menuOpen={props.menuOpen} setMenuOpen={props.setMenuOpen} />
    </div>
  )
}

export default NavBar