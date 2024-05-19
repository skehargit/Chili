import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom';

function Cart() {
  const { foodList,
    cartItem,
    removeFromCart,getTotalCartAmount}=useContext(StoreContext);
    const navigate=useNavigate();
  return (
    <div>
      <ul>
        <li>
          <p>items</p>
          <p>title</p>
          <p>price</p>
          <p>quantity</p>
          <p>total</p>
          <p>remove</p>
        </li>
      </ul>
      {foodList.map((item,index)=>{
        if(cartItem[item.id]>0){
          return (<div key={index}>
            <p>{item.name}</p>
            <p>{item.price}</p>
            <p>{cartItem[item.id]}</p>
            <p>{item.price*cartItem[item.id]}</p>
            <p onClick={()=>removeFromCart(item.id)}>x</p>
          </div>)
        }
      })}
      <div>
        <p>total </p>
        <p>{getTotalCartAmount()}</p>
      </div>
      <button onClick={()=>navigate('/placeorder')}>procced to check out</button>
      <div>cart promo</div>
      <div>
        <p>enter promo here</p>
        <input type="text" placeholder='promocode' />
        <button>submit</button>
      </div>
    </div>
  )
}

export default Cart