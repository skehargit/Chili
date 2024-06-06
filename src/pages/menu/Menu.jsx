import React, { useContext, useEffect } from 'react'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../../componentes/FoodItem'

const Menu = () => {
    useEffect(()=>{
      window.scrollTo({top:0})
    })
    const {foodList}=useContext(StoreContext)
  return (
    <div className='py-14 w-full min-h-screen'>
        
        <div className='flex flex-wrap justify-center'>
        {foodList.map((item, index) => {
          return (
            <FoodItem  key={index} id={item._id} name={item.name } description={item.description} category={item.category} price={item.price} image={item.image}/>
            
          );
        })}
        </div>
    </div>
  )
}

export default Menu