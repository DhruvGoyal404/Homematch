import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'react-feather';
import image5 from '../assets/logo_re.jpg';
import { useAuth } from './Auth';

const Navbar = () => {
  const location = useLocation();
  const { user, logout } = useAuth();
  
  const links = [
    { name: 'Home', path: '/', number: 1 },
    { name: 'Who are we?', path: '/content', number: 2 },
    { name: 'Why Home Match?', path: '/advertise', number: 3 },
    { name: 'FAQ', path: '/faq', number: 4 },
    { name: 'Explore', path: '/explore', number: 5 },
    { name: 'About Us', path: '/about', number: 6 },
    { name: 'Register', path: '/register', number: 8 },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-red-50 rounded-b-3xl h-16 flex items-center justify-between px-8">
      <div className='flex items-center'>
        <Link to="/" className="flex items-center">
          <p className='p-4 font-bold'>Hacktify</p>
        </Link>
        <p className='select-none'>|</p>
        <Link to="/" className="flex items-center">
          <p className='p-4 font-bold'>Home Match</p>
        </Link>
        <p className='select-none'>|</p>
        <img src={image5} alt="Logo" className='pl-4 pb-1.25'/>
      </div>
      <div className="flex-grow flex justify-end lg:flex hidden">
        {links.map((link, index) => (
          <Link key={index} to={link.path}>
            <p className={`p-4 hover:text-secondary transition duration-300 ${location.pathname === link.path ? 'font-semibold border rounded-full py-2 shadow-xl px-6 bg-[rgb(249,243,243)] text-gray-700 animate-scale' : ''}`}>
              {link.name}
            </p>
          </Link>
        ))}
        {user ? (
          <button onClick={logout} className="p-4 hover:text-secondary transition duration-300">
            Logout
          </button>
        ) : (
          <Link to="/login">
            <p className={`p-4 hover:text-secondary transition duration-300 ${location.pathname === '/login' ? 'font-semibold border rounded-full py-2 shadow-xl px-6 bg-[rgb(249,243,243)] text-gray-700 animate-scale' : ''}`}>
              Login
            </p>
          </Link>
        )}
      </div>
      <div className="lg:hidden">
        <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-red-50 rounded-b-3xl">
          <div className="flex flex-col items-center">
            {links.map((link, index) => (
              <Link key={index} to={link.path} onClick={toggleMenu} className="w-full text-center py-4 hover:text-secondary transition duration-300">
                <p className={`${location.pathname === link.path ? 'font-semibold border rounded-full py-2 shadow-xl px-6 bg-[rgb(249,243,243)] text-gray-700 animate-scale' : ''}`}>
                  {link.name}
                </p>
              </Link>
            ))}
            {user ? (
              <button onClick={logout} className="w-full text-center py-4 hover:text-secondary transition duration-300">
                Logout
              </button>
            ) : (
              <Link to="/login" onClick={toggleMenu} className="w-full text-center py-4 hover:text-secondary transition duration-300">
                <p className={`${location.pathname === '/login' ? 'font-semibold border rounded-full py-2 shadow-xl px-6 bg-[rgb(249,243,243)] text-gray-700 animate-scale' : ''}`}>
                  Login
                </p>
              </Link>
            )}
          </div>
        </div>
      )}
      <style jsx>{`
        @keyframes scale {
          0% {
            transform: scale(0.95);
          }
          100% {
            transform: scale(1);
          }
        }

        .animate-scale {
          animation: scale 0.3s ease-out;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
