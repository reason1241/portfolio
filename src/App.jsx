const jobs = [
  { company: 'OVERDARE', role: 'Data Engineer', dates: 'May 2024 – Oct 2024', summary: 'Worked on data processing pipelines for game log data.', points: [
    'Maintained dbt transformations in Snowflake.',
    'Monitored Kafka-based streaming pipelines on Kubernetes and investigated pipeline failures.',
  ] },
  { company: 'NHN DATA', dates: 'Feb 2024 – May 2024', summary: 'Built a customer support chatbot for the AceCounter analytics platform using retrieval-augmented generation.', points: [
    'Developed the backend with LangChain, OpenAI API, and Pinecone.',
    'Curated product documentation and engineered prompts for customer questions.',
  ] },
  { company: 'NHN', dates: 'Mar 2021 – Feb 2024', summary: 'Built analytics services, data pipelines, and cloud infrastructure for marketing and customer analytics.', points: [
    'Developed GA4 pipelines with Airflow, BigQuery, and Athena, alongside a Django/Celery backend.',
    'Managed infrastructure with Terraform and deployed services on AWS EKS, including authentication, autoscaling, and logging.',
    'Built REST APIs to launch Spark processing on Amazon EMR for predictive metrics using purchase data from NHN Group companies and Shopify merchants.',
  ] },
  { company: 'NHN PAYCO', dates: 'Jan 2019 – Mar 2021', summary: 'Built internal analytics infrastructure, distributed data pipelines, and a unified query service spanning multiple database engines.', points: [
    'Contributed to a self-service analytics platform using Airflow and Metabase across two Hadoop clusters.',
    'Built a Java/Spring Boot query gateway and JDBC driver supporting concurrent queries, aggregation, failover, and fastest-response selection.',
    'Developed Spark pipelines for advertising identifiers and application logs.',
  ] },
];
const projects = [
  { name: 'Speed Camera Map', type: 'Personal project', description: 'Built and deployed an interactive speed-camera map with a FastAPI backend and address-based search. Developed preprocessing scripts for public geospatial data and automated daily updates on Oracle Cloud. Integrated Naver Maps for visualization and VWorld for address search.', stack: 'Python · FastAPI · JavaScript · Oracle Cloud', links: [['Live site', 'https://speedcameramap.mschoi.com/']] },
  {
    name: 'AI Pre-Visit Assistant',
    type: 'Georgia Tech · Team project',
    description: 'Built FastAPI APIs for a patient appointment-preparation assistant, retrieving and parsing six FHIR resource types and preprocessing de-identified MIMIC-IV-FHIR data. Integrated Gemini and LangChain retrieval, developed React login, notepad, and chat-history features, and deployed the unified service on GCP.',
    stack: 'Python · FastAPI · React · FHIR · Gemini · LangChain · GCP',
    links: [['Presentation & demo', 'https://www.youtube.com/watch?v=WSCLfOhazjw']],
  },
  { name: 'Precipitation Nowcasting', type: 'Georgia Tech · Team project', description: 'Implemented SmaAt-UNet in PyTorch to predict precipitation from NOAA NEXRAD radar data. Implemented Balanced MSE, Balanced MAE, and SSIM losses, along with FSS and RAPSD evaluation metrics. Trained and evaluated three architectures across five loss functions on an H100 GPU.', stack: 'Python · PyTorch · NOAA NEXRAD', links: [['GitHub', 'https://github.com/reason1241/ClearSky-LSTM']] },
  { name: 'Trend Feed', type: 'Personal project', description: 'Built a browser extension that replaces the new-tab page with an RSS dashboard. Added RSS and Atom feed support, local storage for feed preferences, and automated release packaging for Chrome and Microsoft Edge.', stack: 'JavaScript · Manifest V3 · RSS / Atom · GitHub Actions', links: [['Live demo', 'https://mschoi.com/trend-feed/'], ['GitHub', 'https://github.com/reason1241/trend-feed']] },
];
function Link({ href, children, ...props }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" {...props}>{children}</a>;
}
export function App() {
  return <>
    <a className="skip-link" href="#experience">Skip to experience</a>
    <main className="page">
      <header className="intro">
        <h1>Myeongsun Choi</h1>
        <p className="role">Software &amp; Data Engineer</p>
        <p className="bio">Software and data engineer with six years of industry experience, currently pursuing an M.S. in Computer Science at Georgia Tech to deepen my understanding of machine learning and the systems behind it.</p>
        <nav className="contact-links" aria-label="Contact and profiles">
          <a href="mailto:reason1241@gmail.com">Email</a>
          <Link href="https://github.com/reason1241">GitHub</Link>
          <Link href="https://www.linkedin.com/in/myeongsun-choi/">LinkedIn</Link>
          <Link href="./resume.pdf" aria-label="Open resume PDF">Resume<span className="file-type"> PDF</span></Link>
          <Link href="https://docs.google.com/presentation/d/1HTjxQ45qR_qIDijBXwyvtyPq-idUJUZbIJhXeg77kl8/edit?usp=sharing">Detailed portfolio</Link>
        </nav>
      </header>
      <section id="experience" aria-labelledby="experience-heading">
        <h2 id="experience-heading">Selected experience</h2>
        <div className="entries">{jobs.map(job => <article key={job.company} className="job">
          <div className="entry-heading"><h3>{job.company}<span className="job-role"><span className="role-divider"> · </span>{job.role ?? 'Software Engineer'}</span></h3><p className="dates">{job.dates}</p></div>
          <p>{job.summary}</p>
          <ul>{job.points.map(point => <li key={point}>{point}</li>)}</ul>
        </article>)}</div>
      </section>
      <section id="work" aria-labelledby="work-heading">
        <h2 id="work-heading">Selected work</h2>
        <div className="entries">{projects.map(project => <article key={project.name} className="project">
          <div className="entry-heading"><h3>{project.name}</h3><div className="project-links">{project.links.map(([label, href]) => <Link key={label} href={href} aria-label={`${project.name}: ${label}`}>{label}</Link>)}</div></div>
          <p className="entry-label">{project.type}</p>
          <p>{project.description}</p>
          <p className="stack">{project.stack}</p>
        </article>)}</div>
      </section>
      <section id="education" aria-labelledby="education-heading">
        <h2 id="education-heading">Education</h2>
        <div className="entries education-entries">
          <article><div className="entry-heading"><h3>Georgia Institute of Technology</h3><p className="dates">Expected Dec 2026</p></div><p>M.S. in Computer Science · Machine Learning specialization</p></article>
          <article><div className="entry-heading"><h3>Inha University</h3><p className="dates">Feb 2019</p></div><p>B.S. in Computer Engineering</p></article>
        </div>
      </section>
      <footer><p>Have something in mind? <a href="mailto:reason1241@gmail.com">Let’s talk.</a></p><Link href="https://mschoi.com/">More projects</Link></footer>
    </main>
  </>;
}
