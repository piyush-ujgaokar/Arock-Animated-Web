
import LoadingParent from './components/Loading/LoadingParent'
import Home from './components/LandingPage/Home'
import MenuPage from './components/menu/MenuPage'
import { useState } from 'react'

const App = () => {

  const [menuOpen, setMenuOpen] = useState(false)


  return (
    <div className='h-screen bg-[#111] overflow-hidden'>
      <MenuPage menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <LoadingParent/>
      <Home menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

    </div>
  )
}

export default App