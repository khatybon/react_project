import React, { useContext, useState } from 'react'
import'./Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
const Navbar = ({setShowLogin}) => {
    const[menu,setMenu]= useState("home");

    const{getTotalCartAmount} = useContext(StoreContext);
  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo} alt="" className="logo" /></Link>
      <ul className="navbar-menu">
        <Link to='/'  onClick={()=>setMenu("home")} className={menu=="home"?"active":""}>home</Link>
        <li onClick={()=>setMenu("product")} className={menu=="product"?"active":""}>product</li>
        <li onClick={()=>setMenu("mobile-app")} className={menu=="mobile-app"?"active":""}>mobile-app</li>
        <li onClick={()=>setMenu("contact-us")} className={menu=="contact-us"?"active":""}>contact-us</li>
      </ul>
      <div className="navbar-right">
        <img
          src={assets.search_icon}
          alt="Search"
          onClick={() => setShowSearch(!showSearch)}
        />
        <div className="navbar-search_icon">
            <Link to='/cart'> <img src={assets.basket_icon} alt="" /></Link>
            <div className="dot"> </div>
        </div>
        <button onClick={()=>setShowLogin(true)}>sign in</button>
      </div>
    </div>
  )
}

export default Navbar