import React from 'react'

function GetDiscount() {
  return (
    <div className='w-full mt-4 lg:mt-24 '>
        <div className='container px-4 lg:px-[70px] mx-auto'>
            <h1 className='text-3xl font-bold mb-5'>Get Up to 50% off</h1>

             <div className='flex flex-wrap justify-between'>
                <div className='my-3 sm:w-[48%] lg:w-[24%] bg-blue-200 rounded-xl overflow-hidden'>
                    <div className='p-8'>
                        <p className='text-3xl font-bold mb-3'>Save</p>
                        <p className='text-5xl font-bold text-blue-400'><sup>$</sup>500.99</p>
                        <p className='text-xl mt-3'>Explore Our Furiture & Home Furnishing Range</p>      
                    </div>
                    <div className='w-full h-[200px] overflow-hidden'>
                        <img src="https://www.digitaltrends.com/wp-content/uploads/2021/11/apple-ipad-pro-2021-2-720x720-copy.jpg?p=1" alt="No Image" className='w-full h-full object-cover bg-green-500 hover:scale-105 duration-100'  />
                    </div>
                </div>

                 <div className='my-3 sm:w-[48%] lg:w-[24%] bg-pink-200 rounded-xl overflow-hidden'>
                    <div className='p-8'>
                        <p className='text-3xl font-bold mb-3'>Save</p>
                        <p className='text-5xl font-bold text-pink-400'><sup>$</sup>2200</p>
                        <p className='text-xl mt-3'>Explore Our Furiture & Home Furnishing Range</p>      
                    </div>
                    <div className='w-full h-[200px] overflow-hidden'>
                        <img src="https://soyacincau.com/wp-content/uploads/2021/12/211210-msi-prestige-14-rose-pink-4.jpg" alt="No Image" className='w-full h-full object-cover bg-green-500 hover:scale-105 duration-100' />
                    </div>
                </div>

                 <div className='my-3 sm:w-[48%] lg:w-[24%] bg-green-200 rounded-xl overflow-hidden'>
                    <div className='p-8'>
                        <p className='text-3xl font-bold mb-3'>Save</p>
                        <p className='text-5xl font-bold text-green-400'><sup>$</sup>59</p>
                        <p className='text-xl mt-3'>Explore Our Furiture & Home Furnishing Range</p>      
                    </div>
                    <div className='w-full h-[200px] overflow-hidden'>
                        <img src="https://cdn.thewirecutter.com/wp-content/media/2023/07/bluetoothheadphones-2048px-0876.jpg" alt="No Image" className='w-full h-full object-cover bg-green-500 hover:scale-105 duration-100'  />
                    </div>
                </div>

                 <div className='my-3 sm:w-[48%] lg:w-[24%] bg-yellow-200 rounded-xl overflow-hidden'>
                    <div className='p-8'>
                        <p className='text-3xl font-bold mb-3'>Save</p>
                        <p className='text-5xl font-bold text-yellow-400'><sup>$</sup>1390</p>
                        <p className='text-xl mt-3 text-yellow-800'>Explore Our Furiture & Home Furnishing Range</p>      
                    </div>
                    <div className='w-full h-[200px] overflow-hidden'>
                        <img src="https://cdn.thewirecutter.com/wp-content/media/2024/06/android-phone-2048px-0967.jpg" alt="No Image" className='w-full h-full object-cover bg-green-500 hover:scale-105 duration-100'  />
                    </div>
                </div>

                
             </div>

             
        </div>
       
    </div>
  )
}

export default GetDiscount
