
import { useRef } from 'react'
import NavBar from '../NavBar/NavBar'
import CenterText from '../center/CenterText'
import Black from './Black'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const LandingPage = (props) => {

const pageRef=useRef(null)
useGSAP(()=>{
  gsap.from(pageRef.current,{
    opacity:0,
    delay:1.8,
    duration:1,
    y:50,
    scale:1.05,
  })
})

console.log(props.menuOpen);


  return (
   <div className='h-screen'>
  
    <Black/>
    <div ref={pageRef}  className=' text-white bg-cover bg-center bg-[url("/public/heroImg.webp")] h-screen w-full'>
        <NavBar menuOpen={props.menuOpen} setMenuOpen={props.setMenuOpen}/>
        <CenterText/>
      </div>
   </div>
  )
}

export default LandingPage