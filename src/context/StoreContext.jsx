import axios from "axios";
import { createContext } from "react";
// import { food_list } from "../assets/assets";
import { useEffect, useState } from "react";


export const StoreContext = createContext(null);

const linkApi = "https://apisubject-backend.onrender.com"
// const linkApi = "http://localhost:4000"

const StoreContextProvider = (props) => {

    const [cartItems, setCartItems] = useState({})
    const url = linkApi
    const [token, setToken] = useState('')
    const [food_list, setFoodList] = useState([])

    const addToCart = async (id) => {
        if (!cartItems[id]) {
            setCartItems(prev => {
                return {
                    ...prev,
                    [id]: 1
                }
            })
        }
        else {
            setCartItems(prev => {
                return {
                    ...prev,
                    [id]: prev[id] + 1
                }
            })
        }
        if (token) {
            await axios.post(url + '/api/cart/add', { itemId: id }, { headers: { token } })
        }


    }

    const removeFromCart = async (id) => {
        setCartItems(prev => {
            return {
                ...prev,
                [id]: prev[id] - 1
            }
        })
        if (token) {
            await axios.post(url + '/api/cart/remove', { itemId: id }, { headers: { token } })
        }
    }

    const loadCartData = async (token) => {
        const response = await axios.post(url + '/api/cart/get', {}, { headers: { token } })
        const data = response.data.cartData
        setCartItems(data)
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = food_list.find((produce) => produce._id === item)
                totalAmount += itemInfo.price * cartItems[item]
            }
        }
        return totalAmount;
    }

    const fetchFoodList = async () => {
        // const response = await fetch(`${url}/api/food/list`)
        // const data = await response.json()
        // setFoodList(data)

        const response = await axios.get(`${url}/api/food/list`)
        setFoodList(response.data)
    }

    useEffect(() => {
        async function fetchData() {
            await fetchFoodList()
            const token = localStorage.getItem('token')
            if (token) {
                setToken(token)
                await loadCartData(token)
            }
        }
        fetchData()
    }, [])


    const contextValue = {
        food_list,
        cartItems,
        addToCart,
        removeFromCart,
        setCartItems,
        getTotalCartAmount,
        url,
        token,
        setToken
    }



    // useEffect(() => {console.log(cartItems)}, [cartItems])

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;