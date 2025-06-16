import React from 'react'
import Hero from '../components/Hero'
import ShopCategories from '../components/ShopCategories'
import BestDealProduct from '../components/BestDealProduct'
import GetDiscount from '../components/GetDiscount'
import PopularProduct from '../components/PopularProduct'
import HeroTwo from '../components/HeroTwo'
import BestDeal from '../components/BestDeal/BestDeal'
import CashCard from '../components/BestDeal/CashCard'
import TrandingProducts from '../components/BestDeal/TrandingProducts'
// import Gadgets from '../components/BestDeal/Gadgets'
function Home() {
  return (
    <div>
       <Hero/>
       <ShopCategories/>
       <BestDealProduct/>

       <GetDiscount/>
       <PopularProduct/>  {/* the same code with BestDealProduct file   */}

       <HeroTwo/>

       <BestDeal/>

       <CashCard/>

      <TrandingProducts/>
       {/* <Gadgets/> */}
       
    </div>
  )
}

export default Home
