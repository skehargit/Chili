import React, { useContext, useState } from 'react'
import { StoreContext } from '../context/StoreContext';

function FoodItem({id,name,description,category,price}) {
    // const [itmeCount, setItemCount] = useState(0);
    const {cartItem,addToCart,removeFromCart}=useContext(StoreContext);
    // console.log(cartItem)
  return (
    <div className="border">
              <div className="img-container">
                <img src="" alt="" />
              </div>
              <div className="food-info">
                <p>{name}</p>
                <p>{description}</p>
                <p>{price}</p>
                <div>
                  {!cartItem[id] ? (
                    <img
                      className="border h-[10px] w-[10px]"
                      onClick={() => addToCart(id)}
                    ></img>
                  ) : (
                    <div>
                      <img onClick={() => removeFromCart(id)} className="border border-red-500 h-[10px] w-[10px]"></img>
                      <p>{cartItem[id]}</p>
                      <img onClick={() => addToCart(id)} className="border border-green-500 h-[10px] w-[10px]"></img>
                    </div>
                  )}
                </div>
              </div>
            </div>
  )
}

export default FoodItem