import React from 'react'
import Home from './components/Home/Home'
import Header from './components/Header/Header'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Detail from './components/Detail/Detail'
import Cart from './components/Cart/Cart'
import { useState } from 'react'
import './App.css'
import "@fontsource/poppins";

function App() {
  const [savatlar,setsavatlar] = useState(
    localStorage.getItem("savat")? JSON.parse(localStorage.getItem("savat")):[]
  )

  return (
<div>
    <BrowserRouter>
    <Header savatlar = {savatlar} />
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/detail' element={<Detail setsavatlar={setsavatlar} savatlar = {savatlar}/>}/>
        <Route path='/cart' element={<Cart />}/>
    </Routes>
    </BrowserRouter>
   

</div>
  )
}

export default App