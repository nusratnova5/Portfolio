import React from 'react';
import img1 from '../Projects/images/project-1.jpg';
import img2 from '../Projects/images/project-2.jpg';
import { BsArrowUpRightCircleFill } from "react-icons/bs";

const Projects = () => {
    return (
        <div id='projects' className="text-center p-8 my-20">
            <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-sky-900">
                Explore My Projects
            </h2>

            <div className="flex flex-wrap items-center mt-10 text-left ">
                <div className="w-full md:w-3/5 lg:w-1/2 px-4">
                    <img src={img1} alt="gem" className="inline-block rounded shadow-lg border border-merino-400" />
                </div>
                <div className="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12">
                    <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
                        TechHub
                    </h3>
                    <p className="sm:text-lg my-6">
                        TechHub is an e-commerce site offering a wide range of high-quality tech accessories. Enjoy a seamless shopping experience with our intuitive design, secure payments, and fast shipping.                </p>

                    <a href="https://tech-hub-front-pearl.vercel.app/" className='tooltip tooltip-right tooltip-success' data-tip='Live'><BsArrowUpRightCircleFill className='text-sky-900 text-4xl' /></a>
                </div>

            </div>

            <div className="flex flex-wrap items-center mt-20 text-left">
                <div className="w-full md:w-3/5 lg:w-1/2 px-4">
                    <img src={img2} alt="project members" className="inline-block rounded shadow-lg border border-merino-400" />
                </div>
                <div className="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first text-center md:text-left lg:pr-12">
                    <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
                        Food Delivery Website
                    </h3>
                    <p className="sm:text-lg my-6">
                    This project is a food delivery website created as part of a design challenge for a Web Developer Internship. The website is built using HTML, CSS, Tailwind CSS, daisyUI, SwiperJS, and Google Fonts.                    </p>
                
                    <a href="https://nusratnova5.github.io/food-delivery-website/" className='tooltip tooltip-right tooltip-success' data-tip='Live'><BsArrowUpRightCircleFill className='text-sky-900 text-4xl' /></a>
                </div>
            </div>
        </div>
    );
};

export default Projects;