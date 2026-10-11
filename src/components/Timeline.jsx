export default function Timeline() {
  const experiences = [
    {
      role: "Data Engineer",
      company: "Cylinder Health",
      date: "Mar 2026 – Present",
      description: "Maintains a 1,000+ model dbt / BigQuery warehouse. Onboards new  clients end-to-end, standardizes event models, and resolves complex data contamination and production pipeline failures."
    },
    {
      role: "Caregiver & Graduate Student",
      company: "Boston University (MS Software Development)",
      date: "2020 – 2026",
      description: "Primary caregiver during my son's leukemia treatment while concurrently earning an MS in Software Development with a 4.0 GPA."
    },
    {
      role: "Maintenance Technician",
      company: "Daly Hotel Management / Hilltop Center Nursing Home",
      date: "2016 – 2020",
      description: "Managed preventive maintenance and daily work requests. Successfully refurbished 80+ rooms in a six-month period."
    },
    {
      role: "Maintenance Technician II",
      company: "Tanglewood Park",
      date: "2007 – 2013",
      description: "Rolled out a maintenance management software system to 9 parks and 100+ staff. Conducted training sessions and managed pool operations for a five-pool aquatics facility."
    }
  ];

  return (
    <section id="resume" className="timeline-section">
      <h2 className="section-title">Experience</h2>
      
      <div className="timeline-container">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <span className="timeline-date">{exp.date}</span>
            <h3 className="timeline-role">{exp.role}</h3>
            <div className="timeline-company">{exp.company}</div>
            <p className="timeline-desc">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}