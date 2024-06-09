import React from 'react';

const Header = () => {
  return (
    <div className="navbar bg-sky-900 text-white">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Projects</a></li>
        <li><a>Skills</a></li>
        <li><a>Contact</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-2xl font-bold">Nusrat</a>
  </div>
  <div className="navbar-end mr-5">
  <ul className='hidden lg:flex gap-5'>
  <li><a>Projects</a></li>
  <li><a>Skills</a></li>
  <li><a>Contact</a></li>
  </ul>
  </div>
</div>
  );
};

export default Header;