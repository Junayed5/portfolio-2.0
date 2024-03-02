import React from 'react';
import { BiCodeAlt } from 'react-icons/bi';

const Services = () => {
    return (
        <div className="bg-gray-800 text-white py-16">
            <div className="container mx-auto">
                <h3 className='text-5xl font-bold text-center pb-10'>My <span className='text-cyan-300'>Services</span></h3>

                <div className='grid grid-cols-3 '>
                    <div className='h-96 w-80 bg-gray-700 rounded-3xl px-5 py-8'>
                        <BiCodeAlt className='text-cyan-300 font-bold text-5xl mx-auto'/>
                        <h3 className='text-center text-2xl font-bold py-3'>Web Development</h3>

                        <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat vero eius voluptatum officia possimus distinctio repudiandae, quo sed aliquid nesciunt quidem nostrum! Veritatis maiores cupiditate asperiores </p>

                        <button className="h-9 w-36 bg-cyan-300 rounded-full shadow-sm shadow-cyan-300 hover:shadow-none text-slate-800 font-bold my-6 ml-14">
                            <a href="#" className=''>Read More</a>
                        </button>
                    </div>
                    <div className='h-96 w-80 bg-gray-700 rounded-3xl px-5 py-8'>
                        <BiCodeAlt className='text-cyan-300 font-bold text-5xl mx-auto'/>
                        <h3 className='text-center text-2xl font-bold py-3'>Frontend development</h3>

                        <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat vero eius voluptatum officia possimus distinctio repudiandae, quo sed aliquid nesciunt quidem nostrum! Veritatis maiores cupiditate asperiores </p>

                        <button className="h-9 w-36 bg-cyan-300 rounded-full shadow-sm shadow-cyan-300 hover:shadow-none text-slate-800 font-bold my-6 ml-14">
                            <a href="#" className=''>Read More</a>
                        </button>
                    </div>
                    <div className='h-96 w-80 bg-gray-700 rounded-3xl px-5 py-8'>
                        <BiCodeAlt className='text-cyan-300 font-bold text-5xl mx-auto'/>
                        <h3 className='text-center text-2xl font-bold py-3'>Project base</h3>

                        <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat vero eius voluptatum officia possimus distinctio repudiandae, quo sed aliquid nesciunt quidem nostrum! Veritatis maiores cupiditate asperiores </p>

                        <button className="h-9 w-36 bg-cyan-300 rounded-full shadow-sm shadow-cyan-300 hover:shadow-none text-slate-800 font-bold my-6 ml-14">
                            <a href="#" className=''>Read More</a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;