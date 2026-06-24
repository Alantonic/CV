import { FaGithub, FaEnvelope, FaPhone, FaLinkedin } from 'react-icons/fa';
import { personalInfo } from '../data';

const Header = () => {
  return (
    <header className="w-full max-w-4xl bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl mb-8 p-8 md:p-12">
      <div className="flex flex-col items-center text-center">
        {/* Foto */}
        <div className="mb-6">
          <img 
            src="./assets/foto-perfil.jpg" 
            alt={personalInfo.name}
            className="w-60 h-60 rounded-full border-4 border-blue-400 shadow-xl object-cover mx-auto hover:scale-110 transition-transform duration-300"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'assets/Foto1.png';
            }}
          />
        </div>
        
        {/* Nombre */}
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
          {personalInfo.name}
        </h1>
        
        {/* Título */}
        <p className="text-xl text-gray-300 mb-6 max-w-2xl">
          {personalInfo.title}
        </p>
        
        {/* Botones de contacto - Centrados */}
        <div className="flex flex-wrap gap-3 justify-center w-full">
          <a 
            href={`mailto:${personalInfo.email}`} 
            className="flex items-center gap-2 bg-blue-500/20 hover:bg-blue-500/30 px-4 py-2 rounded-full transition-all hover:scale-105 hover:shadow-lg text-sm md:text-base"
          >
            <FaEnvelope /> {personalInfo.email}
          </a>
          <a 
            href={`tel:${personalInfo.phone}`} 
            className="flex items-center gap-2 bg-green-500/20 hover:bg-green-500/30 px-4 py-2 rounded-full transition-all hover:scale-105 hover:shadow-lg text-sm md:text-base"
          >
            <FaPhone /> {personalInfo.phone}
          </a>
          <a 
            href={personalInfo.github} 
            target="_blank" 
            className="flex items-center gap-2 bg-gray-500/20 hover:bg-gray-500/30 px-4 py-2 rounded-full transition-all hover:scale-105 hover:shadow-lg text-sm md:text-base"
          >
            <FaGithub /> GitHub
          </a>
          <a 
            href={personalInfo.linkedin} 
            target="_blank" 
            className="flex items-center gap-2 bg-blue-700/20 hover:bg-blue-700/30 px-4 py-2 rounded-full transition-all hover:scale-105 hover:shadow-lg text-sm md:text-base"
          >
            <FaLinkedin /> LinkedIn
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;