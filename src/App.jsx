import { useState } from 'react'
import './App.css'
import MAINPAGE from './components/mainpage/mainpage.jsx'
import UPPERPART from './components/upperpart/upperpart.jsx'
import FOOTER from './components/footer/footer.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ONEDAY from './onedaytours/onedaytour.jsx'
import HEADER from './components/header/header.jsx'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<>
            <UPPERPART />
            <MAINPAGE />
            <FOOTER />
          </>} />
          <Route path='/sngldytrips' element={<>
            {/* <UPPERPART /> */}
            <ONEDAY />
            <FOOTER />
          </>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
