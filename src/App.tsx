import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="portfolio-app">
      <div className="bg-glow glow-1"></div>
      <div className="bg-glow glow-2"></div>
      
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
      </main>
      <br />
      <Footer />
    </div>
  );
}

export default App;
