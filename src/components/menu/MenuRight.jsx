import React from 'react'
import MenuClose from './MenuClose'

const MenuRight = (props) => {
  return (
    <div className='w-1/2 h-full bg-[#111] py-[2vw] px-[3vw] relative'>
        <MenuClose menuOpen={props.menuOpen} setMenuOpen={props.setMenuOpen}/>
    </div>
  )
}

export default MenuRight