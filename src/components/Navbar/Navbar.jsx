import React, { useState } from 'react';
import Link from '../Link/Link';
import {Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const routes = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Contact", path: "/contact" },
    { id: 4, name: "Products", path: "/products" },
    { id: 5, name: "Product Details", path: "/products/:productId" }
  ];
  return (
    <>
        <nav className='bg-purple-400 px-4'>
        <div onClick={()=> setOpen(!open)} className='md:hidden'>
          <span>

            {open === true ? <XMarkIcon className="h-6 w-6 text-purple-600-500" /> : <Bars3Icon className="h-6 w-6 text-purple-600-500" />}
          
          </span>
        </div>
        <ul className={`md:flex absolute md:static duration-500 md:pt-4  font-semibold bg-purple-400 pl-4 pb-4 ${open ? 'top-6' : '-top-96'}`}>
          {routes.map(route => <Link key={route.id}
          route = {route}
          />)}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;