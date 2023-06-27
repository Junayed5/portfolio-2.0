import './App.css';
import AboutMe from './components/AboutMe';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Skills from './components/Skills';

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <AboutMe/>
      <Skills/>
    </div>
  );
}

export default App;
