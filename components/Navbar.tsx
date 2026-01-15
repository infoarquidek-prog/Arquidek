
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'PROYECTOS', path: '/projects' },
    { name: 'ESTUDIO', path: '/about' },
    { name: 'SERVICIOS', path: '/services' },
    { name: 'PUBLICACIONES', path: '/publications' },
    { name: 'CONTACTO', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 md:px-12 py-6 ${isScrolled ? 'bg-white/95 backdrop-blur-md py-3 shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-end">
        <Link to="/" className="flex flex-col leading-[0.8] font-light hover:opacity-60 transition-opacity">
          <span className="text-xl md:text-2xl tracking-[0.2em]">AR</span>
          <span className="text-xl md:text-2xl tracking-[0.2em]">QU</span>
          <span className="text-xl md:text-2xl tracking-[0.2em]">IDE</span>
          <span className="text-xl md:text-2xl tracking-[0.2em] ml-auto">K</span>
        </Link>
        
        <div className="hidden md:flex space-x-10 mb-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-[9px] tracking-[0.4em] font-bold transition-all hover:text-gray-400 ${location.pathname === link.path ? 'border-b-2 border-black pb-1' : 'pb-1'}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <button className="md:hidden text-[10px] tracking-[0.3em] font-bold mb-2">MENU</button>
      </div>
    </nav>
  );
};

export default Navbar;
