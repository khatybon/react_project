import React, { useState } from 'react'
import Navbar from './commponents/Navbar/Navbar'
import Hero from './commponents/Navbar/Hero/Hero'
import Category from './commponents/Category/Category'
import ProductDisplay from './commponents/ProductDisplay/ProductDisplay'
const App = () => {
  const[category,setCategory]=useState("All");
  return (
    <div className='app'>
      <Navbar/>
      <Hero/>
      <Category category={category} setCategory={setCategory}/>
      <ProductDisplay category={category}/>
    </div>
  )
}

export default App
