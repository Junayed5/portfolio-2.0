import React from 'react';

const Hero = () => {
    return (
        <section className="bg-gray-900 text-white py-16">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="md:col-span-1 px-4">
                        <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
                        <p className="text-xl mb-6">
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