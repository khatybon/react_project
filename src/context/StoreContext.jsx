import { createContext, useEffect, useState } from "react";
import { product_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    const [cartItems,setCartItems] = useState({});
    const addToCart = (itemId)=>{
        if (!cartItems[itemId]) {
            setCartItems((prev)=>({...prev,[itemId]:1}))
            
        }
        else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }

    const removeFormCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    useEffect(()=>{
        console.log(cartItems);
    },[cartItems])

    const contextValue = {
        product_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFormCart
           
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
