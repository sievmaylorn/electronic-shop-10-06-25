import React from 'react'

function Hero() {
  return (
    
       <div className='w-full h-[70vh] bg-img '>
            <div className='container h-full px-4 lg:px-[128px] mx-auto
                            flex items-center'>
                 <div className='w-full md:w-[60-%] lg:w-[38%]'>
                      <h1 className='text-4xl text-white md:text-6xl font-bold'>
                          <span>Shopping and </span>
                          <span  className='text-pink-600 text-6xl'>Electronic Store.</span>
                      </h1>
                      <p className='text-xl md:text-2xl mt-10 text-white'>
                        Lorem ipsum dolor sit amet consectetur, 
                        adipisicing elit. Consequatur dolore
                        , amet quo totam quod fugiat vel! Delectus
                         minus aspernatur nihil ratione enim harum.
                          Fugiat in omnis voluptate ipsum amet quae?
                      </p>
                      <button className='px-10 text-white py-3 bg-pink-700 rounded-4xl cursor-pointer 
                                      mt-5 text-2xl hover:bg-pink-500 duration-400 ease-in-out '>
                          Learn More
                      </button>
                  </div>                 

            </div>
       </div>
   
  )
}

export default Hero
