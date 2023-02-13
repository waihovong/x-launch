import React from 'react';
import  { Link } from 'react-router-dom';

//Navigation for whole site
function Navbar() {
    return (
        <nav className='container mx-auto w-full flex flex-wrap items-center text-white justify-between'>
            <div className="flex w-full py-9 px-5 sm:flex sm:flex-col xs:flex xs:flex-col">
                <div className='flex w-full lg:w-1/2 md:w-1/3 sm:w-full sm:text-center xs:text-center'>
                    <ul className='w-full text-3xl font-semibold xs:mb-1'>
                        <li>
                            <Link to="/">X LAUNCH</Link>
                        </li>
                    </ul>
                </div>
                <div className='flex w-full items-center '>
                    <ul className='flex justify-between w-full xs:grid xs:grid-cols-2 xs:justify-center'>
                        <li className='text-2xl font-semibold sm:text-base xs:text-base xs:text-start'>
                            <Link to="/Missions">MISSIONS</Link>
                        </li>
                        <li className='text-2xl font-semibold sm:text-base xs:text-base xs:text-end'>
                            <Link to='/rocket/falcon9'>FALCON 9 </Link>
                        </li>
                        <li className='text-2xl font-semibold sm:text-base xs:text-base xs:text-start'>
                            <Link to='/rocket/falconheavy'>FALCON HEAVY</Link>
                        </li>
                        <li className='text-2xl font-semibold sm:text-base xs:text-base xs:text-end'>
                            <Link to='/rocket/starship'>STARSHIP </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;