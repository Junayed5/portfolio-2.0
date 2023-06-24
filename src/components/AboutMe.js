import React from 'react';

const AboutMe = () => {
    return (
        <section className="bg-gray-700 text-white py-16">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="md:col-span-1 px-12">
                        {/* <img
                            src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60"
                            alt="Portfolio Image"
                            className="w-full rounded"
                        /> */}
                        <div className="h-48 w-48">
                            <img className='w-fit' src="me.jpg" alt="" />
                        </div>

                    </div>
                    <div className="md:col-span-1 px-4">
                        <h1 className="text-5xl font-bold mb-4">About <span className='text-cyan-300'>Me</span></h1>
                        <h3 className='text-3xl font-bold mb-4'>
                            Frontend Developer
                        </h3>

                        <p className='mb-4 font-semibold'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam inventore eum veritatis sit corporis nulla dolore suscipit quas. Laborum, repellendus libero vero sit esse enim, ullam consequatur explicabo pariatur dignissimos optio voluptatum est architecto? Omnis ducimus exercitationem laboriosam repellat. Delectus ex velit neque modi voluptate, perferendis voluptatem sunt ut ipsam.</p>
                        
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