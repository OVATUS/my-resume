import { useState } from 'react'

import Header from './scr/components/header/Header'
import Intro from './scr/components/content/Intro'
import AboutME from './scr/components/content/AboutME'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Intro/>
    <AboutME/>
    </>
  )
}

export default App
