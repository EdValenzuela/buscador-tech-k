import React from 'react'
import Navbar from './Navbar'
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <header className="body-font bg-blue-500">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link to={"/"} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-2xl text-white uppercase">Tech <span className="text-2xl font-bold text-red-500 uppercase">- k</span></span>
          </Link>
          <Navbar />
        </div>
      </header>
    )
}

export default Header
