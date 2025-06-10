import React, { useState } from 'react';
import { FcSearch } from 'react-icons/fc';
import { NavLink } from 'react-router-dom';
import { FaShopify, FaUserCircle } from "react-icons/fa";
import { IoClose, IoMenu } from 'react-icons/io5';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='container px-2 lg:px-[128px] mx-auto py-2 relative'>
      {/* Navbar top section */}
      <div className='flex items-center justify-between'>

        {/* Logo and desktop menu */}
        <div className='flex items-center w-1/2'>
          {/* Logo */}
          <div className='flex items-center'>
            <div className='w-[70px] h-[70px]'>
              <img src="logo.png" alt="logo" />
            </div>
            <p className='text-3xl font-bold ml-1'>Shop</p>
          </div>

          {/* Desktop menu */}
          <ul className='hidden lg:flex ml-5'>
            <li className='mx-3 text-xl hover:text-blue-400 hover:scale-125 duration-300 ease-in-out'>
              <NavLink to="/">Home</NavLink>
            </li>
            <li className='mx-3 text-xl hover:text-blue-400 hover:scale-125 duration-300 ease-in-out'>
              <NavLink to="/about">About</NavLink>
            </li>
            <li className='mx-3 text-xl hover:text-blue-400 hover:scale-125 duration-300 ease-in-out'>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li className='mx-3 text-xl hover:text-blue-400 hover:scale-125 duration-300 ease-in-out'>
              <NavLink to="/service">Service</NavLink>
            </li>
          </ul>
        </div>

        {/* Desktop search and account */}
        <div className='hidden lg:flex items-center justify-between lg:w-[50%] ps-10'>
          {/* Search bar */}
          <form action="" className='px-5'>
            <div className='flex items-center border border-slate-400 p-2 rounded-lg'>
              <input type="text" className='outline-0' placeholder='Search...' />
              <button type="submit">
                <FcSearch className='text-xl cursor-pointer' />
              </button>
            </div>
          </form>

          {/* Account and Cart */}
          <div className='hiiden lg:flex items-center justify-between lg-w-[50%]'>
              <NavLink className="flex items-center mx-3">
                <FaUserCircle className="me-2 text-3xl" />
                <span className='text-xl'>Account</span>
              </NavLink>
              
              <NavLink className="flex items-center mx-3">
                <FaShopify className="me-2 text-3xl" />
              <span className='text-xl'>Cart</span>
            </NavLink>
          </div>
        </div>

        <button className='block lg:hidden' onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ?
             <IoClose className='text-3xl' /> : <IoMenu className='text-3xl' />}
        </button>
      </div>

      {menuOpen && (
<div
  className={`lg:hidden mt-4 p-4 border rounded-md bg-white shadow-md transition-all duration-300 ease-in-out transform ${
    menuOpen ? 'opacity-100 translate-y-0' : 'opacity-100 -translate-y-14 scale-95 pointer-events-none'
  }`}
>
  {/* Mobile nav items */}
  <ul className='mb-4'>
    <li className='my-2 text-xl relative group'>
        <NavLink to="/" onClick={() => setMenuOpen(false)}
                 className="hover:text-blue-500 duration-300">
                 Home page
                 <span className="absolute left-0 -bottom-1 w-0 h-[2px]
                               bg-blue-400 transition-all duration-300
                                group-hover:w-full"></span>
        </NavLink>
    </li>

    <li className='my-2 text-xl relative group'>
        <NavLink to="/about" onClick={() => setMenuOpen(false)}
                 className="hover:text-blue-500 duration-300">
                 About
                 <span className="absolute left-0 -bottom-1 w-0 h-[2px]
                               bg-blue-400 transition-all duration-300
                                group-hover:w-full"></span>
        </NavLink>
    </li>

     <li className='my-2 text-xl relative group'>
        <NavLink to="service" onClick={() => setMenuOpen(false)}
                 className="hover:text-blue-500 duration-300">
                <p>Service</p>
                 <span className="absolute left-0 -bottom-1 w-0 h-[2px]
                               bg-blue-400 transition-all duration-300
                                group-hover:w-full"></span>
        </NavLink>
    </li>

    <li className='my-2 text-xl relative group'>
        <NavLink to="/" onClick={() => setMenuOpen(false)}
                 className="hover:text-blue-500 duration-300">
                <p></p>
                 <span className="absolute left-0 -bottom-1 w-0 h-[2px]
                               bg-blue-400 transition-all duration-300
                                group-hover:w-full"></span>
        </NavLink>
    </li>

    <li className='my-2 text-xl relative group'>
        <NavLink to="/" onClick={() => setMenuOpen(false)}
                 className="hover:text-blue-500 duration-300">
                <p>Contact</p>
                 <span className="absolute left-0 -bottom-1 w-0 h-[2px]
                               bg-blue-400 transition-all duration-300
                                group-hover:w-full"></span>
        </NavLink>
    </li>
    
  </ul>
</div>
)}
    </div>
  );
}

export default Navbar;
