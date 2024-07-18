import React, { useState } from 'react'
import Navbar from './commponents/Navbar/Navbar'
import Hero from './commponents/Navbar/Hero/Hero'
import Category from './commponents/Category/Category'
import ProductDisplay from './commponents/ProductDisplay/ProductDisplay'
import Footer from './commponents/Footer/Footer'
import LoginPopup from './commponents/LoginPopup/LoginPopup'
import Cart from './commponents/pages/Cart/Cart'
import { Route, Routes } from 'react-router-dom'
const App = () => {
  const [category, setCategory] = useState("All");
  const [showLogin, setShowLogin] = useState(false)
  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />
        <Hero />
        <Category category={category} setCategory={setCategory} />
        <ProductDisplay category={category} />
        <Routes>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </div>
      <Footer />
    </>


  )
}

export default App
