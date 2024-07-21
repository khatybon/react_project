import { createContext, useState } from "react";
import { product_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    const [cartItems, setCartItems] = useState({});
    
    const addToCart = (itemId) => {
        console.log("itemId = ",itemId);
    if (!cartItems[itemId]) {
        console.log("catItems = ",cartItems);

        setCartItems((prev) => ({ ...prev, [itemId]: 1 }))
    } else {
        console.log("catItems = ",cartItems);

        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
    }
}


    const removeFormCart = (itemId) => {

        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }
    

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                console.log("product = ",item);
                let itemInfo = product_list.find((product) => product._id === item);
                console.log("itemInfoPrice = ",itemInfo )
                totalAmount += itemInfo.price * cartItems[item];
            }

        }
        return totalAmount;
    }

    const contextValue = {
        product_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFormCart,
        getTotalCartAmount

    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
