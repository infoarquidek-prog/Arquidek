
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../constants';

const Home: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black">
        {/* 
          INSTRUCCIONES: 
          Para que se vea tu foto exacta, descarga la imagen que subiste, 
          llámala "hero.jpg" y guárdala en la misma carpeta que el index.html.
        */}
        <img 
          src="./hero.jpg" 
          alt="ARQUIDEK ARCHITECTURE" 
          className="absolute inset-0 w-full h-full object-cover brightness-[0.7] contrast-110 transition-all duration-1000"
          onError={(e) => {
            // Fallback con una imagen de estética similar (atardecer arquitectónico) 
            // en caso de que el archivo local no esté presente.
            const target = e.target as HTMLImageElement;
            target.src = "https://images.unsplash.com/photo-1574359411659-15573a27f812?q=80&w=2000&auto=format&fit=crop";
          }}
        />
        
        {/* Overlay para profundidad y legibilidad del texto */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50"></div>

        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-8xl font-light tracking-[0.05em] mb-4 font-display italic drop-shadow-2xl">
            Design. Identity. Innovation.
          </h1>
          <div className="w-16 h-[1px] bg-white/40 mx-auto mt-12 animate-pulse"></div>
        </div>

        <div className="absolute bottom-12 left-12 hidden md:block">
          <p className="text-[9px] tracking-[0.5em] text-white/50 font-bold uppercase">Arquitectura. Diseño. Identidad.</p>
        </div>
      </section>

      {/* Intro Statement */}
      <section className="py-40 px-6 md:px-12 bg-white">
        <div className="max-w-5xl mx-auto text-center reveal">
          <p className="text-2xl md:text-4xl font-light leading-[1.4] text-gray-900 tracking-tight">
            ARQUIDEK es un estudio enfocado en el <span className="font-display italic">diseño contemporáneo</span>, la precisión espacial y la identidad de cada proyecto.
          </p>
          <div className="mt-16">
             <Link to="/about" className="text-[10px] tracking-[0.4em] font-bold border-b border-black pb-1 hover:text-gray-400 transition-colors uppercase">Conocer el estudio</Link>
          </div>
        </div>
      </section>

      {/* Featured Projects Grid */}
      <section className="py-24 px-6 md:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-20 reveal">
            <div>
               <h3 className="text-[10px] tracking-[0.5em] text-gray-400 font-bold mb-4 uppercase">Obras Seleccionadas</h3>
               <h2 className="text-4xl font-light tracking-tight">Proyectos que definen nuestra visión.</h2>
            </div>
            <Link to="/projects" className="hidden md:block text-[10px] tracking-[0.4em] font-bold border-b border-black pb-1 uppercase hover:text-gray-400 transition-colors">Ver portafolio</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
            {PROJECTS.slice(0, 4).map((project, idx) => (
              <Link 
                to={`/projects/${project.id}`} 
                key={project.id} 
                className={`group block overflow-hidden reveal ${idx % 2 !== 0 ? 'md:mt-32' : ''}`}
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-gray-200 shadow-2xl">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:scale-105 group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-center justify-center">
                    <span className="text-white text-[10px] tracking-[0.5em] font-bold uppercase">Explorar Proyecto</span>
                  </div>
                </div>
                <div className="mt-10">
                  <h4 className="text-[9px] tracking-[0.3em] font-bold text-gray-400 mb-2 uppercase">{project.category} — {project.location}</h4>
                  <h3 className="text-2xl font-light tracking-widest uppercase">{project.title}</h3>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-24 text-center md:hidden">
            <Link to="/projects" className="text-[10px] tracking-[0.4em] font-bold border-b border-black pb-1 uppercase">Ver todos los proyectos</Link>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-40 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <div className="reveal">
            <img 
              src="https://images.unsplash.com/photo-1511818234673-82c578496417?auto=format&fit=crop&q=80&w=1000" 
              alt="Architecture Detail" 
              className="w-full grayscale h-[700px] object-cover shadow-xl"
            />
          </div>
          <div className="reveal">
            <h3 className="text-[10px] tracking-[0.5em] text-gray-400 font-bold mb-6 uppercase">Filosofía de Trabajo</h3>
            <h2 className="text-5xl font-light mb-10 leading-tight tracking-tight">Diseño basado en el contexto y la materialidad pura.</h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-16 font-light">
              Nuestra metodología integra el análisis profundo del entorno con las necesidades funcionales del programa. Creemos que cada estructura debe contar una historia coherente a través de su luz, su volumen y su tacto.
            </p>
            <div className="grid grid-cols-2 gap-12 border-t border-gray-100 pt-12">
              <div>
                <h5 className="text-[10px] tracking-[0.3em] font-bold mb-4 uppercase">Concepto</h5>
                <p className="text-xs text-gray-400 font-light leading-relaxed">Ejes vertebradores que dan alma a la propuesta formal.</p>
              </div>
              <div>
                <h5 className="text-[10px] tracking-[0.3em] font-bold mb-4 uppercase">Precisión</h5>
                <p className="text-xs text-gray-400 font-light leading-relaxed">Excelencia técnica aplicada a cada detalle constructivo.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
