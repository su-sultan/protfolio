import { useState } from 'react';

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

const projects = [
  {
    title: 'DevConnect Platform',
    description:
      'A social platform for developers to share ideas, collaborate on projects, and grow together.',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
    github: '#',
    demo: '#',
  },
  {
    title: 'TaskFlow Dashboard',
    description:
      'A productivity dashboard with analytics, team boards, and automation workflows for modern teams.',
    image:
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80',
    github: '#',
    demo: '#',
  },
  {
    title: 'E-Learn Hub',
    description:
      'An interactive learning portal with personalized course recommendations and progress tracking.',
    image:
      'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80',
    github: '#',
    demo: '#',
  },
];

const skills = {
  Frontend: [
    { name: 'React.js', level: 92 },
    { name: 'JavaScript (ES6+)', level: 90 },
    { name: 'HTML5 / CSS3', level: 95 },
    { name: 'Tailwind CSS', level: 84 },
  ],
  Backend: [
    { name: 'Node.js', level: 80 },
    { name: 'Express.js', level: 78 },
    { name: 'REST APIs', level: 85 },
    { name: 'MongoDB', level: 75 },
  ],
  Tools: [
    { name: 'Git & GitHub', level: 88 },
    { name: 'Figma', level: 72 },
    { name: 'Postman', level: 82 },
    { name: 'VS Code', level: 93 },
  ],
  Languages: [
    { name: 'JavaScript', level: 91 },
    { name: 'TypeScript', level: 78 },
    { name: 'Python', level: 73 },
    { name: 'SQL', level: 70 },
  ],
};

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Frontend');

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="navbar">
        <a className="logo" href="#home">
          DevPortfolio
        </a>
        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={`nav-links ${menuOpen ? 'show' : ''}`}>
          {navLinks.map((link) => (
            <a key={link.id} href={`#${link.id}`} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <section id="home" className="section hero">
          <div className="hero-content">
            <p className="chip">👋 Hello, I am</p>
            <h1>Alex Carter</h1>
            <h2>Frontend Developer crafting modern digital experiences</h2>
            <p>
              I build responsive, performant, and user-friendly web applications
              with a strong focus on clean architecture and delightful UI.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">
                View Projects
              </a>
              <a href="#" className="btn btn-outline" download>
                Download CV
              </a>
            </div>
          </div>
          <div className="hero-image-wrap">
            <img
              src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?auto=format&fit=crop&w=900&q=80"
              alt="Developer portrait"
              className="hero-image"
            />
          </div>
        </section>

        <section id="about" className="section">
          <h3 className="section-title">About Me</h3>
          <div className="about-grid">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80"
              alt="Working as a developer"
              className="about-image"
            />
            <div>
              <p>
                I am a passionate developer with a background in computer science
                and a deep curiosity for building impactful products. I enjoy
                turning complex challenges into elegant, intuitive interfaces.
              </p>
              <p>
                My interests include performance optimization, design systems,
                and creating accessible user experiences that feel smooth across
                all devices.
              </p>
              <p>
                My goal is to contribute to meaningful projects, collaborate
                with inspiring teams, and continuously improve as a software
                engineer.
              </p>
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <h3 className="section-title">Projects</h3>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <img src={project.image} alt={project.title} />
                <div className="project-content">
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                  <div className="project-actions">
                    <a href={project.github}>GitHub</a>
                    <a href={project.demo}>Live Demo</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="section">
          <h3 className="section-title">Skills</h3>
          <div className="tabs" role="tablist" aria-label="Skill categories">
            {Object.keys(skills).map((category) => (
              <button
                key={category}
                className={`tab ${activeTab === category ? 'active' : ''}`}
                onClick={() => setActiveTab(category)}
                role="tab"
                aria-selected={activeTab === category}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="skills-list">
            {skills[activeTab].map((skill) => (
              <div key={skill.name} className="skill-item">
                <div className="skill-top">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="progress-track">
                  <div className="progress-fill" style={{ width: `${skill.level}%` }} />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact">
          <h3 className="section-title">Get in Touch</h3>
          <div className="contact-grid">
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <label>
                Name
                <input type="text" placeholder="Your name" required />
              </label>
              <label>
                Email
                <input type="email" placeholder="you@example.com" required />
              </label>
              <label>
                Message
                <textarea rows="5" placeholder="Let's work together..." required />
              </label>
              <button className="btn btn-primary" type="submit">
                Send Message
              </button>
            </form>
            <aside className="contact-info">
              <h4>Contact Information</h4>
              <p>Email: alex.carter@example.com</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Location: San Francisco, CA</p>
              <div className="social-links">
                <a href="#">GitHub</a>
                <a href="#">LinkedIn</a>
                <a href="#">Twitter</a>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Alex Carter. All rights reserved.</p>
        <div className="social-links">
          <a href="#">GitHub</a>
          <a href="#">LinkedIn</a>
          <a href="#">Dribbble</a>
        </div>
      </footer>
    </>
  );
}

export default App;
