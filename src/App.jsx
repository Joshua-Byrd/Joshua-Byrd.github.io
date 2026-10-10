import './index.css';
import Hero from './components/Hero';
import ProjectsGrid from './components/ProjectsGrid';
import Timeline from './components/Timeline'; 

function App() {
  return (
    <div className="app-container">
      <header>
        <nav className="site-nav">
          <h1 className="site-logo">JB.</h1>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#resume">Resume</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <Hero />
        <ProjectsGrid />
        <Timeline />
      </main>
    </div>
  );
}

export default App;