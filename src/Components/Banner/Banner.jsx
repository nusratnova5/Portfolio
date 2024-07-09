import React from 'react';
import bannerimg from '../Banner/Nusrat Jahan.png'
import { CgProfile } from 'react-icons/cg';
import { saveAs } from 'file-saver';
import resume from '../Banner/Nusrat Jahan.pdf'
import img from '../Banner/Nusrat Jahan.png'
import Photo from './Photo';

const Banner = () => {
  const handleDownload = () => {
    saveAs(resume, 'nusrat-jahan.pdf'); // File to be saved and the name it should be saved as
  };
  return (
    <div>
      <div class="flex items-center justify-center bg-primary p-20 mb-10">
        <div class="grid md:grid-cols-3 grid-cols-1 items-center gap-10 md:px-0">
          <div className='col-span-2 lg:mx-20'>
              <h1 class="mb-2 px-3 py-1 bg-accent rounded-full inline-block text-white">Front-end Developer</h1>
            <p class="mb-6 text-white">I'm a passionate web developer specializing in creating dynamic and responsive web applications. With a keen eye for detail and a love for innovative solutions, I bring ideas to life through code. Explore my portfolio to see my latest projects and discover how I can help elevate your online presence.</p>
            <div class="flex justify-center space-x-5">
              <a href='#about' class="flex w-full items-center justify-center gap-1 rounded-2xl bg-accent p-5 py-3 font-semibold text-white hover:bg-rose-700">
                About me
                <CgProfile className='text-2xl ml-2' />
              </a>
              <button onClick={handleDownload} class="flex w-full items-center justify-center gap-2 rounded-2xl bg-white p-5 py-3 font-semibold">
                Resume
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </button>
            </div>
          </div>
          <Photo />
        </div>
      </div>
    </div>

  );
};

export default Banner;

// 