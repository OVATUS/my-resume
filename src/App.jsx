import { useState } from 'react'

import Header from './scr/components/header/Header'
import Intro from './scr/components/content/Intro'
import Skills from './scr/components/content/Skills'
import Project from './scr/components/content/Project'
import Education from './scr/components/content/Education'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <div>
      <Header/>
    </div>

    <div className ="grid grid-cols-1 gap-2">
      <Intro/>
      <Skills/>
      <Project/>
      <Education/>
    </div>
    
    </>
  )
}

export default App
