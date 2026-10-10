import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="hero-section">
      <h2 className="hero-name">Joshua Byrd</h2>
      <h3 className="hero-title">Data Engineer</h3>
      
      <p className="hero-description">
        Building reliable data pipelines, maintaining 1,000+ model data warehouses, and ensuring data quality from ingestion to insight. 
      </p>

      <div className="hero-journey-box">
        <p className="hero-journey-text">
          <strong>My Journey:</strong> From facilities maintenance to building complex data architectures. I bring a non-traditional background rooted in resilience, systems thinking, and a relentless drive to master new technologies.
        </p>
        <Link to="/about" className="hero-journey-link">
          Read more about my transition &rarr;
        </Link>
      </div>
    </section>
  );
}