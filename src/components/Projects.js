import React from 'react';
import '../App.css'
import { HiOutlineExternalLink } from 'react-icons/hi'

const Projects = () => {

    const myProjects = [
        {
            name: "web design",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, fugit.",
            liveLink: "",
            gitLink: ""
        },
        {
            name: "web design",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, fugit.",
            liveLink: "",
            gitLink: ""
        },
        {
            name: "web design",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, fugit.",
            liveLink: "",
            gitLink: ""
        },
    ]

    return (
        <div className="bg-gray-800 text-white py-16">
            <div className="container mx-auto">
                <h3 className='text-5xl font-bold text-center pb-10'>Latest <span className='text-cyan-300'>Projects</span></h3>

                <div className='w-5/6 mx-auto grid grid-cols-1 md:grid-cols-3 align-middle gap-y-5 md:gap-y-0'>
                    <div className='w-80 relative rounded-lg shadow-cyan-300 overflow-hidden flex project-detail'>
                        <img className='w-full ease-out duration-500 hover:scale-110' src="https://i.ibb.co/4Pmyj3r/project.png" alt="" />
                        <div className='absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-cyan-300 to-[rgba(0,0,0,.1)] flex justify-center align-middle flex-col text-center px-3 translate-y-full ease-out duration-500 hover:translate-y-0 detail-container'>
                            <h3 className='font-bold text-2xl'>Web design</h3>
                            <p className='text-xl mx-5 my-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, fugit.</p>
                            <a className='w-full flex justify-center' href="#">
                                <div className='bg-slate-100 h-10 w-10 rounded-full px-[10px] py-[9px]'>
                                    <HiOutlineExternalLink className='w-5 h-5 text-slate-800' />
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className='w-80 relative rounded-lg shadow-cyan-300 overflow-hidden flex project-detail'>
                        <img className='w-full ease-out duration-500 hover:scale-110' src="https://i.ibb.co/4Pmyj3r/project.png" alt="" />
                        <div className='absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-cyan-300 to-[rgba(0,0,0,.1)] flex justify-center align-middle flex-col text-center px-3 translate-y-full ease-out duration-500 hover:translate-y-0 detail-container'>
                            <h3 className='font-bold text-2xl'>Web design</h3>
                            <p className='text-xl mx-5 my-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, fugit.</p>
                            <a className='w-full flex justify-center' href="#">
                                <div className='bg-slate-100 h-10 w-10 rounded-full px-[10px] py-[9px]'>
                                    <HiOutlineExternalLink className='w-5 h-5 text-slate-800' />
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className=' w-80 relative rounded-lg shadow-cyan-300 overflow-hidden flex  project-detail'>
                        <img className='w-full ease-out duration-500 hover:scale-110 ' src="https://i.ibb.co/4Pmyj3r/project.png" alt="" />
                        <div className='absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-cyan-300 to-[rgba(0,0,0,.1)] flex justify-center align-middle flex-col text-center px-3 translate-y-full ease-out duration-500 detail-container'>
                            <h3 className='font-bold text-2xl'>Web design</h3>
                            <p className='text-xl mx-5 my-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, fugit.</p>
                            <a className='w-full flex justify-center' href="#">
                                <div className='bg-slate-100 h-10 w-10 rounded-full px-[10px] py-[9px]'>
                                    <HiOutlineExternalLink className='w-5 h-5 text-slate-800' />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;