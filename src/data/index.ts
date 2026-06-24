// Importación de tipos con 'type'
import type { Project, Skill } from '../types';

export const personalInfo = {
  name: 'Alan V.',
  title: 'Estudiante de Licenciatura en ingeniería en desarrollo de software',
  email: 'alanvaro1117@gmail.com',
  phone: '+52 664 821 4996',
  github: 'https://github.com/Alantonic',
  linkedin: 'https://www.linkedin.com/in/alan-vargas-5b564833b/',
  description: 'Apasionado por la tecnología con experiencia en desarrollo de aplicaciones de escritorio (C#), IoT con ESP-32, entornos 3D con Unity, y desarrollo web. Busco oportunidades para aplicar mis conocimientos y seguir aprendiendo.',
  stats: [
    { value: '3+', label: 'Años codificando' },
    { value: '5+', label: 'Proyectos completados' },
    { value: '4', label: 'Tecnologías dominadas' }
  ]
};

export const skills: Skill[] = [
  { name: 'C#', icon: 'SiSharp', color: 'text-purple-400' },
  { name: 'Python', icon: 'SiPython', color: 'text-blue-400' },
  { name: 'React', icon: 'SiReact', color: 'text-cyan-400' },
  { name: 'Unity 3D', icon: 'SiUnity', color: 'text-gray-300' },
  { name: 'ESP-32', icon: 'SiArduino', color: 'text-green-400' },
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'Gestor de Videojuegos',
    description: 'Aplicación web CRUD para catalogar y gestionar tu colección de videojuegos con React y Vite.',
    image: '/assets/proyecto-1.jpg',
    tech: ['React', 'TypeScript', 'Tailwind'],
  },
  {
    id: 2,
    title: 'Sistema IoT con ESP-32',
    description: 'Monitoreo de sensores y control remoto de dispositivos usando C++ y comunicación MQTT.',
    image: '/assets/proyecto-2.jpg',
    tech: ['C++', 'ESP-32', 'MQTT', 'MongoDB'],
  },
  {
    id: 3,
    title: 'Juego 3D en Unity',
    description: 'Prototipo de juego de plataformas 3D con mecánicas de salto, colección de objetos y enemigos.',
    image: '/assets/proyecto-3.jpg',
    tech: ['C#', 'Unity', 'Blender']
  }
];