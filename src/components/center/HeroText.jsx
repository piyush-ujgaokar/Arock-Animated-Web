import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'

const HeroText = () => {

  const textRef=useRef(null)

  useGSAP(()=>{
    let clutter=""
    const splittedText=textRef.current.textContent.split("")

    splittedText.forEach((e) => {
     clutter+=`<span>${e}</span>`
    });
    textRef.current.innerHTML=clutter

    gsap.from('h1 span',{
        y:100,
        delay:2.15,
        opacity:0,
        stagger:0.1,
    })

  })

  return (
    <div >
      <h1 ref={textRef} className='text-white whitespace-nowrap text-center text-[18vw] font-[u8] leading-[15vw] font-bold uppercase'>Aerock</h1>
      </div>
  )
}

export default HeroText