import { createContext, useEffect, useState } from "react";
import { foodList } from "../assets/data";
export const StoreContext=createContext(null);
const StoreContextProvider=(props)=>{

    const [cartItem,setCartItem]=useState({});

    const addToCart=(itemId)=>{
        if(!cartItem[itemId]){
            setCartItem((prev)=>({...prev,[itemId]:1}))
        }else{
            setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }

    const removeFromCart=(itemId)=>{
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    
    const getTotalCartAmount=()=>{
        let totalAmount=0;
        for(const item in cartItem){
            if(cartItem[item]>0){
                let itemInfo=foodList.find((product)=>product.id===Number(item));
                totalAmount+=(itemInfo.price * cartItem[item]);
                // console.log(itemInfo,item)
            }
            
        }
        return totalAmount;
    }

    const contextValue={
        foodList,
        cartItem,
        setCartItem,
        addToCart,
        removeFromCart,
        getTotalCartAmount
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;