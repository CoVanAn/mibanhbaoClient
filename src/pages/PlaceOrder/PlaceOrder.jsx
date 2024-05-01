import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'

const PlaceOrder = () => {

  const { getTotalCartAmount } = useContext(StoreContext)

  return (
    <div>
      <form className='place-order'>
        <div className='place-order-left'>
          <p className='title'>Delivery Infomation</p>
          <div className='multi-fields'>
            <input type="text" placeholder="First Name" required />
            <input type="text" placeholder="Last Name" required />
          </div>
          <input type="text" placeholder="Email" required />
          <input type="text" placeholder="Address" required />
          <div className='multi-fields'>
            <input type="text" placeholder="City" required />
            <input type="text" placeholder="State" required />
          </div>
          <div className='multi-fields'>
            <input type="text" placeholder="Zip code" required />
            <input type="text" placeholder="Country" required />
          </div>
          <input type="text" placeholder="Phone Number" required />
        </div>
        <div className='place-order-right'>
          <div className='cart-total'>
            <h2>Cart Totals</h2>
            <div>
              <div className='cart-total-details'>
                <p>Subtotal</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <hr />

              <div className='cart-total-details'>
                <p>Delivery Free</p>
                <p>{getTotalCartAmount()===0?0:2}</p>
                {/* <p>${food_list.reduce((acc, food) => acc + cartItems[food._id] * food.price, 0)}</p> */}
              </div>
              <hr />

              <div className='cart-total-details'>
                <b>Total</b>
                <p>${getTotalCartAmount()===0?0:getTotalCartAmount() + 2}</p>
              </div>
            </div>
            <button >Proceed to payment</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default PlaceOrder
