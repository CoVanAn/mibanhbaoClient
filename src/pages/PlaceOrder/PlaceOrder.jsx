import React, { useContext, useEffect } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const PlaceOrder = () => {

  const { getTotalCartAmount, token, food_list, cartItems, url } = useContext(StoreContext)

  const [data, setData] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    // state: '',
    // zipcode: '',
    country: '',
    phone: ''
  })

  const handleChangeHandler = (e) => {
    const name = e.target.name
    const value = e.target.value
    setData(data => ({ ...data, [name]: value }))
  }

  // useEffect(() => {
  //   // if (token) {
  //   //   fetch(`${url}/user`, {
  //   //     method: 'GET',
  //   //     headers: {
  //   //       'Content-Type': 'application/json',
  //   //       'Authorization': `Bearer ${token}`
  //   //     }
  //   console.log(data)
  // }, [data])

  const PlaceOrder = async (e) => {
    e.preventDefault()
    let orderItems = [];
    // console.log(data)
    food_list.map((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo);
      }
    })
    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount() + 2
    }
    let response = await axios.post(`${url}/api/order/place`, orderData, { headers: { token } })
    if (response.data) {
      const { session_url } = response.data;
      window.location.replace(session_url);
      // alert('Order placed successfully')
      console.log(orderItems)
      alert('Thank you for your order! I contact to you soon!')
      const navigated = window.location.replace('http://localhost:5174/myorders')
      navigated()
    }
    else {
      alert('Order failed')
    }
  }
  
  const navigate = useNavigate()
  useEffect(() => {
    if(!token){

    }
    else if(getTotalCartAmount() === 0){
      navigate('/cart')
    }
  }, [token])

  return (
    <div>
      <form onSubmit={PlaceOrder} className='place-order'>
        <div className='place-order-left'>
          <p className='title'>Delivery Infomation</p>
          <div className='multi-fields'>
            <input name='firstName' onChange={handleChangeHandler} value={data.firstName} type="text" placeholder="First Name" required />
            <input name='lastName' onChange={handleChangeHandler} value={data.lastName} type="text" placeholder="Last Name" required />
            {/* <input type="text" placeholder="Last Name" required /> */}
          </div>
          <input name='email' onChange={handleChangeHandler} value={data.email} type="text" placeholder="Email" required />
          <input name='street' onChange={handleChangeHandler} value={data.street} type="text" placeholder="Street" required />
          <div className='multi-fields'>
            <input name='city' onChange={handleChangeHandler} value={data.city} type="text" placeholder="City" required />
            {/* <input name='state' onChange={handleChangeHandler} value={data.state} type="text" placeholder="State" required /> */}
          </div>
          <div className='multi-fields'>
            {/* <input name='zipcode' onChange={handleChangeHandler} value={data.zipcode} type="text" placeholder="Zip code" required /> */}
            <input name='country' onChange={handleChangeHandler} value={data.country} type="text" placeholder="Country" required />
          </div>
          <input name='phone' onChange={handleChangeHandler} value={data.phone} type="text" placeholder="Phone Number" required />
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
                <p>{getTotalCartAmount() === 0 ? 0 : 2}</p>
                {/* <p>${food_list.reduce((acc, food) => acc + cartItems[food._id] * food.price, 0)}</p> */}
              </div>
              <hr />

              <div className='cart-total-details'>
                <b>Total</b>
                <p>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</p>
              </div>
            </div>
            <button type='submit' >Proceed to payment</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default PlaceOrder
