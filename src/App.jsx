import React from 'react'
import './App.css'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Search from './pages/Search'
import Watch from './pages/Watch'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/search' element={<Search/>}></Route>
      <Route path='/watch:id' element={<Watch/>}></Route>
    </Routes>
    </BrowserRouter>
     
  )
}

export default App