import React from 'react'
import Hero from '../components/Hero'
import ShopCategories from '../components/ShopCategories'
import BestDealProduct from '../components/BestDealProduct'
import GetDiscount from '../components/GetDiscount'
import PopularProduct from '../components/PopularProduct'
function Home() {
  return (
    <div>
       <Hero/>
       <ShopCategories/>
       <BestDealProduct/>

       <GetDiscount/>
       <PopularProduct/>  {/* the same code with BestDealProduct file   */}
    </div>
  )
}

export default Home
