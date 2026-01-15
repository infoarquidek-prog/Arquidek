
import React from 'react';
import { PUBLICATIONS } from '../constants';

const Publications: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 bg-white min-h-screen">
      <div className="max-w-5xl mx-auto">
        <header className="mb-24">
          <h1 className="text-5xl font-light tracking-tight mb-8">Publicaciones y Reconocimientos</h1>
          <p className="text-gray-500 font-light max-w-2xl leading-relaxed">
            Una selección de menciones en prensa especializada, publicaciones académicas y galardones que avalan nuestra trayectoria y compromiso con la excelencia.
          </p>
        </header>

        <div className="space-y-4">
          <div className="grid grid-cols-12 gap-4 pb-4 border-b border-gray-100 text-[10px] tracking-[0.2em] font-bold text-gray-400">
            <div className="col-span-1">AÑO</div>
            <div className="col-span-6 md:col-span-7">TÍTULO</div>
            <div className="col-span-3 md:col-span-2">FUENTE</div>
            <div className="col-span-2 text-right">TIPO</div>
          </div>
          
          {PUBLICATIONS.map((item, idx) => (
            <div key={idx} className="grid grid-cols-12 gap-4 py-8 border-b border-gray-50 hover:bg-gray-50/50 transition-colors items-center">
              <div className="col-span-1 text-xs font-light text-gray-400">{item.year}</div>
              <div className="col-span-6 md:col-span-7 text-sm md:text-base font-medium tracking-tight uppercase">{item.title}</div>
              <div className="col-span-3 md:col-span-2 text-[10px] text-gray-500 tracking-widest">{item.source.toUpperCase()}</div>
              <div className="col-span-2 text-right text-[10px] text-gray-400 font-bold tracking-widest">{item.type.toUpperCase()}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Publications;
