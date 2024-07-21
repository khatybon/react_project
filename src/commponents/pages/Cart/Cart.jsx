import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../../context/StoreContext'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const { cartItems, product_list, removeFormCart, getTotalCartAmount } = useContext(StoreContext)

  const navigate = useNavigate();

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {product_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div className='cart-items-title cart-items-item'>
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p onClick={()=>removeFormCart(item._id)} className='cross'>x</p>
                </div>
                <hr/>
              </div>

            )
          }
        })}
      </div>
        <div className="cart-bottom">
          <div className="cart-total">
            <h2>Cart Totals</h2>
            <div>
              <div className="cart-totals-details">
                <p>Subtotal</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className="cart-totals-details">
                <p>Delivery Fee</p>
                <p>{2}</p>
              </div>
              <hr />
              <div className="cart-totals-details">
                <b>Total</b>
                <b>${getTotalCartAmount()+2}</b>
              </div>
              

            </div>
            <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
          </div>
          <div className="cart-promocode">
            <div>
              <p>If you have promo code, enter it here</p>
              <div className='cart-promocode-input'>
                <input type="text" placeholder='promocode' />
                <button>Submit</button>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Cart