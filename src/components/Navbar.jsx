import React, { useState } from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { FaCartShopping } from 'react-icons/fa6'
import { IoIosSearch } from 'react-icons/io'
import { IoClose, IoMenu } from 'react-icons/io5'
import { NavLink } from 'react-router-dom'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Home', to: '/' },
    { name: 'Contact', to: '/contact' },
    { name: 'Service', to: '/service' },
    { name: 'About', to: '/about' },
  ];

  return (
    <div className='container px-2 lg:px-[70px] mx-auto py-2 flex justify-between'>
        {/* logo & menu part*/}
        <div className='flex items-center justify-between w-[50%]'>

          {/* logo */}
          <div className='flex items-center'>
            <div className='w-[60px] h-[60px] '>
              <img src="logo.png" alt="" />
            </div>
            <p className='text-3xl font-bold ms-1 md:text-xl'>KH-SHOP</p>
          </div>

          {/* Menu */}
          <ul className='hidden lg:flex'>
            {
              menuItems.map((item,index)=>(
                <li key={index} className='mx-5 text-xl hover:text-pink-700 hover:scale-110 duration-300 ease-in-out'>
                  <NavLink to={item.to}> {item.name} </NavLink>
                </li>
              ))
            }
          </ul>
        </div>

        {/* search & acc part*/}
        <div className='hidden lg:flex items-center justify-between  lg:w-[50%] ps-10'>

            {/* form-search */}
            <form action="" className='px-5'>
              <div className='flex items-center  border border-slate-400 p-2 rounded-lg'>
                <input type="text" name="" id="" placeholder='Search...' className='outline-0' />
                <button>
                  <IoIosSearch className='text-xl cursor-pointer'/>
                  
                </button>
              </div>
            </form>

            {/* user account */}
            <div className='flex'>
                <NavLink className="flex items-center mx-3">
                  <FaUserCircle className='me-2 text-3xl'/>
                  <span className='text-xl'>Account</span>
                </NavLink>
                <NavLink className="flex items-center mx-3">
                  <FaCartShopping className='me-2 text-3xl'/>
                  <span className='text-xl'>Cart</span>
                </NavLink> 
            </div>
        </div>

        <button className='block lg:hidden' onClick={()=>setMenuOpen(!menuOpen)}>
            {menuOpen ? <IoClose className='text-3xl'/> :  <IoMenu className='text-3xl'/>}
        </button>



        <div className={` ${menuOpen ? 'opacity-100 translate-y-16 pointer-events-auto' : 'opacity-0 -translate-y-14 pointer-events-none' }
         w-[90%] lg:hidden
         absolute duration-200
         left-1/2 transform -translate-x-1/2 p-4 
         border rounded-box
         pb-10
         bg-white
         `}>

          <ul>
            {
              menuItems.map((item,index)=>(
                <li key={index} className='py-2 border-b-1 mx-5 text-xl hover:text-pink-700 hover:scale-110 duration-300 ease-in-out'>
                  <NavLink to={item.to}> {item.name} </NavLink>
                </li>
              ))
            }
          </ul>
        </div>
    </div>
  )
}
export default Navbar;