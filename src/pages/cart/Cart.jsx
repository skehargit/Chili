import React, { useContext, useEffect } from "react";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";
import { PiCurrencyInr } from "react-icons/pi";
import { RiDeleteBinLine } from "react-icons/ri";
function Cart() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  });
  const { foodList, cartItem, removeFromCart, getTotalCartAmount,addToCart } =
    useContext(StoreContext);
  const navigate = useNavigate();
  return (
    <div className="py-14">
      {foodList.map((item, index) => {
        if (cartItem[item.id] > 0) {
          return (
            <div
              key={index}
              className="border border-zinc-700 w-full h-[130px]  flex gap-5"
            >
              <div>
                <img src={item.image} alt="" className="h-full w-[90px]" />
              </div>
              <div className="flex flex-col justify-between">
                <p className="font-semibold">{item.name}</p>
                <div className="flex">
                  <p className="text-green-800 flex items-center font-semibold line-through">
                    <span>
                      <PiCurrencyInr />
                    </span>
                    {(item.price + 5) * cartItem[item.id]}
                  </p>
                  <p className="text-green-500 flex items-center font-semibold">
                    <span>
                      <PiCurrencyInr />
                    </span>
                    {item.price * cartItem[item.id]}
                  </p>
                </div>
                <div className="flex justify-between items-center ">
                  <p className="text-sm">
                    <span>Qty.</span>
                    {cartItem[item.id]}
                  </p>
                  <span onClick={()=>addToCart(item.id)} className="bg-green-900 px-2 flex items-center justify-center ">
                    +
                  </span>
                </div>
                {/* <p className='text-red-500'>{}</p> */}
                <p
                  className="flex items-center gap-1 border border-zinc-600 p-1"
                  onClick={() => removeFromCart(item.id)}
                >
                  <span>
                    <RiDeleteBinLine />
                  </span>{" "}
                  Remove
                </p>
              </div>
            </div>
          );
        }
      })}
      <div className="py-2">
        {/* <p>enter promo here</p> */}
        <div className="flex w-full "><input type="text" placeholder="promocode" className="w-[70%] py-2" />
        <button className="w-[30%] border">submit</button></div>
      </div>
      <div className=" w-full">
        <p className="font-semibold border-b border-zinc-600">Price Details</p>
        <div className="flex justify-between"><p>Price <span>{`( ${Object.keys(cartItem).length} item )`}</span></p><p>{getTotalCartAmount()+(5*Object.keys(cartItem).length)}</p></div>
        <div className="flex justify-between "><p>Discount</p><p className="text-green-500">{`-${(5*Object.keys(cartItem).length)}`}</p></div>
        <div className="flex justify-between "><p>Delivery Charges</p><p className="text-green-500">Free Delivery</p></div>
        <div className="flex justify-between border border-zinc-600">
        <p>total </p>
        <p>{getTotalCartAmount()}</p>
      </div>
      <button className="w-full flex items-center justify-center py-2 bg-green-900 font-semibold uppercase" onClick={() => navigate("/placeorder")}>
        place order
      </button>
      </div>
      
      
    </div>
  );
}

export default Cart;
