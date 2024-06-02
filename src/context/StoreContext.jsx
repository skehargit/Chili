import { createContext, useEffect, useState } from "react";
// import { foodList } from "../assets/data";
import axios from 'axios'
export const StoreContext=createContext(null);
const StoreContextProvider=(props)=>{
    const url="http://localhost:4000";
    const [token,setToken]=useState("")
    const [cartItem,setCartItem]=useState({});
    const [foodList,setFoodList]=useState([]);

    const fetchFoodList=async()=>{
        const response=await axios.get(`${url}/api/food/list`);
        setFoodList(response.data.data);
        // console.log(response.data.data)
    }

    const addToCart = async (itemId)=>{
        if(!cartItem[itemId]){
            setCartItem((prev)=>({...prev,[itemId]:1}))
        }else{
            setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
        if(token){
            await axios.post(url+"/api/cart/add",{itemId},{headers:{token}});
        }
    }

    const removeFromCart=async(itemId)=>{
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}));
        if(token){
            await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}});
        }
    }
    const loadCartData=async(token)=>{
        const response=await axios.post(url+"/api/cart/get",{},{headers:{token}});
        setCartItem(response.data.cartData)
    }
    
    const getTotalCartAmount=()=>{
        let totalAmount=0;
        for(const item in cartItem){
            if(cartItem[item]>0){
                let itemInfo=foodList.find((product)=>product._id===item);
                totalAmount+=(itemInfo.price * cartItem[item]);
                // console.log(itemInfo,item)
            }
            
        }
        return totalAmount;
    }

    useEffect(()=>{
        
        async function loadData(){
            await fetchFoodList();
            if(localStorage.getItem("token")){
                setToken(localStorage.getItem("token"));
                await loadCartData(localStorage.getItem("token"));
            }
        }
        loadData();
    },[])

    const contextValue={
        foodList,
        cartItem,
        setCartItem,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        url,
        token,
        setToken
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;