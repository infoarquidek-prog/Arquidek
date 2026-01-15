
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
        <div className="col-span-1 md:col-span-2">
          <Link to="/" className="flex flex-col leading-[0.8] font-light w-fit group">
            <span className="text-2xl tracking-[0.2em] group-hover:opacity-60 transition-opacity">AR</span>
            <span className="text-2xl tracking-[0.2em] group-hover:opacity-60 transition-opacity">QU</span>
            <span className="text-2xl tracking-[0.2em] group-hover:opacity-60 transition-opacity">IDE</span>
            <span className="text-2xl tracking-[0.2em] ml-auto group-hover:opacity-60 transition-opacity">K</span>
          </Link>
          <p className="mt-10 text-xs text-gray-400 max-w-xs leading-relaxed tracking-wider uppercase">
            Estudio de arquitectura enfocado en el diseño contemporáneo, la precisión espacial y la identidad.
          </p>
        </div>
        
        <div className="flex flex-col space-y-5">
          <h4 className="text-[9px] tracking-[0.3em] font-bold text-gray-300 uppercase mb-2">Estudio</h4>
          <Link to="/projects" className="text-[10px] tracking-[0.2em] font-medium hover:text-gray-400 transition-colors uppercase">Proyectos</Link>
          <Link to="/about" className="text-[10px] tracking-[0.2em] font-medium hover:text-gray-400 transition-colors uppercase">Estudio</Link>
          <Link to="/services" className="text-[10px] tracking-[0.2em] font-medium hover:text-gray-400 transition-colors uppercase">Servicios</Link>
          <Link to="/contact" className="text-[10px] tracking-[0.2em] font-medium hover:text-gray-400 transition-colors uppercase">Contacto</Link>
        </div>

        <div className="flex flex-col space-y-5">
          <h4 className="text-[9px] tracking-[0.3em] font-bold text-gray-300 uppercase mb-2">Conectar</h4>
          <a href="#" className="text-[10px] tracking-[0.2em] font-medium hover:text-gray-400 transition-colors uppercase">Instagram</a>
          <a href="#" className="text-[10px] tracking-[0.2em] font-medium hover:text-gray-400 transition-colors uppercase">LinkedIn</a>
          <a href="#" className="text-[10px] tracking-[0.2em] font-medium hover:text-gray-400 transition-colors uppercase">Behance</a>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center text-[9px] tracking-[0.4em] text-gray-400 font-bold uppercase">
        <p>© 2024 ARQUIDEK ARCHITECTS. TODOS LOS DERECHOS RESERVADOS.</p>
        <p className="mt-4 md:mt-0 opacity-50">Legal — Privacidad</p>
      </div>
    </footer>
  );
};

export default Footer;
