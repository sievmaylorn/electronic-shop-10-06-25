import React from 'react'

function HeroTwo() {
  return (
    <div>
          <div className='w-full h-[70vh] bg2-img'>
            <div className='container h-full px-4 lg:px-[128px] mx-auto flex items-center justify-end'>
                 <div className='w-full md:w-[60-%] md:h-[30vh] lg:w-[50%] lg:h-[50vh] bg-pink-500 p-10'>
                      <h1 className='text-2xl text-white md:text-5xl font-bold'>
                          <span>Get 5% Cash back on $200 </span>
                         
                      </h1>
                      <p className='text-sm md:text-2xl mt-10 text-white'>
                         Shopping is a bit of a relaxing hobby for me, which is sometimes troubling for the bank balance.
                      </p>
                     <button className='px-10 py-3 bg-white  duration-300 ease-in-out rounded-4xl cursor-pointer mt-5 text-2xl '>
                             Learn More
                     </button>
                  </div>                 

            </div>
       </div>
    </div>
  )
}

export default HeroTwo
