import React from 'react';

const Skills = () => {
    return (
        <div className="bg-gray-800 text-white py-16">
            <div className="container mx-auto">
                <h3 className='text-5xl font-bold text-center pb-10'>My <span className='text-cyan-300'>Skills</span></h3>

                <div>
                    <div>
                        <div className='w-96 flex justify-between px-1 py-2'>
                            <p className='font-semibold'>HTML</p>
                            <p className='font-semibold'>90%</p>
                        </div>
                        <div className='h-3 w-96 bg-gray-700 rounded-full relative'>
                            <span className='absolute bg-cyan-300 h-3 w-80 rounded-full shadow-sm shadow-cyan-300'></span>
                        </div>
                    </div>
                    <div>
                        <div className='w-96 flex justify-between px-1 pb-2 pt-5'>
                            <p className='font-semibold'>CSS</p>
                            <p className='font-semibold'>75%</p>
                        </div>
                        <div className='h-3 w-96 bg-gray-700 rounded-full relative'>
                            <span className='absolute bg-cyan-300 h-3 w-72 rounded-full shadow-sm shadow-cyan-300'></span>
                        </div>
                    </div>
                    <div>
                        <div className='w-96 flex justify-between px-1 pb-2 pt-5'>
                            <p className='font-semibold'>Github</p>
                            <p className='font-semibold'>45%</p>
                        </div>
                        <div className='h-3 w-96 bg-gray-700 rounded-full relative'>
                            <span className='absolute bg-cyan-300 h-3 w-48 rounded-full shadow-sm shadow-cyan-300'></span>
                        </div>
                    </div>
                    <div>
                        <div className='w-96 flex justify-between px-1 pb-2 pt-5'>
                            <p className='font-semibold'>JavaScript</p>
                            <p className='font-semibold'>50%</p>
                        </div>
                        <div className='h-3 w-96 bg-gray-700 rounded-full relative'>
                            <span className='absolute bg-cyan-300 h-3 w-52 rounded-full shadow-sm shadow-cyan-300'></span>
                        </div>
                    </div>
                    <div>
                        <div className='w-96 flex justify-between px-1 pb-2 pt-5'>
                            <p className='font-semibold'>React JS</p>
                            <p className='font-semibold'>40%</p>
                        </div>
                        <div className='h-3 w-96 bg-gray-700 rounded-full relative'>
                            <span className='absolute bg-cyan-300 h-3 w-36 rounded-full shadow-sm shadow-cyan-300'></span>
                        </div>
                    </div>
                    <div>
                        <div className='w-96 flex justify-between px-1 pb-2 pt-5'>
                            <p className='font-semibold'>Express JS</p>
                            <p className='font-semibold'>25%</p>
                        </div>
                        <div className='h-3 w-96 bg-gray-700 rounded-full relative'>
                            <span className='absolute bg-cyan-300 h-3 w-24 rounded-full shadow-sm shadow-cyan-300'></span>
                        </div>
                    </div>
                    <div>
                        <div className='w-96 flex justify-between px-1 pb-2 pt-5'>
                            <p className='font-semibold'>MongoDB</p>
                            <p className='font-semibold'>25%</p>
                        </div>
                        <div className='h-3 w-96 bg-gray-700 rounded-full relative'>
                            <span className='absolute bg-cyan-300 h-3 w-24 rounded-full shadow-sm shadow-cyan-300'></span>
                        </div>
                    </div>
                </div>
                {/* <div className='py-10'>
                    <div className='h-20 w-20 border-8 border-cyan-300 rounded-full border-'>

                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Skills;