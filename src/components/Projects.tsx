import { projects } from '../data';

const Projects = () => {
  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 mb-8">
      <h2 className="text-3xl font-bold mb-6 text-green-400">Proyectos Destacados</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="bg-white/10 rounded-xl overflow-hidden hover:scale-105 transition flex flex-col h-full">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-48 object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://via.placeholder.com/800x600/2563EB/FFFFFF?text=Proyecto';
              }}
            />
            <div className="p-4 flex flex-col flex-1">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-300 text-sm mt-2 flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {project.tech.map((tech, i) => (
                  <span key={i} className="bg-blue-500/20 text-blue-300 text-xs px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;