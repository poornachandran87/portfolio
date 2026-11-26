import './App.css';
import About from './components/About';
import Certificate from './components/Certificate';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Skills from './components/Skills';

function App() {
  return (
    <div className="min-h-screen bg-secondary text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certificate />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
