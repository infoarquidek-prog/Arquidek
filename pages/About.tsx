
import React from 'react';
import { TEAM } from '../constants';

const About: React.FC = () => {
  return (
    <div className="pt-32 bg-white">
      {/* Studio Intro */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <h3 className="text-[10px] tracking-[0.4em] text-gray-400 font-bold mb-4 uppercase">El Estudio</h3>
            <h1 className="text-5xl font-light mb-12 tracking-tight font-display italic leading-tight">ARQUIDEK: <br/>Espacio y Propósito.</h1>
          </div>
          <div className="flex flex-col justify-end">
            <p className="text-xl font-light text-gray-600 leading-relaxed">
              Fundado con la convicción de que la arquitectura es el arte de organizar la luz y el espacio, nuestro estudio opera en la intersección entre la técnica rigurosa y la sensibilidad artística.
            </p>
            <p className="mt-8 text-gray-500 font-light leading-relaxed">
              Trabajamos de la mano con nuestros clientes para destilar sus aspiraciones en formas concretas que perduran en el tiempo, respetando siempre el contexto urbano y social en el que se insertan.
            </p>
          </div>
        </div>
      </section>

      {/* Studio Image */}
      <section className="w-full h-[60vh] overflow-hidden grayscale brightness-75 mb-32">
        <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" alt="Studio Atmosphere" className="w-full h-full object-cover" />
      </section>

      {/* Philosophy Details */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-32 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h4 className="text-[10px] tracking-[0.2em] font-bold mb-4 uppercase">DIÁLOGO URBANO</h4>
          <p className="text-sm text-gray-500 leading-relaxed font-light">Entendemos cada proyecto como un fragmento de una narrativa urbana mayor, buscando siempre la armonía con su entorno inmediato.</p>
        </div>
        <div>
          <h4 className="text-[10px] tracking-[0.2em] font-bold mb-4 uppercase">PRECISIÓN TÉCNICA</h4>
          <p className="text-sm text-gray-500 leading-relaxed font-light">La excelencia en el detalle constructivo es lo que separa un simple edificio de una obra de arquitectura con identidad.</p>
        </div>
        <div>
          <h4 className="text-[10px] tracking-[0.2em] font-bold mb-4 uppercase">VISIÓN GLOBAL</h4>
          <p className="text-sm text-gray-500 leading-relaxed font-light">Nuestra proyección nos permite integrar tendencias internacionales con la calidez y las necesidades específicas del mercado local.</p>
        </div>
      </section>

      {/* Team */}
      <section className="bg-gray-50 py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-[10px] tracking-[0.4em] text-gray-400 font-bold mb-16 uppercase text-center">Nuestro Equipo</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {TEAM.map((member, idx) => (
              <div key={idx} className="group text-center">
                <div className="aspect-square overflow-hidden bg-gray-200 mb-8 max-w-xs mx-auto">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0" />
                </div>
                <h4 className="text-lg font-light tracking-widest uppercase mb-1">{member.name}</h4>
                <p className="text-[10px] tracking-[0.2em] text-gray-400 font-medium">{member.role.toUpperCase()}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
