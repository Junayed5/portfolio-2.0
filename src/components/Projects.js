import React from "react";
import "../App.css";
import { HiOutlineExternalLink } from "react-icons/hi";
import { AiFillGithub } from "react-icons/ai";

const Projects = () => {
  const myProjects = [
    {
      name: "Taskla",
      image: "https://i.ibb.co/4Pmyj3r/project.png",
      description:
        "A website designed for the management of student learning guides, classes, and assignments",
      liveLink: "https://taskla-hr.netlify.app/",
      gitLink: "https://github.com/ranawp/taskla",
    },
    {
      name: "Jobbox",
      image: "https://i.ibb.co.com/Q8Vy67g/job-sicker-netlify-app.png",
      description:
        "A job seeker searching their jobs and apply. And viewing full description and communicate with client.",
      liveLink: "https://job-sicker.netlify.app/",
      gitLink: "https://github.com/Junayed5/Redux-jobbox",
    },
    {
      name: "Jamrio",
      image: "https://i.ibb.co/RYVQ8Q9/project3.png",
      description:
        "The Jamrio team developed this website. This website provides rent a studio recording something",
      liveLink: "https://jamrio.com/",
      gitLink: "",
    },
    {
      name: "Personal portfolio",
      image: "https://i.ibb.co.com/Vv9yCFY/localhost-3000.png",
      description:
        "Portfolio is making me the next level.",
      liveLink: "https://junayed-me.netlify.app/",
      gitLink: "",
    },
    {
      name: "Computer Parts",
      image: "https://i.ibb.co/XpGhPDY/project2.png",
      description:
        "Developed for computer parts manufacturers, this website provides information about their products.",
      liveLink: "https://computer-parts.netlify.app/",
      gitLink: "https://github.com/Junayed5/manufacturer-website",
    },

    {
      name: "FurniFlex",
      image: "https://i.ibb.co.com/mzSWtWc/furni-flex-app-netlify-app-1.png",
      description:
        "This is the practice project using React Context API user can add to cart and remove from cart.",
      liveLink: "https://furni-flex-app.netlify.app/",
      gitLink: "https://github.com/Junayed5/ecommerce-webapp",
    },
    {
      name: "Nirvoya",
      image: "https://i.ibb.co.com/kSQb8nd/enchanting-bonbon-3a1a32-netlify-app-1.png",
      description:
        "This is the practice project using React",
      liveLink: "https://enchanting-bonbon-3a1a32.netlify.app/",
      gitLink: "https://github.com/Junayed5/nirvoya-design-task",
    },
  ];

  return (
    <div id="projects" className="bg-gray-800 text-white py-16">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-5xl font-bold text-center pb-10">
          Latest <span className="text-cyan-300">Projects</span>
        </h3>

        <div className="w-5/6 mx-auto grid grid-cols-1 md:grid-cols-3 align-middle gap-y-5 md:gap-y-6">
          {myProjects.map((project) => {
            const { name, image, description, liveLink, gitLink } = project;
            return (
              <div className="w-80 h-44 relative rounded-lg shadow-cyan-300 overflow-hidden flex project-detail">
                <img
                  className="w-full ease-out duration-500 hover:scale-110"
                  src={image}
                  alt=""
                />
                <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-cyan-300 to-[rgba(0,0,0,.1)] flex justify-center align-middle flex-col text-center px-3 translate-y-full ease-out duration-500 hover:translate-y-0 detail-container">
                  <h3 className="font-bold text-xl">{name}</h3>
                  <p className="text-sm mx-3 my-2">{description}</p>
                  <div className="flex px-20  ">
                    <a
                      className="w-full flex justify-center"
                      target="_blank"
                      href={liveLink}
                    >
                      <div className="bg-slate-100 h-10 w-10 rounded-full px-[10px] py-[9px]">
                        <HiOutlineExternalLink className="w-5 h-5 text-slate-800" />
                      </div>
                    </a>
                    {gitLink && (
                      <a
                        className="w-full flex justify-center"
                        target="_blank"
                        href={gitLink}
                      >
                        <div className="bg-slate-100 h-10 w-10 rounded-full px-[10px] py-[9px]">
                          <AiFillGithub className="w-5 h-5 text-slate-800" />
                        </div>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
