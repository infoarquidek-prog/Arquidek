
import React from 'react';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Gracias por contactar con ARQUIDEK. Nos pondremos en contacto pronto.");
  };

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          <div>
            <h3 className="text-[10px] tracking-[0.4em] text-gray-400 font-bold mb-4 uppercase">Contacto</h3>
            <h1 className="text-5xl font-light mb-12 tracking-tight font-display italic leading-tight">Construyamos el <br/>futuro juntos.</h1>
            <p className="text-gray-500 leading-relaxed font-light mb-12 max-w-md">
              Para nuevos proyectos, consultas de prensa o colaboraciones estratégicas, estamos a su disposición a través de los siguientes canales.
            </p>
            
            <div className="space-y-8">
              <div>
                <h5 className="text-[10px] tracking-widest font-bold text-gray-400 mb-2 uppercase">EMAIL</h5>
                <a href="mailto:info@arquidek.com" className="text-lg font-light hover:text-gray-500 transition-colors">info@arquidek.com</a>
              </div>
              <div>
                <h5 className="text-[10px] tracking-widest font-bold text-gray-400 mb-2 uppercase">TELÉFONO</h5>
                <p className="text-lg font-light">+507 888 2222</p>
              </div>
              <div>
                <h5 className="text-[10px] tracking-widest font-bold text-gray-400 mb-2 uppercase">UBICACIÓN</h5>
                <p className="text-lg font-light">Calle 50, Torre Evolution, Nivel 32<br/>Ciudad de Panamá, Panamá</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-12">
            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Nombre completo" 
                  required
                  className="w-full bg-transparent border-b border-gray-300 py-4 text-sm font-light focus:outline-none focus:border-black transition-colors"
                />
              </div>
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Correo electrónico" 
                  required
                  className="w-full bg-transparent border-b border-gray-300 py-4 text-sm font-light focus:outline-none focus:border-black transition-colors"
                />
              </div>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Asunto" 
                  className="w-full bg-transparent border-b border-gray-300 py-4 text-sm font-light focus:outline-none focus:border-black transition-colors"
                />
              </div>
              <div className="relative">
                <textarea 
                  placeholder="Mensaje" 
                  rows={4}
                  required
                  className="w-full bg-transparent border-b border-gray-300 py-4 text-sm font-light focus:outline-none focus:border-black transition-colors resize-none"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-black text-white text-[10px] tracking-[0.4em] font-bold py-6 hover:bg-gray-900 transition-colors"
              >
                ENVIAR MENSAJE
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
