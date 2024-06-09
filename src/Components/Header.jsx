import React from 'react';

const Header = () => {
  return (
    <div className="navbar bg-sky-900 text-white">
    <div className="flex-1">
      <a className="btn btn-ghost text-xl">Nusrat</a>
    </div>
    <div className="flex-none">
      <ul className="menu menu-horizontal px-1">
        <li><a>About</a></li>
        <li><a>Skills</a></li>
        <li><a>Projects</a></li>
        <li><a>Contact</a></li>        
      </ul>
    </div>
  </div>
  );
};

export default Header;