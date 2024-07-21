
import React, { useState } from 'react';
import Category from '../../commponents/Category/Category';
import ProductDisplay from '../../commponents/ProductDisplay/ProductDisplay';
import Hero from '../../commponents/Navbar/Hero/Hero';


export const Home = () => {
  const [category, setCategory] = useState("All");
  const [showLogin, setShowLogin] = useState(false)


  return (
    <>
      <div className='home'>
        <Hero />
        <Category category={category} setCategory={setCategory} />
        <ProductDisplay category={category} />
      </div>
    </>
  );

};


