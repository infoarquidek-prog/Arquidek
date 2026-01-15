
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto">
        <header className="mb-24">
          <h3 className="text-[10px] tracking-[0.4em] text-gray-400 font-bold mb-4 uppercase">Capacidades</h3>
          <h1 className="text-5xl font-light tracking-tight mb-8">Nuestros Servicios</h1>
          <p className="text-xl font-light text-gray-500 leading-relaxed">
            Ofrecemos un espectro completo de soluciones arquitectónicas, desde la consultoría estratégica hasta el diseño de interiores refinado.
          </p>
        </header>

        <div className="divide-y divide-gray-100">
          {SERVICES.map((service, idx) => (
            <div key={idx} className="py-16 group flex flex-col md:flex-row md:items-start gap-8">
              <span className="text-[10px] font-bold text-gray-300 group-hover:text-black transition-colors w-12">0{idx + 1}</span>
              <div className="flex-1">
                <h3 className="text-2xl font-light tracking-[0.1em] mb-4 uppercase transition-all group-hover:translate-x-2">{service.title}</h3>
                <p className="text-gray-500 leading-relaxed font-light max-w-2xl">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32 p-12 bg-gray-50 text-center">
           <h4 className="text-xl font-light mb-6">¿Interesado en una colaboración?</h4>
           <a href="/#/contact" className="text-[10px] tracking-[0.3em] font-bold border-b border-black pb-1 hover:text-gray-500 transition-colors">INICIAR CONVERSACIÓN</a>
        </div>
      </div>
    </div>
  );
};

export default Services;
