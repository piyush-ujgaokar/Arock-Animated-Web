import React from 'react'

const Menu = (props) => {
  const menuBarOpen=()=>{
    props.setMenuOpen(true)
    console.log(props.menuOpen);
    
  }

  return (
    <div onClick={menuBarOpen} className='font-[a4] text-[1vw] uppercase cursor-pointer hover:opacity-70 active:scale-y-95'>Menu</div>
  )
}

export default Menu