import React from 'react'
import Hero from './homePageComponents/Hero'
import Foodlist from './homePageComponents/Foodlist'
import HowTo from './homePageComponents/HowTo'

function Home() {
  return (
    <div className='overflow-x-hidden'>
        <Hero/>
        <Foodlist/>
        <HowTo/>
    </div>
  )
}

export default Home