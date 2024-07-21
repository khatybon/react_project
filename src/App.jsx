import React, { useState } from 'react'
import Navbar from './commponents/Navbar/Navbar'

import Footer from './commponents/Footer/Footer'
import LoginPopup from './commponents/LoginPopup/LoginPopup'
import Cart from './commponents/pages/Cart/Cart'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import Transaction from './commponents/Transactions/Transaction'
const App = () => {
  const [category, setCategory] = useState("All");
  const [showLogin, setShowLogin] = useState(false)
  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}

      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/transaction' element={<Transaction />} />
        </Routes>
      </div>
      <Footer />
    </>


  )
}

export default App
