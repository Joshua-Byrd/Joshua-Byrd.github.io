export default function ProjectsGrid() {
  // Storing projects in an array makes it easy to add or edit them later
  const projects = [
    {
      title: "Fitness App Database",
      description: "Designed a normalized PostgreSQL schema for workouts and nutrition tracking. Implemented stored procedures and triggers for data integrity.",
      tech: ["PostgreSQL", "SQL", "Database Design"],
      link: "#"
    },
    {
      title: "Headline Analysis Pipeline",
      description: "Python application utilizing NewsAPI to aggregate and analyze headlines, evaluating relationships between media bias, reliability, and sentiment.",
      tech: ["Python", "Pandas", "NewsAPI"],
      link: "#"
    },
    {
      title: "Desolate Depths",
      description: "Java-based text adventure inspired by classics like Zork. Players explore a dungeon, fight monsters, and collect loot.",
      tech: ["Java", "SQLite", "Multithreading", "OOP"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Featured Work</h2>
      
      <div className="projects-grid">
        {/* We map over the array to generate a card for each project */}
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.description}</p>
            <div className="tech-stack">
              {project.tech.map((tag, tagIndex) => (
                <span key={tagIndex} className="tech-tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}