import React from 'react';
import { MdMarkEmailRead } from 'react-icons/md';
import { PiGithubLogoFill } from 'react-icons/pi';
import { SiFacebook, SiLinkedin } from 'react-icons/si';

const About = () => {
    return (
        <div className="text-center p-8 my-20">
            <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-sky-900">
                Tech Trailblazer: Me, the Developer
            </h2>

            <div className="flex flex-wrap items-center mt-10 text-left ">
                <div className="w-full md:w-3/5 lg:w-1/2 px-4">
                    <p className="flex items-center space-x-2 text-2xl text-sky-900">
                        <MdMarkEmailRead className="text-5xl mb-3" />
                        <a className=''>nusrat.nova16@gmail.com</a>
                    </p>
                    <p className="flex items-center space-x-2 text-2xl text-sky-900">
                        <PiGithubLogoFill className="text-5xl mb-3" />
                        <a href='https://github.com/nusratnova5'>Github</a>
                    </p>
                    <p className="flex items-center space-x-2 text-2xl text-sky-900">
                        <SiLinkedin  className="text-5xl mb-3" />
                        <a href='https://www.linkedin.com/in/nusrat-nova/'>LinkedIN</a>
                    </p>
                    <p className="flex items-center space-x-2 text-2xl text-sky-900">
                        <SiFacebook  className="text-5xl mb-3" />
                        <a href='https://www.facebook.com/nusrat.nova.9216'>Facebook</a>
                    </p>
                    
                </div>
                <div className="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12">
                    <p className="sm:text-lg my-6">
                        <span className='text-green-400 text-3xl font-bold'>Hello! I’m Nusrat,</span><br /> a recent Computer Science and Engineering graduate who has uncovered a profound passion for web development. Since mid-2022, I’ve been immersing myself in this dynamic field, building diverse projects and honing my skills to meet industry standards.
                        <br/> <br /> 
                        As a fresh graduate, I am committed to continuous learning and self-improvement. Dive into my portfolio to explore my projects and witness my growth in the ever-evolving world of web development.

                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;