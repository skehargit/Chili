import React from 'react'
import Hero from './homePageComponents/Hero'
import Foodlist from './homePageComponents/Foodlist'
import HowTo from './homePageComponents/HowTo'

function Home() {
  return (
    <div>
        <Hero/>
        <Foodlist/>
        <HowTo/>
    </div>
  )
}

export default Home