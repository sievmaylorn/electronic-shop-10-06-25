import React from 'react'
// import Cashcard from './components/BestDeal/Cashcard.png';
function CashCard() {
  return (
    
       <div className='w-full lg:h-[35vh] md:h-[100vh] bg-pink-300'>
            <div className='container h-full px-4 lg:px-[128px] mx-auto
                            flex items-center'>
                 <div className='w-full md:w-[50%] lg:w-[45%]'>
                      <h1 className='text-4xl md:text-6xl font-bold'>
                          <span >Get 5% Cash back</span>
                          
                      </h1>
                      <p className='text-xl md:text-2xl mt-4 text-white'>
                            on Shopcart.com
                      </p>
                      <button className=' md:px-8 text-white py-3 px-5 bg-pink-700 rounded-4xl cursor-pointer mt-5 text-2xl hover:bg-pink-500 duration-400 ease-in-out '>
                          Learn More
                      </button>
                  </div>   

                  <div className='w-full md:w-[60%] lg:w-[45%]'> 

                    
                   </div>               
                  

            </div>
       </div>
   
  )
}

export default CashCard;
