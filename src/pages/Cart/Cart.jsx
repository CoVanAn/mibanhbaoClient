import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom'

const Cart = () => {

  const { cartItems, food_list, removeFromCart, getTotalCartAmount, url } = useContext(StoreContext)

  const navigate = useNavigate();

  return (
    <div className='cart'>
      <div className='cart-items'>
        <div className='cart-items-title'>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quanlity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((food, index) => {
          if (cartItems[food._id] > 0)
            return (
              <div>
                <div key={index} className='cart-items-title cart-items-item'>
                  <img src={url+'/images/'+ food.image} alt="" />
                  <p>{food.name}</p>
                  <p>${food.price}</p>
                  <p>{cartItems[food._id]}</p>
                  <p>${food.price * cartItems[food._id]}</p>
                  <p style={{ cursor: 'pointer' }} onClick={() => removeFromCart(food._id)}>X</p>
                </div>
                <hr />
              </div>
            )
        })}
      </div>
      <div className='cart-bottom'>
        <div className='cart-total'>
          <h2>Cart Totals</h2>
          <div>
            <div className='cart-total-details'>
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>

            <div className='cart-total-details'>
              <p>Delivery Free</p>
              <p>${getTotalCartAmount()===0?0:2}</p>
              {/* <p>${food_list.reduce((acc, food) => acc + cartItems[food._id] * food.price, 0)}</p> */}
            </div>
            <div className='cart-total-details'>
              <b>Total</b>
              <p>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</p>
            </div>
          </div>
          <p>Shipping and taxes are calculated at checkout</p>
          <button onClick={()=>navigate('/order')}>Place to checkbox</button>
        </div>
        <div className='cart-promocode'>
          <div>
            <p>If you have a promocode, enter it here</p>
            <div className='cart-promocode-input'>
              <input type="text" placeholder="Enter promocode" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
