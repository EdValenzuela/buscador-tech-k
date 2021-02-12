import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link to={"/movies"} className="mr-5 hover:text-gray-900 text-white">Listado Películas</Link>
        </nav>
    )
}

export default Navbar
