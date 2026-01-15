
import { Project, Service, Publication, TeamMember } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'torre-prisma',
    title: 'Torre Prisma',
    category: 'Comercial',
    location: 'Ciudad de Panamá, PA',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
    description: 'Una respuesta vertical a la densidad urbana, caracterizada por su envolvente facetada que optimiza la entrada de luz natural y redefine el skyline corporativo.',
    gallery: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&q=80&w=1200'
    ]
  },
  {
    id: 'casa-brisa',
    title: 'Casa Brisa',
    category: 'Residencial',
    location: 'Costa del Este, PA',
    year: '2022',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200',
    description: 'Vivienda unifamiliar que explora la transición entre el interior y el exterior a través de patios secuenciales y una materialidad cruda de concreto y madera.',
    gallery: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1600607687940-4720023097c3?auto=format&fit=crop&q=80&w=1200'
    ]
  },
  {
    id: 'centro-zenit',
    title: 'Centro Cultural Zenit',
    category: 'Cultural',
    location: 'Madrid, ES',
    year: '2021',
    image: 'https://images.unsplash.com/photo-1518998053574-53f0209159ff?auto=format&fit=crop&q=80&w=1200',
    description: 'Un espacio dedicado a la convergencia artística, donde la estructura se convierte en escultura. La luz cenital es el eje ordenador de la experiencia espacial.',
    gallery: [
      'https://images.unsplash.com/photo-1518998053574-53f0209159ff?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1511818234673-82c578496417?auto=format&fit=crop&q=80&w=1200'
    ]
  },
  {
    id: 'atrio-hotel',
    title: 'Atrio Hotel',
    category: 'Interiorismo',
    location: 'Lisboa, PT',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1200',
    description: 'Reinterpretación de la hospitalidad de lujo mediante una paleta monocromática y texturas naturales que invitan a la serenidad.',
    gallery: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1200'
    ]
  }
];

export const SERVICES: Service[] = [
  {
    title: 'Arquitectura',
    description: 'Desarrollo integral de proyectos desde la concepción hasta el detalle técnico, priorizando la identidad formal y la eficiencia funcional.'
  },
  {
    title: 'Diseño Arquitectónico',
    description: 'Conceptualización de volúmenes y espacios que responden al contexto, utilizando herramientas avanzadas de modelado y visualización.'
  },
  {
    title: 'Interiorismo',
    description: 'Creación de atmósferas que complementan la arquitectura, con un enfoque en la materialidad, la iluminación y el confort del usuario.'
  },
  {
    title: 'Dirección de Obra',
    description: 'Supervisión rigurosa para garantizar que la ejecución fiel del diseño cumpla con los estándares de calidad y cronogramas establecidos.'
  },
  {
    title: 'Consultoría',
    description: 'Análisis de viabilidad, normativas y asesoría estratégica para optimizar el potencial de desarrollo de cada activo inmobiliario.'
  }
];

export const TEAM: TeamMember[] = [
  {
    name: 'Carlos Mendez',
    role: 'Socio Director / Arquitecto Principal',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400'
  },
  {
    name: 'Elena Valdes',
    role: 'Directora de Diseño',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400'
  },
  {
    name: 'Julián Ortega',
    role: 'Líder de Interiorismo',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400'
  }
];

export const PUBLICATIONS: Publication[] = [
  { year: '2023', title: 'Premio Excelencia en Diseño Comercial', source: 'Architectural Digest Latam', type: 'Reconocimiento' },
  { year: '2022', title: 'Monografía: El Espacio Silencioso', source: 'Ediciones Arq', type: 'Publicación' },
  { year: '2022', title: 'Casa Brisa: Diálogo con el Paisaje', source: 'ArchDaily', type: 'Artículo' },
  { year: '2021', title: 'Finalista Bienal de Arquitectura', source: 'Federación de Arquitectos', type: 'Reconocimiento' }
];
