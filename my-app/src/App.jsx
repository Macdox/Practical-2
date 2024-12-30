import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Forgetpassword from './pages/Forgetpassword'

function App() {
  return (
    <BrowserRouter>
    < Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path='/Signup' element={<Signup/>} />
      <Route path='/Forgetpassword' element={<Forgetpassword/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App