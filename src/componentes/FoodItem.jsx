import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../context/StoreContext';
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";
import { PiCurrencyInr } from "react-icons/pi";
function FoodItem({id,name,description,category,price,image}) {
    // const [itmeCount, setItemCount] = useState(0);
    const {cartItem,addToCart,removeFromCart}=useContext(StoreContext);
    // console.log(cartItem)
  return (
    <div className="w-[150px] m-2">
              <div className="img-container">
                <img className='h-[200px] w-full' src={image} alt="" />
              </div>
              <div className="food-info flex flex-col justify-between">
                <p className='font-semibold text-sm'>{name}</p>
                {/* <p className='text-zinc-500 text-sm'>{description}</p> */}
                <div className='flex'><span className='text-red-300 line-through flex items-center '><PiCurrencyInr />{price-5}</span><span className='text-red-500 flex items-center'><span><PiCurrencyInr /></span>{price}</span></div>
                <div className='bg-red-500'>
                  {!cartItem[id] ? (
                    <div
                      className="flex items-center justify-center"
                      onClick={() => addToCart(id)}
                    ><FiPlus />Add to cart</div>
                  ) : (
                    <div className='flex '>
                      <div onClick={() => removeFromCart(id)} className="bg-red-500 w-full flex items-center justify-center"><FiMinus /></div>
                      <p className='px-2 bg-black'>{cartItem[id]}</p>
                      <div onClick={() => addToCart(id)} className="w-full bg-green-500 flex items-center justify-center"><FiPlus /></div>
                    </div>
                  )}
                </div>
              </div>
            </div>
  )
}

export default FoodItem