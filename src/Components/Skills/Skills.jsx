import React from 'react';
import img1 from '../Skills/images/html.png';
import img2 from '../Skills/images/css.webp';
import img3 from '../Skills/images/bootstrap.png';
import img4 from '../Skills/images/tailwind.png';
import img5 from '../Skills/images/js.png';
import img6 from '../Skills/images/react.png';
import img7 from '../Skills/images/node.png';
import img8 from '../Skills/images/express.webp';
import { FaBootstrap, FaCss3, FaHtml5, FaJs, FaNode, FaReact } from 'react-icons/fa';
import { SiExpress, SiTailwindcss } from 'react-icons/si';

const Skills = () => {
    return (
        <div id='skills' className='bg-primary p-10 rounded-lg'>
            <h1 className='text-center text-5xl font-bold mb-10 text-white'>My Skills</h1>
            <div className='grid lg:grid-cols-4 gap-5 w-3/4 mx-auto'>
                <FaHtml5 className='text-9xl bg-accent text-primary' />
                <FaCss3 className='text-9xl bg-accent text-primary p-2'/>
                <FaBootstrap className='text-9xl bg-accent text-primary' />
                <SiTailwindcss className='text-9xl bg-accent text-primary p-2' />
                <FaJs className='text-9xl bg-accent text-primary' />
                <FaReact className='text-9xl bg-accent text-primary p-2' />
                <FaNode className='text-9xl bg-accent text-primary p-2' />
                <SiExpress className='text-9xl bg-accent text-primary p-2' />
            </div>
        </div>
    );
};

export default Skills;