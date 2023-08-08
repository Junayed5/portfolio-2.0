import './App.css';
import AboutMe from './components/AboutMe';
import ContactMe from './components/ContactMe';
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
      <ContactMe/>
    </div>
  );
}

export default App;
