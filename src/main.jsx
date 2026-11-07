import React from 'react'
import { createRoot } from 'react-dom/client'
import {
  ArrowDown,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Code2,
  Database,
  Cloud,
  Award,
  Menu,
  X,
  BriefcaseBusiness,
} from 'lucide-react'
import './style.css'

const profile = {
  name: 'Dharshan P S',
  email: 'dharshan280706@gmail.com',
  linkedin: 'https://www.linkedin.com/in/dharshanps',
  github: 'https://github.com/Dharshan-P-S',
  phone: '+91 7010449315',
}

const projects = [
  {
    number: '01',
    title: 'AskNFix',
    subtitle: 'Complaint Management System',
    description:
      'A complaint management platform for appliance-related maintenance requests across hostels and classrooms, with separate student and staff workflows.',
    highlights: [
      'Complaint creation, assignment and status tracking',
      'Role-based access and resolution management',
      'MySQL on AWS RDS; backend on EC2 and frontend on S3',
    ],
    stack: ['Spring Boot', 'React', 'MySQL', 'AWS EC2', 'AWS S3', 'AWS RDS'],
    github: 'https://github.com/Dharshan-P-S/AskNFix-SpringBoot',
    featured: true,
    type: 'Full-stack application',
  },
  {
    number: '02',
    title: 'Smart Finance Tracker',
    subtitle: 'Personal Finance Management',
    description:
      'A MERN-stack finance tracker that helps users manage income, expenses, savings and financial goals through natural-language input.',
    highlights: [
      'Add transactions and goals using natural language with Wit.ai',
      'Track spending limits and savings goals',
      'Support for backdated entries and cumulative savings',
    ],
    stack: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Wit.ai'],
    github: 'https://github.com/Dharshan-P-S/Smart_tracker',
    type: 'Full-stack application',
  },
  {
    number: '03',
    title: '311 Service Request Prioritization',
    subtitle: 'Urban Issue Analytics Dashboard',
    description:
      'A team project that analyzes 311 service requests and ranks urban issues using complaint frequency, severity and average resolution time.',
    highlights: [
      'Processed and analyzed service-request data',
      'Generated priority scores for urban issues',
      'Built an interactive Streamlit dashboard for analysis and visualization',
    ],
    stack: ['Python', 'Streamlit'],
    github: 'https://github.com/Dharshan-P-S/311-Service-Requests',
    type: 'Data analytics · Team project',
  },
]

const skillGroups = [
  { title: 'Programming languages', icon: Code2, items: ['C', 'C++', 'Java', 'Python', 'JavaScript', 'SQL'] },
  { title: 'Frontend', icon: Code2, items: ['React', 'HTML', 'CSS', 'Tailwind CSS'] },
  {
    title: 'Backend & frameworks',
    icon: BriefcaseBusiness,
    items: ['Spring Boot', 'Node.js', 'Express.js', 'MERN Stack', 'REST APIs', 'Streamlit'],
  },
  { title: 'Databases', icon: Database, items: ['MySQL', 'MongoDB'] },
  {
    title: 'Cloud & tools',
    icon: Cloud,
    items: ['AWS EC2', 'AWS S3', 'AWS RDS', 'Azure Virtual Machines', 'Git', 'GitHub', 'VS Code'],
  },
]

const coursework =
  'Data Structures and Algorithms · Operating Systems · Software Engineering · Artificial Intelligence · Object-Oriented Programming · Database Management Systems · Computer Networks · DevOps · Compiler Design'

function Header() {
  const [menuOpen, setMenuOpen] = React.useState(false)
  const links = [
    ['About', '#about'],
    ['Skills', '#skills'],
    ['Projects', '#projects'],
    ['Education', '#education'],
    ['Contact', '#contact'],
  ]

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <a className="brand" href="#home" aria-label="Dharshan home">
          Dharshan P S
        </a>

        <nav className={menuOpen ? 'nav-links show' : 'nav-links'} aria-label="Main navigation">
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
        </nav>

        <a className="nav-cta" href="#contact">
          Let&apos;s connect <ArrowUpRight size={17} aria-hidden="true" />
        </a>

        <button
          className="menu-toggle"
          type="button"
          onClick={() => setMenuOpen((current) => !current)}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>
    </header>
  )
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  )
}

function App() {
  return (
    <>
      <Header />

      <main>
        <section id="home" className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="availability">
                <span className="pulse" />
                COMPUTER SCIENCE &amp; ENGINEERING
              </div>

              <p className="intro">Hello, I&apos;m</p>
              <h1>
                Dharshan <span>P S.</span>
              </h1>
              <h2 className="hero-role">I build thoughtful digital experiences.</h2>
              <p className="hero-description">
                I&apos;m a Computer Science and Engineering student interested in full-stack
                development, backend systems and data-driven applications. I enjoy turning ideas
                into useful, well-structured software.
              </p>

              <div className="hero-actions">
                <a className="button button-primary" href="#projects">
                  Explore my work <ArrowUpRight size={18} />
                </a>
                <a className="button button-secondary" href="#contact">
                  Get in touch <Mail size={17} />
                </a>
              </div>

              <div className="social-row">
                <a href={profile.github} target="_blank" rel="noreferrer">
                  <Github size={19} /> GitHub
                </a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                  <Linkedin size={19} /> LinkedIn
                </a>
                <span>
                  <MapPin size={18} /> India
                </span>
              </div>
            </div>

            <div className="hero-visual">
              <div className="photo-frame">
                <img src="/profile.png" alt="Professional portrait of Dharshan P S" />
                <div className="photo-caption">
                  <span className="caption-dot" />
                  <span>Building · Learning · Improving</span>
                </div>
              </div>
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
              <div className="hero-tag tag-top">
                <Code2 size={18} /> Full-stack development
              </div>
              <div className="hero-tag tag-bottom">
                <Database size={18} /> Data &amp; backend systems
              </div>
            </div>
          </div>

          <a className="scroll-cue" href="#about">
            <span>SCROLL TO EXPLORE</span>
            <ArrowDown size={16} />
          </a>
        </section>

        <section id="about" className="section">
          <div className="container about-grid">
            <div>
              <SectionHeading
                eyebrow="A LITTLE ABOUT ME"
                title={
                  <>
                    Curious by nature.
                    <br />
                    Builder by practice.
                  </>
                }
              />
              <p className="body-copy">
                I am pursuing a Bachelor of Engineering in Computer Science and Engineering at the
                College of Engineering Guindy, Anna University. My interests span application
                development, APIs, databases and cloud technologies.
              </p>
              <p className="body-copy">
                Through academic and personal projects, I&apos;ve worked with technologies such as
                React, Spring Boot, the MERN stack, Python, MySQL and AWS. I value clear
                problem-solving, continuous learning and building software that solves practical
                problems.
              </p>
              <a className="text-link" href={profile.github} target="_blank" rel="noreferrer">
                Explore my GitHub <ArrowUpRight size={17} />
              </a>
            </div>

            <div className="about-facts">
              <div className="fact-card">
                <span className="fact-label">EDUCATION</span>
                <strong>B.E. Computer Science</strong>
                <small>College of Engineering Guindy</small>
              </div>
              <div className="fact-card">
                <span className="fact-label">CURRENT FOCUS</span>
                <strong>Full-stack development</strong>
                <small>Backend · APIs · Cloud · Data</small>
              </div>
              <div className="fact-card">
                <span className="fact-label">APPROACH</span>
                <strong>Learn by building</strong>
                <small>Projects, collaboration and iteration</small>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section section-tint">
          <div className="container">
            <SectionHeading
              eyebrow="MY TOOLKIT"
              title="Skills & technologies"
              description="Tools and technologies I have used across coursework and projects."
            />

            <div className="skills-grid">
              {skillGroups.map((group) => {
                const Icon = group.icon
                return (
                  <article className="skill-card" key={group.title}>
                    <div className="skill-title">
                      <span className="icon-box">
                        <Icon size={21} />
                      </span>
                      <h3>{group.title}</h3>
                    </div>
                    <div className="chips">
                      {group.items.map((item) => (
                        <span className="chip" key={item}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </article>
                )
              })}
            </div>

            <div className="coursework">
              <span>RELEVANT COURSEWORK</span>
              <p>{coursework}</p>
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="container">
            <SectionHeading
              eyebrow="SELECTED WORK"
              title="Projects I&apos;ve built"
              description="A selection of applications and data projects from my learning journey."
            />

            <div className="projects-list">
              {projects.map((project) => (
                <article
                  className={project.featured ? 'project-card featured' : 'project-card'}
                  key={project.number}
                >
                  <div className="project-top">
                    <span className="project-number">{project.number} / 03</span>
                    <span className="project-type">{project.type}</span>
                  </div>

                  <div className="project-content">
                    <div>
                      <h3>{project.title}</h3>
                      <h4>{project.subtitle}</h4>
                      <p className="project-description">{project.description}</p>

                      <ul className="highlight-list">
                        {project.highlights.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>

                      <div className="chips project-chips">
                        {project.stack.map((item) => (
                          <span className="chip" key={item}>
                            {item}
                          </span>
                        ))}
                      </div>

                      <a className="project-link" href={project.github} target="_blank" rel="noreferrer">
                        <Github size={18} /> View source code <ArrowUpRight size={16} />
                      </a>
                    </div>

                    <div className="project-mark" aria-hidden="true">
                      <span>{project.number}</span>
                      <Code2 size={38} />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="section section-tint">
          <div className="container education-grid">
            <div>
              <SectionHeading
                eyebrow="MY BACKGROUND"
                title="Education"
                description="Academic foundation and professional learning."
              />

              <div className="timeline">
                <article className="timeline-item">
                  <span className="timeline-dot" />
                  <div className="timeline-date">AUG 2023 — JUL 2027</div>
                  <h3>Bachelor of Engineering</h3>
                  <h4>Computer Science and Engineering</h4>
                  <p>College of Engineering Guindy, Anna University, Chennai</p>
                  <span className="result-pill">CGPA: 8.12 · Up to 6th semester</span>
                </article>

                <article className="timeline-item">
                  <span className="timeline-dot" />
                  <div className="timeline-date">2023</div>
                  <h3>Higher Secondary Certificate (HSC)</h3>
                  <h4>Veveaham Matric Higher Secondary School</h4>
                  <p>Percentage: 95.17%</p>
                </article>

                <article className="timeline-item">
                  <span className="timeline-dot" />
                  <div className="timeline-date">2021</div>
                  <h3>Secondary School Leaving Certificate (SSLC)</h3>
                  <h4>Veveaham Matric Higher Secondary School</h4>
                </article>
              </div>
            </div>

            <div className="cert-column">
              <div className="cert-heading">
                <span className="icon-box">
                  <Award size={22} />
                </span>
                <div>
                  <span className="eyebrow">CONTINUOUS LEARNING</span>
                  <h2>Certifications</h2>
                </div>
              </div>

              <article className="cert-card">
                <div className="cert-icon">N</div>
                <div>
                  <h3>Python for Data Science</h3>
                  <p>NPTEL · Jul 2025 – Aug 2025</p>
                  <span className="cert-score">Score: 92%</span>
                </div>
              </article>

              <article className="cert-card">
                <div className="cert-icon">I</div>
                <div>
                  <h3>Introduction to Python</h3>
                  <p>Infosys Springboard · Jun 2025</p>
                </div>
              </article>

              <p className="cert-note">
                Certificate images can be added here later. The details above are from my resume.
              </p>

              <div className="activity-card">
                <span className="eyebrow">BEYOND THE CLASSROOM</span>
                <h3>Quizzers Anonymous</h3>
                <p>
                  Member · Assisted with planning and on-ground coordination of quiz events
                  conducted by the club.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container contact-panel">
            <div>
              <span className="eyebrow">HAVE A PROJECT OR OPPORTUNITY?</span>
              <h2>
                Let&apos;s build something
                <br />
                <span>meaningful.</span>
              </h2>
              <p>
                I&apos;m interested in connecting with people, learning about opportunities and
                discussing ideas in technology.
              </p>
            </div>

            <div className="contact-details">
              <a href={`mailto:${profile.email}`}>
                <span className="contact-icon">
                  <Mail size={20} />
                </span>
                <span>
                  <small>EMAIL</small>
                  {profile.email}
                </span>
                <ArrowUpRight size={18} />
              </a>

              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                <span className="contact-icon">
                  <Linkedin size={20} />
                </span>
                <span>
                  <small>LINKEDIN</small>
                  linkedin.com/in/dharshanps
                </span>
                <ArrowUpRight size={18} />
              </a>

              <a href={profile.github} target="_blank" rel="noreferrer">
                <span className="contact-icon">
                  <Github size={20} />
                </span>
                <span>
                  <small>GITHUB</small>
                  github.com/Dharshan-P-S
                </span>
                <ArrowUpRight size={18} />
              </a>

              <a href={`tel:${profile.phone.replaceAll(' ', '')}`}>
                <span className="contact-icon">
                  <BriefcaseBusiness size={20} />
                </span>
                <span>
                  <small>PHONE</small>
                  {profile.phone}
                </span>
                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <a className="back-to-top" href="#home">
            Back to top <ArrowUpRight size={16} />
          </a>
          <p>Designed &amp; built by Dharshan P S</p>
        </div>
      </footer>
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
