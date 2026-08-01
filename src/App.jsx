import { useState } from 'react'
import './App.css'
import Header from './scr/components/header/Header'
import Intro from './scr/components/content/Intro'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Intro/>
    </>
  )
}

export default App
