import React, { useContext, useState } from 'react'
import'./Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
const Navbar = ({setShowLogin}) => {
    const[menu,setMenu]= useState("home");

    const{getTotalCartAmount,cartItems} = useContext(StoreContext);
  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo} alt="" className="logo" /></Link>
      <ul className="navbar-menu">
        <Link to='/'  onClick={()=>setMenu("home")} className={menu=="home"?"active":""}>home</Link>
        <li onClick={()=>setMenu("product")} className={menu=="product"?"active":""}>product</li>
        <li onClick={()=>setMenu("mobile-app")} className={menu=="mobile-app"?"active":""}>contact-us</li>
        <Link to='/transaction'  onClick={()=>setMenu("transaction")} className={menu=="transaction"?"active":""}>transactions data</Link>
      </ul>
      <div className="navbar-right">
        <img
          src={assets.search_icon}
          alt="Search"
          onClick={() => setShowSearch(!showSearch)}
        />
        <div className="navbar-search_icon">
            <Link to='/cart'> <img src={assets.basket_icon} alt="" /></Link>
            {cartItems.length > 0 && <div className="dot"> </div>}
        </div>
        <button onClick={()=>setShowLogin(true)}>sign in</button>
      </div>
    </div>
  )
}

export default Navbar