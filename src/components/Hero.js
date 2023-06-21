import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
    return (
        <section className="bg-gray-800 text-white py-16">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="md:col-span-1 px-12">
                        <h3 className='text-3xl font-bold mb-4'>Hello, It's Me</h3>
                        <h1 className="text-5xl font-bold mb-4">Md Junayed</h1>
                        <h3 className='text-3xl font-bold mb-4'>
                            And I'm a <span></span>
                            <TypeAnimation
                            sequence={[
                                'Web developer',
                                500,
                                "Frontend Developer",
                                1000,
                            ]}
                            className='text-cyan-300'
                            repeat={Infinity}
                            />
                        </h3>
                        <p className="text-lg font-semibold mb-6">
                            I'm a passionate web developer with expertise in front-end
                            development. Check out my projects and get in touch!
                        </p>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                            View Projects
                        </button>
                    </div>
                    <div className="md:col-span-1 px-4">
                        <img
                            src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60"
                            alt="Portfolio Image"
                            className="w-full rounded"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;