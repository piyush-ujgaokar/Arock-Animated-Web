import React from 'react'

const MenuClose = (props) => {
    console.log(props);

    const menuBarClose=()=>{
        props.setMenuOpen(false)
    }
    
  return (
    <div onClick={menuBarClose} className='font-[a4] text-white text-sm text-right cursor-pointer hover:opacity-70 active:scale-y-95'>
        Close
    </div>
  )
}

export default MenuClose