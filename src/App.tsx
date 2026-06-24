import Header from './components/header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footers';

function App() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
      {/* Contenedor principal centrado */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center w-full">
          <Header />
          <About />
          <Skills />
          <Projects />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;