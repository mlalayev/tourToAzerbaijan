import { useState } from 'react'
import './App.css'
import MAINPAGE from './components/mainpage/mainpage.jsx'
import UPPERPART from './components/upperpart/upperpart.jsx'
import FOOTER from './components/footer/footer.jsx'

function App() {

  return (
    <>
    <UPPERPART/>
    <MAINPAGE/>
    <FOOTER/>
    </>
  )
}

export default App
