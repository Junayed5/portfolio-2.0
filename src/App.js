import './App.css';
import AboutMe from './components/AboutMe';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Services from './components/Services';
import Skills from './components/Skills';

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <AboutMe/>
      <Services/>
      <Skills/>
      <Projects/>
    </div>
  );
}

export default App;
