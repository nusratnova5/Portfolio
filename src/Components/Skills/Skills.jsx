import React from 'react';
import img1 from '../Skills/images/html.png';
import img2 from '../Skills/images/css.webp';
import img3 from '../Skills/images/bootstrap.png';
import img4 from '../Skills/images/tailwind.png';
import img5 from '../Skills/images/js.png';
import img6 from '../Skills/images/react.png';
import img7 from '../Skills/images/node.png';
import img8 from '../Skills/images/express.webp';

const Skills = () => {
    return (
        <div id='skills' className='bg-primary p-10 rounded-lg'>
            <h1 className='text-center text-5xl font-bold mb-10 text-white'>My Skills</h1>
        <div className='grid lg:grid-cols-4 gap-20'>
            
            <div className="flex flex-col justify-center items-center h-full">
                <img src={img1} alt="HTML Logo" className='h-56 w-full object-cover' />
                <p className='mt-5 text-lg font-bold text-white'>HTML</p>
            </div>
            <div className='flex flex-col justify-center items-center h-full' >
                <img src={img2} alt="" className='h-56 w-full object-cover' />
                <p className='mt-5 text-lg font-bold text-white'>CSS</p>
            </div>
            <div className='flex flex-col justify-center items-center h-full' >
                <img src={img3} alt=""className='h-56 w-full object-cover'  />
                <p className='mt-5 text-lg font-bold text-white'>Bootstrap</p>
            </div>
            <div className='flex flex-col justify-center items-center h-full' >
                <img src={img4} alt="" className='h-56 w-full object-cover' />
                <p className='mt-5 text-lg font-bold text-white'>Tailwind</p>
            </div>
            <div className='flex flex-col justify-center items-center h-full' >
                <img src={img5} alt=""className='h-56 w-full object-cover'  />
                <p className='mt-5 text-lg font-bold text-white'>JAVASCRIPT</p>
            </div>
            <div className='flex flex-col justify-center items-center h-full' >
                <img src={img6} alt="" className='h-56 w-full object-cover' />
                <p className='mt-5 text-lg font-bold text-white'>REACT</p>
            </div>
            <div className='flex flex-col justify-center items-center h-full' >
                <img src={img7} alt=""className='h-56 w-full object-cover'  />
                <p className='mt-5 text-lg font-bold text-white'>NODE</p>
            </div>
            <div className='flex flex-col justify-center items-center h-full' >
                <img src={img8} alt=""className='h-56 w-full object-cover'  />
                <p className='mt-5 text-lg font-bold text-white'>EXPRESS</p>
            </div>

        </div>
        </div>
    );
};

export default Skills;