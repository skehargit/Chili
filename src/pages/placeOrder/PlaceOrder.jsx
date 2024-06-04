import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";

function PlaceOrder() {
  const {getTotalCartAmount,token,foodList,cartItems,url}=useContext(StoreContext);
  const [data,setData]=useState({
    firstName:"",
    lastName:"",
    email:"",
    street:"",
    city:"",
    state:"",
    zipcode:"",
    country:"",
    phone:""
  })

  const onChangeHandler = (event)=>{
    const name= event.target.name;
    const value=event.target.value;
    setData(data=>({...data,[name]:value}));
  }
  
  const placeOrder=async(event)=>{
    event.preventDefault();
  }
  return (
    <div className="pt-10">
      <form onSubmit={placeOrder} action="">
       <div> <div>
          <p>title deleinfo</p>
          <p></p>
        </div>
        <div>
          <input name="firstName" value={data.firstName} onChange={onChangeHandler}  type="text" placeholder="firstname" />
          <input name="lastname" value={data.lastName} onChange={onChangeHandler} type="text" placeholder="last name" />
        </div>
        <div>
          <input name="email" value={data.email} onChange={onChangeHandler} type="email" placeholder="email" />
          <input name="street" value={data.street} onChange={onChangeHandler} type="text" placeholder="street" />
        </div>
        <div>
          <input name="city" value={data.city} onChange={onChangeHandler} type="text" placeholder="city" />
          <input name="state" value={data.state} onChange={onChangeHandler} type="text" placeholder="state" />
        </div>
        <div>
          <input name="zipcode" value={data.zipcode} onChange={onChangeHandler} type="text" placeholder="zipcode" />
          <input name="country" value={data.country} onChange={onChangeHandler} type="text" placeholder="country" />
        </div>
        <input name="phone" value={data.phone} onChange={onChangeHandler} type="text" placeholder="phone" /></div>
        <div>
          <p>cartTotal</p>
        </div>

        <button type="submit">procced to payment</button>
      </form>
    </div>
  );
}

export default PlaceOrder;
