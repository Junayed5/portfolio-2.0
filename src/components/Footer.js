import React from 'react';
import { BsArrowUp } from 'react-icons/bs';

const Footer = () => {
    const topFunction = () => {
       document.body.scrollTop = 0;
       document.documentElement.scrollTop = 0;
    }
    return (
        <div className='bg-gray-800 h-20 px-8 md:px-16 text-white flex items-center justify-between'>
            <h3 className='text-sm md:text-lg font-semibold'>Copyright &copy; By Junayed <span className='hidden md:block'>| All Right Reserved</span></h3>
            <button onClick={() => topFunction()} className='h-10 w-8 bg-cyan-300 shadow-sm shadow-cyan-200 rounded-md'>
                <BsArrowUp className='mx-auto text-gray-900'/>
            </button>
        </div>
    );
};

export default Footer;