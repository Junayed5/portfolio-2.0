import React from 'react';

const AboutMe = () => {
    return (
        <section id='about' className="bg-gray-700 text-white py-16">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="md:col-span-1 px-12 pb-8 md:pb-0">
                        <div className="h-full md:h-[500px] w-full md:w-[500px]">
                            <img className='w-fit' src="my-image.png" alt="" />
                        </div>

                    </div>
                    <div className="md:col-span-1 px-10 md:px-4">
                        <h1 className="text-3xl md:text-5xl font-bold mb-2 md:mb-4">About <span className='text-cyan-300'>Me</span></h1>
                        <h3 className='text-2xl md:text-3xl font-bold mb-2 md:mb-4'>
                            Frontend Developer!
                        </h3>

                        <p className='mb-4 font-medium '>Hello! I am Junayed, a passionate Frontend Developer. My core skill is based on Javascript. I developed more web application. I create more application Javascript popular library React Js. I love to make the web more open to the world. I am non CSE person but I learn it on my passionate place. I am available for any kind of job opportunity that suits my interests.</p>
                        
                        <button className="h-12 w-36 bg-cyan-300 rounded-full shadow-sm shadow-cyan-300 hover:shadow-none text-slate-800 font-bold">
                            <a href="#" className=''>Read More</a>
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutMe;