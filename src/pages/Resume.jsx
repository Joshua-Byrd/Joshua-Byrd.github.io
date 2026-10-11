export default function Resume() {
  const experiences = [
    {
      title: "Data Engineer",
      company: "Cylinder Health",
      date: "Mar 2026 – Present",
      bullets: [
        "Routinely onboards new clients end-to-end across multiple pipelines: eligibility and claims ingestion, demographic feeds, and reporting/billing setup.",
        "Implemented dbt-osmosis, populating YAML configuration files across the entire data warehouse",
        "Standardized numerous silver-layer event models onto one shared contract (naming, timestamps, latest-record flags, null guards) and updated downstream models.",
        "Discovered and fixed a bug within the claims ingestion causing members to be billed to the wrong client.",
        "Routinely analyzes and fixes failures within the data warehouse update Airflow DAG.",
        "Built targeting models for monthly email and direct-mail campaigns for one of the largest clients.",
      ]
    },
    {
      title: "Caregiver & Graduate Student",
      company: "Full-Time",
      date: "2020 – 2026",
      bullets: [
        "Primary caregiver for my son during multi-year leukemia treatment, managing all medical appointments, medications, and household responsibilities.",
        "Demonstrated resilience, time-management, and commitment by balancing intensive caregiving with a full academic workload.",
        "Simultaneously completed graduate studies, earning an MS in Software Development from Boston University with a 4.0 GPA."
      ]
    },
    {
      title: "Maintenance Technician",
      company: "Daly Hotel Management",
      date: "2019 – 2020",
      bullets: [
        "Coordinated with Chief Engineer to oversee major renovation to all floors of the hotel.",
        "Conducted building-wide routine maintenance and handled larger projects such as floor-wide hardware replacements.",
        "Conducted regular safety inspections of fire suppression equipment and ladders."
      ]
    },
    {
      title: "Maintenance Technician",
      company: "Hilltop Center Nursing Home",
      date: "2016 – 2019",
      bullets: [
        "Maintained building and grounds to OHFLAC standards, ensuring the safety of residents and staff.",
        "Routinely served as interim maintenance director in director’s absence, managing preventive maintenance and dozens of daily work requests.",
        "Refurbished 80+ rooms over a six-month span."
      ]
    },
    {
      title: "Maintenance Technician II",
      company: "Tanglewood Park",
      date: "2007 – 2013",
      bullets: [
        "Deployed Maintenance Edge CMMS to the entire Parks and Recreation Department, including nine parks and 100+ maintenance personnel.",
        "Conducted all regular safety inspections, authored multiple job hazard analyses, and acted as liaison to OSHA and risk management division.",
        "Oversaw pool operations for Peter S. Brunstetter Aquatics Facility (CPO and AFO certified), supervising two operators and three seasonal helpers."
      ]
    }
  ];

  return (
    <section className="resume-page">
      <div className="resume-header">
        <h2 className="section-title" style={{ marginBottom: 0 }}>Resume</h2>
        {/* Note: Place your PDF file in the 'public' folder of your Vite project */}
        <a href="/Joshua_Byrd_Resume_Oct_2026.pdf" download className="download-btn">
          Download PDF
        </a>
      </div>

      <div className="resume-section">
        <h3>Summary</h3>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', maxWidth: '800px' }}>
          Data engineer maintaining a 1,000+ model dbt / BigQuery warehouse for a digital health company. I handle client data onboarding, data quality, and root-causing production incidents. MS in Software Development (Boston University, 4.0) with a non-traditional background rooted in operational resilience and systems thinking.
        </p>
      </div>

      <div className="resume-section">
        <h3>Skills</h3>
        <div className="resume-grid">
          <div>
            <strong style={{ color: 'var(--text-main)' }}>Data & Platforms</strong>
            <ul className="resume-list">
              <li>SQL (BigQuery, PostgreSQL, MySQL, SQLite)</li>
              <li>dbt (models, tests, snapshots, seeds, macros)</li>
              <li>Google Cloud (BigQuery, Cloud Storage, Pub/Sub)</li>
              <li>Airflow / Cloud Composer</li>
              <li>Docker</li>
            </ul>
          </div>
          <div>
            <strong style={{ color: 'var(--text-main)' }}>Languages & Practices</strong>
            <ul className="resume-list">
              <li>Python (Pandas, NumPy)</li>
              <li>Java & JavaScript</li>
              <li>Database Design & Normalization</li>
              <li>Git/GitHub & CI/CD</li>
              <li>Linux/Bash</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="resume-section">
        <h3>Experience</h3>
        {experiences.map((job, index) => (
          <div key={index} style={{ marginBottom: '2.5rem' }}>
            <div className="job-header">
              <h4 className="job-title">{job.title}</h4>
              <span className="job-date">{job.date}</span>
            </div>
            <div className="job-company">{job.company}</div>
            <ul className="resume-list">
              {job.bullets.map((bullet, bIndex) => (
                <li key={bIndex}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="resume-section" style={{ marginBottom: 0 }}>
        <h3>Education</h3>
        <div style={{ marginBottom: '1.5rem' }}>
          <div className="job-header">
            <h4 className="job-title">Boston University</h4>
            <span className="job-date">2023 – 2025</span>
          </div>
          <div className="job-company">Master of Science in Software Development</div>
          <ul className="resume-list">
            <li>Graduated with 4.0 GPA.</li>
            <li>Relevant coursework: Database Design, Data Structures & Algorithms, Systems Programming.</li>
          </ul>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <div className="job-header">
            <h4 className="job-title">University of Pennsylvania</h4>
            <span className="job-date">2021 – 2023</span>
          </div>
          <div className="job-company">Master of Computer and Information Technology (Transferred)</div>
          <ul className="resume-list">
            <li>Maintained 3.72 GPA throughout all courses before transferring to Boston University.</li>
          </ul>
        </div>

        <div>
          <div className="job-header">
            <h4 className="job-title">West Virginia University</h4>
            <span className="job-date">2016 – 2020</span>
          </div>
          <div className="job-company">Bachelor of Multidisciplinary Studies</div>
          <ul className="resume-list">
            <li>Graduated summa cum laude with 4.0 GPA.</li>
            <li>Minors: Business Administration, Professional Writing & Editing, Psychology.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}