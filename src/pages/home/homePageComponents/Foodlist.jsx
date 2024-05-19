import React, { useContext, useState } from "react";
import { StoreContext } from "../../../context/StoreContext";
import { foodList } from "../../../assets/data";
import FoodItem from "../../../componentes/FoodItem";

function Foodlist() {
  const { Foodlist } = useContext(StoreContext);


  return (
    <div className="food-display">
      <h2>Top Dishes newr you</h2>
      <div>
        {foodList.map((item, index) => {
          return (
            <FoodItem key={index} id={item.id} name={item.name } description={item.description} category={item.category} price={item.price}/>
            
          );
        })}
      </div>
    </div>
  );
}

export default Foodlist;
