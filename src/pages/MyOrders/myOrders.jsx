import React, {useState, useContext, useEffect} from 'react'
import './myOrders.css'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios'
import { assets } from '../../assets/assets'

const MyOrders = () => {

    const {url, token} = useContext(StoreContext)
    const [data, setData] = useState([])

    const fetchOrders = async () => {
        const response = await axios.post(`${url}/api/order/userorders`, {}, { headers: { token } })
        setData(response.data.data)
        console.log(response.data.data)
    }

    useEffect(() => {
        if(token) {
            fetchOrders()
        }
    }, [token])


  return (
    <div className='my-orders'>
      <h2>My orders</h2>
      <div className='container'> 
      {data.map((order, index) => (
        <div key={index} className='my-orders-order'>
            <img src={assets.parcel_icon} />
            <p>{order.items.map((items, index) =>
            {
                if(index === order.items.length - 1) {
                    return `${items.name} x ${items.quantity}`
                } else {
                    return `${items.name} x ${items.quantity}, `
                }
            }
            )}</p>
            <p>Amount: ${order.amount}.00</p>
            <p>Items: {order.items.length}</p>
            <p><span>*</span><b>{order.status}</b></p>
            <button onClick={fetchOrders}>Track order</button>
            </div>
      ))}
      </div>
    </div>
  )
}

export default MyOrders
