import React, { useContext, useState } from "react";
import { StoreContext } from "../../../context/StoreContext";
// import { foodList } from "../../../assets/data";
import FoodItem from "../../../componentes/FoodItem";
import { FaClover } from "react-icons/fa6";
import { LuClover } from "react-icons/lu";
function Foodlist() {
  const { foodList } = useContext(StoreContext);

  return (
    <div className="food-display flex flex-col items-center bg-zinc-950 py-5">
      <h2 className="satisfy-regular text-2xl text-zinc-700"><p className="border-b border-zinc-700 p-2 ">Top Dishes near you</p></h2>
      <div className="">
        <h2 className="satisfy-regular text-2xl text-zinc-700 text-center p-2"><FaClover /> Veg</h2>
        <div className="grid grid-cols-6 items-center justify-center max-[1024px]:grid-cols-3 py-10">
          {foodList
            .filter((el) => el.category == "veg")
            .map((item, index) => {
              return index < 6 ? (
                <FoodItem
                  key={index}
                  id={item._id}
                  name={item.name}
                  description={item.description}
                  category={item.category}
                  price={item.price}
                  image={item.image}
                />
              ) : (
                <></>
              );
            })}
        </div>
      </div>
      <div className="">
        <h2 className="satisfy-regular text-2xl text-zinc-700 text-center p-2"><LuClover />NonVeg</h2>
        <div className="grid grid-cols-6 items-center justify-center max-[1024px]:grid-cols-3 py-10">
          {foodList
            .filter((el) => el.category == "nonveg")
            .map((item, index) => {
              return index < 6 ? (
                <FoodItem
                  key={index}
                  id={item._id}
                  name={item.name}
                  description={item.description}
                  category={item.category}
                  price={item.price}
                  image={item.image}
                />
              ) : (
                <></>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Foodlist;
