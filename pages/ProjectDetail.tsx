
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PROJECTS } from '../constants';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = PROJECTS.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) return (
    <div className="h-screen flex items-center justify-center">
      <p className="text-xs tracking-widest uppercase">Proyecto no encontrado</p>
    </div>
  );

  return (
    <div className="bg-white">
      {/* Hero Image */}
      <section className="w-full h-[70vh] md:h-screen overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover grayscale"
        />
      </section>

      {/* Project Info */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="md:col-span-2">
            <h1 className="text-5xl font-light tracking-tight mb-8 font-display italic">{project.title}</h1>
            <p className="text-xl font-light text-gray-600 leading-relaxed max-w-2xl">
              {project.description}
            </p>
          </div>
          <div className="flex flex-col space-y-8 border-l border-gray-100 pl-8 md:pl-12">
            <div>
              <h5 className="text-[10px] tracking-widest font-bold text-gray-400 mb-1">LOCALIZACIÓN</h5>
              <p className="text-sm font-medium">{project.location}</p>
            </div>
            <div>
              <h5 className="text-[10px] tracking-widest font-bold text-gray-400 mb-1">AÑO</h5>
              <p className="text-sm font-medium">{project.year}</p>
            </div>
            <div>
              <h5 className="text-[10px] tracking-widest font-bold text-gray-400 mb-1">TIPOLOGÍA</h5>
              <p className="text-sm font-medium">{project.category}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="pb-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col space-y-12">
          {project.gallery.map((img, idx) => (
            <div key={idx} className="overflow-hidden">
              <img 
                src={img} 
                alt={`${project.title} view ${idx + 1}`} 
                className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Navigation */}
      <section className="py-24 border-t border-gray-100 px-6 md:px-12 text-center">
        <Link 
          to="/projects" 
          className="text-xs tracking-[0.4em] font-bold border-b border-black pb-1 hover:text-gray-500 transition-colors"
        >
          VOLVER A PROYECTOS
        </Link>
      </section>
    </div>
  );
};

export default ProjectDetail;
