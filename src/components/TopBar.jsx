import React from 'react'

function TopBar() {
  return (
    <div className="bg-gray-500 py-1">
        <div className="container px-2 lg:px-[128px] mx-auto text-white flex justify-between">
          <p>+855 102 328 530</p>
          <p className="hidden lg:block">
            Get 50% Off on Selected Items &nbsp; Shop now
          </p>
          <div>
            <select className="border-0 outline-0 pe-4 bg-transparent text-white">
              <option value="" className="text-black">EN</option>
              <option value="" className="text-black">KH</option>
              <option value="" className='text-black'>SP</option>
            </select>
            <select className="border-0 outline-0 pe-4 bg-transparent text-white">
              <option value="" className="text-black">Cambodia</option>
              <option value="" className="text-black">Spain</option>
              <option value="" className='text-black'>Canada</option>
            </select>
          </div>
        </div>
      </div>
  )
}

export default TopBar
