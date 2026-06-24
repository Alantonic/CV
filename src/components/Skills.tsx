import { 
  SiSharp,        // C# (CORREGIDO)
  SiPython, 
  SiReact, 
  SiUnity, 
  SiArduino 
} from 'react-icons/si';

const Skills = () => {
  const skillsData = [
    { name: 'C#', icon: SiSharp, color: 'text-purple-400' },      
    { name: 'Python', icon: SiPython, color: 'text-blue-400' },
    { name: 'React', icon: SiReact, color: 'text-cyan-400' },
    { name: 'Unity 3D', icon: SiUnity, color: 'text-gray-300' },
    { name: 'ESP-32', icon: SiArduino, color: 'text-green-400' },
  ];

  return (
    <section className="w-full max-w-4xl bg-white/5 backdrop-blur-lg rounded-2xl p-8 md:p-12 mb-8">
      <h2 className="text-3xl font-bold mb-6 text-purple-400 text-center">
        Tecnologías
      </h2>
      <div className="flex flex-wrap gap-4 justify-center max-w-3xl mx-auto">
        {skillsData.map((skill, index) => {
          const IconComponent = skill.icon;
          return (
            <div 
              key={index} 
              className="bg-white/10 rounded-xl p-4 w-28 md:w-32 text-center hover:scale-110 transition-all duration-300 hover:bg-white/20 hover:shadow-xl"
            >
              <div className={skill.color}>
                <IconComponent className="text-4xl md:text-5xl mx-auto" />
              </div>
              <p className="mt-2 font-medium text-sm md:text-base">{skill.name}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;