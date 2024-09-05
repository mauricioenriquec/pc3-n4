import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navigation() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-800 bg-opacity-10 backdrop-blur-md">
      <div className="container mx-auto px-4 flex justify-between items-center h-20">
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" className="fill-white">
            <path d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/>
          </svg>
        </div>
        
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>

        <ul className={`md:flex justify-center items-center space-x-10 text-white ${isMenuOpen ? 'block absolute top-20 left-0 right-0 bg-slate-800 bg-opacity-95 p-4' : 'hidden md:flex'}`}>
          {['home', 'destination', 'crew', 'technology'].map((item, index) => (
            <li key={item} className="my-2 md:my-0">
              <Link
                to={`/${item}`}
                className={`pb-2 border-b-2 transition-colors duration-300 ${
                  location.pathname === `/${item}` ? 'border-white' : 'border-transparent hover:border-white/50'
                }`}
              >
                <span className="font-bold mr-2">0{index}</span>
                {item.toUpperCase()}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;