// src/pages/home.jsx

import React, { useState } from 'react';
import Hero from '../Navbar/Hero/Hero';
import Category from '../ProductDisplay/Category'; // Adjust this if the path is different
import ProductDisplay from '../ProductDisplay/ProductDisplay';

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <div className='home'>
      <Hero />
      <Category category={category} setCategory={setCategory} />
      <ProductDisplay category={category} />
    </div>
  );
};

export default Home;
