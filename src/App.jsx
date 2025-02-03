import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Gamelist from './components/Gamelist'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarr from './components/Navbarr'
import { Route, Routes } from 'react-router-dom'
import Gamedow from './components/Gamedow'

function App() {
  const [count, setCount] = useState(0)
  const [text, settext] = useState("")


  return (
    <div>
    <Navbarr  settext={settext} />
    <Routes>
    <Route path='5' element={<Navbarr settext={settext} />}/>
    <Route path='/' element={<Gamelist text={text} />}/>
    <Route path="/Gamedow/:name" element={<Gamedow />} />
    </Routes>
    </div>
  )
}

export default App
