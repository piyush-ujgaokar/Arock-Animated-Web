import React from 'react'
import 'remixicon/fonts/remixicon.css'

const SubHeading = () => {
  return (
    <div className='flex  justify-between'>
      <div className='flex text-sm items-start gap-2'>
        <i className="ri-play-mini-fill px-3 py-2 border rounded-full"></i>
        <h3 className='uppercase' > Play <br />This Film</h3>
      </div>
      <div className='flex gap-22 text-sm font-[a4]'>
        <h2 className='uppercase' >Not Your <br />Boring developer</h2>
        <h2 className='uppercase'> Nagpur,<br />India</h2>
      </div>
    </div>
  )
}

export default SubHeading