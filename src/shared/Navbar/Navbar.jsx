import React from 'react';
import { FaBoxes } from 'react-icons/fa';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-white text-black shadow-sm">
  <div className="navbar-start">
    
    <a className="btn btn-ghost text-xl"><FaBoxes size={20} />
Floka</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal lg:gap-40 px-1">
      <li><a>Home</a></li>
      <li>
       
          <summary>Pages</summary>
         
        
      </li>
      <li><a>Portfolio</a></li>
      <li><a>BLog</a></li>
      
    </ul>
  </div>
  <div className="navbar-end">
  <a>habibaislammim@gmail.com</a>
    {/* <a className="btn">Button</a> */}
  </div>
   <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden mr-6">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Home</a></li>
        <li>
          <a>Pages</a>
          
        </li>
        <li><a>Portfolio</a></li>
        <li><a>Blog</a></li>
       
      </ul>
    </div>
</div>
        </div>
    );
};

export default Navbar;