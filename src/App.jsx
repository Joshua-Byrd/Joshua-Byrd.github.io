import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import About from './pages/About';
import Resume from './pages/Resume';
import Blog from './pages/Blog';


function App() {
  return (
    <Router>
      <div className="app-container">
        <header>
          <nav className="site-nav">
            <Link to="/" className="site-logo">JB.</Link>
            <ul className="nav-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/resume">Resume</Link></li>
              <li><Link to="/blog">Blog</Link></li>
            </ul>
          </nav>
        </header>

        <main>
          {/* This is where the URL dictates what component renders */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;