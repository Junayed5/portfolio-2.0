import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaFacebookF } from "react-icons/fa";
import { BiLogoLinkedin } from "react-icons/bi";
import { AiFillInstagram } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import './hero.css'

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

                        <div className='flex gap-4 mb-5'>
                            <a href="https://www.facebook.com/profile.php?id=100042861825143" target='_blank'>
                                <FaFacebookF className=' text-cyan-300 h-fit w-fit border-2 px-2 py-2 rounded-full border-cyan-300 hover:bg-cyan-300 hover:text-black hover:shadow-cyan-300 hover:shadow-sm hover:transition hover:duration-500 hover:ease-in-out' />
                            </a>
                            <a href="https://www.linkedin.com/in/junayedmd/" target='_blank'>

                                <BiLogoLinkedin className=' text-cyan-300 h-fit w-fit border-2 px-2 py-2 rounded-full border-cyan-300 hover:bg-cyan-300 hover:text-black hover:shadow-cyan-300 hover:shadow hover:transition hover:duration-500 hover:ease-in-out ' />
                            </a>
                            <a href="https://www.instagram.com/junayed740/" target='_blank'>

                                <AiFillInstagram className=' text-cyan-300 h-fit w-fit border-2 px-2 py-2 rounded-full border-cyan-300 hover:bg-cyan-300 hover:text-black hover:shadow-cyan-300 hover:shadow hover:transition hover:duration-500 hover:ease-in-out ' />
                            </a>
                            <a href="https://github.com/Junayed5" target='_blank'>

                                <BsGithub className=' text-cyan-300 h-fit w-fit border-2 px-2 py-2 rounded-full border-cyan-300 hover:bg-cyan-300 hover:text-black hover:shadow-cyan-300 hover:shadow hover:transition hover:duration-500 hover:ease-in-out ' />
                            </a>
                        </div>

                        {/* <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                            View Projects
                        </button> */}
                        <button className="h-12 w-44 bg-cyan-300 rounded-full shadow-sm shadow-cyan-300 hover:shadow-none text-slate-800 font-bold">
                            <a href="#" className=''>Download Resume</a>
                        </button>
                    </div>
                    <div className="md:col-span-1 px-4">
                        {/* <img
                            src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60"
                            alt="Portfolio Image"
                            className="w-full rounded"
                        /> */}
                        <div className="h-48 w-48">
                            <img className='w-fit' src="me.jpg" alt="" />
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;