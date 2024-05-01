import { createContext } from "react";
import { food_list } from "../assets/assets";
import { useEffect, useState } from "react";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    const [cartItems, setCartItems] = useState({})

    const addToCart = (id) => {
        setCartItems((prev) => {
            if (prev[id]) {
                return {
                    ...prev,
                    [id]: prev[id] + 1
                }
            } else {
                return {
                    ...prev,
                    [id]: 1
                }
            }
        })

    }

    const removeFromCart = (id) => {
        setCartItems(prev => {
            return {
                ...prev,
                [id]: prev[id] - 1
            }
        })
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

    const contextValue = {
        food_list,
        cartItems,
        addToCart,
        removeFromCart,
        setCartItems,
        getTotalCartAmount
    }



    // useEffect(() => {console.log(cartItems)}, [cartItems])

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;