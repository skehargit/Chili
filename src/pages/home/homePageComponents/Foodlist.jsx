import React, { useContext, useState } from "react";
import { StoreContext } from "../../../context/StoreContext";
// import { foodList } from "../../../assets/data";
import FoodItem from "../../../componentes/FoodItem";

function Foodlist() {
  const { foodList } = useContext(StoreContext);


  return (
    <div className="food-display flex flex-col items-center bg-zinc-950 py-5">
      <h2 className="satisfy-regular text-2xl">Top Dishes newr you</h2>
      <div className="grid grid-cols-6 items-center justify-center max-[1024px]:grid-cols-3 py-10">
        {foodList.map((item, index) => {
          return (
            <FoodItem  key={index} id={item._id} name={item.name } description={item.description} category={item.category} price={item.price} image={item.image}/>
            
          );
        })}
      </div>
    </div>
  );
}

export default Foodlist;
