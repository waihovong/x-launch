import React from 'react';
import  { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div className="flex flex-1 justify-center text-xl text-white font-semibold">
            <ul className='flex flex-auto pr-96 text-3xl'>
                <li>
                    <Link to="/" className="">X LAUNCH</Link>
                </li>
            </ul>
            <ul className='flex space-x-64 pr-48'>

                <li className='flex-auto'>
                    <Link to="/missions">MISSIONS</Link>
                </li>
                <li className='flex-auto'>
                    <Link to='/rocket/falcon9'>FALCON 9 </Link>
                </li>
                <li className='flex-auto'>
                    <Link to='/rocket/falconheavy'>FALCON HEAVY</Link>
                </li>
                <li className='flex-auto'>
                    <Link to='/rocket/starship'>STARSHIP </Link>
                </li>
            </ul>
        </div>
    );
}