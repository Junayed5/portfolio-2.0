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
                <div className="flex flex-col-reverse md:flex-row">
                    <div className="md:col-span-1 px-9 md:px-12">
                        <h3 className='text-xl md:text-3xl font-bold mb-2 md:mb-4'>Hello, It's Me</h3>
                        <h1 className="text-3xl md:text-5xl font-bold mb-2 md:mb-4">Md Junayed</h1>
                        <h3 className='text-xl md:text-3xl font-bold mb-2 md:mb-4'>
                            And I'm a <span></span>
                            <TypeAnimation
                                sequence={[
                                    'Web developer',
                                    500,
                                    "Frontend Developer",
                                    500,
                                    "Programmer",
                                    1000,
                                ]}
                                className='text-cyan-300'
                                repeat={Infinity}
                            />
                        </h3>
                        <p className="text-base font-semibold mb-6">
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
                        <button className="h-12 w-44 bg-cyan-300 rounded-full shadow-sm shadow-cyan-300 hover:shadow-none text-slate-800 font-bold">
                            <a target='_blank' href="https://drive.google.com/file/d/1TBtURboG22hdCB9taExejXlQ7AWNBfsY/view?usp=drive_link" className=''>Download Resume</a>
                        </button>
                    </div>
                    <div className="md:col-span-1 px-4 pb-10 md:pb-0">
                        <div className="h-full md:h-[500px] w-full md:w-[500px]">
                            <img className='w-fit' src="my-image.png" alt="" />
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;