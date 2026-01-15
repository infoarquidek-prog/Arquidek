
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { ProjectCategory } from '../types';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | 'All'>('All');

  const filteredProjects = activeFilter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeFilter);

  const categories: (ProjectCategory | 'All')[] = ['All', 'Residencial', 'Comercial', 'Cultural', 'Interiorismo'];

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20">
          <h1 className="text-5xl font-light tracking-tight mb-8">Proyectos</h1>
          <div className="flex flex-wrap gap-x-12 gap-y-6">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`text-[10px] tracking-[0.3em] font-bold pb-1 border-b transition-all ${activeFilter === cat ? 'border-black text-black' : 'border-transparent text-gray-400 hover:text-black'}`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {filteredProjects.map((project) => (
            <Link to={`/projects/${project.id}`} key={project.id} className="group block">
              <div className="aspect-[3/4] overflow-hidden bg-gray-100 mb-6">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
              </div>
              <h4 className="text-[9px] tracking-[0.2em] font-bold text-gray-400 mb-1">{project.location.toUpperCase()}</h4>
              <h3 className="text-lg font-light tracking-[0.1em] group-hover:text-gray-600 transition-colors uppercase">{project.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
