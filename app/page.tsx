'use client'

import { useState, useEffect, useRef } from 'react'
import './styles.css'

const GithubIcon = () => (
  <img src="/icons/github.svg" width="30" alt="GitHub" />
)
const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
)
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
)
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
)
const ChevronRightIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
)
const ChevronDownIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
)
const FlameIcon = () => (
  <svg viewBox="0 0 24 24" fill="white" width="20" height="20"><path d="M12 2s-5.5 4.5-5.5 10a5.5 5.5 0 0 0 11 0C17.5 6.5 12 2 12 2zm0 15.5a3 3 0 0 1-3-3c0-2.5 2-5 3-6.5 1 1.5 3 4 3 6.5a3 3 0 0 1-3 3z"/></svg>
)

const skills = [
  { label: 'JavaScript', icon: '/icons/js.png', color: '#F7DF1E', bg: '#2a2700' },
  { label: 'TypeScript', icon: '/icons/typescript.png', color: '#3178C6', bg: '#0d1f3c' },
  { label: 'Python',     icon: '/icons/python.png', color: '#3776AB', bg: '#0d1e2e' },
  { label: 'PHP',        icon: '/icons/php.png', color: '#777BB4', bg: '#1a1a2e' },
  { label: 'C++',        icon: '/icons/c-.png', color: '#00599C', bg: '#001a2e' },
  { label: 'C#',         icon: '/icons/c-sharp.png', color: '#239120', bg: '#0a1f0a' },
  { label: 'React',      icon: '/icons/react.png', color: '#61DAFB', bg: '#0d2a30' },
  { label: 'Next.js',    icon: '/icons/next.svg', color: '#ffffff', bg: '#1a1a1a' },
  { label: 'Docker',     icon: '/icons/docker.png', color: '#2496ED', bg: '#0d1e30' },
  { label: 'Redis',      icon: '/icons/redis.png', color: '#DC382D', bg: '#2a0d0d' },
  { label: 'Postgres',   icon: '/icons/postgres.png', color: '#336791', bg: '#0d1a25' },
  { label: 'MySQL',      icon: '/icons/mysql.png', color: '#CC2927', bg: '#2a0d0d' },
  { label: 'Django',     icon: '/icons/django.png', color: '#44B78B', bg: '#0a1f15' },
  { label: 'Flask',      icon: '/icons/Flask.png', color: '#cccccc', bg: '#1a1a1a' },
  { label: 'Git',        icon: '/icons/Git.png', color: '#F05032', bg: '#2a1208' },
  { label: 'GH Actions', icon: '/icons/github-actions.png', color: '#2088FF', bg: '#0d1a30' },
  { label: 'Bash',       icon: '/icons/Bash.png', color: '#4EAA25', bg: '#0a1f0a' },
  { label: 'Linux',      icon: '/icons/Linux.png', color: '#FCC624', bg: '#2a2200' },
  { label: 'Node.js',    icon: '/icons/Node.js.png', color: '#339933', bg: '#0a1f0a' },
  { label: 'Express',    icon: '/icons/Express.png', color: '#cccccc', bg: '#1a1a1a' },
  { label: 'Laravel',    icon: '/icons/Laravel.png', color: '#FF2D20', bg: '#2a0d0d' },
  { label: 'MongoDB',    icon: '/icons/MongoDB.png', color: '#47A248', bg: '#0a1f0a' },
  { label: 'Vim',        icon: '/icons/Vim.png', color: '#019733', bg: '#0a1f0a' },
  { label: 'Figma',      icon: '/icons/Figma.png', color: '#019733', bg: '#0a1f0a' },
]

const projects = [
  {
    name: 'Pivot', color: '#FAC4C4',
    link: 'https://github.com/w1iii/Pivot',
    image: '/pivot.png',
    description: 'A personal stock tracking dashboard with AI-powered analysis. Built to help investors monitor their portfolios with real-time data and intelligent insights.',
    features: [
      'User Authentication — Secure signup and login with JWT-based authentication',
      'Personal Watchlist — Create and manage your custom stock watchlist',
      'Real-time Data — Track stock prices, changes, and market statistics',
      'Interactive Charts — Visualize stock performance with dynamic price charts',
      'AI Stock Analyst — AI-powered insights and analysis for any stock (powered by Groq)',
    ],
    tech: [
      { label: 'Next.js', color: '#ffffff' }, { label: 'React', color: '#61DAFB' },
      { label: 'TypeScript', color: '#3178C6' }, { label: 'CSS', color: '#1572B6' },
      { label: 'Redis', color: '#DC382D' }, { label: 'JWT', color: '#D63AFF' },
      { label: 'Groq SDK', color: '#FF6E6E' }, { label: 'Docker', color: '#2496ED' },
    ],
  },
  {
    name: 'Campus Connect', color: '#FA9A9A',
    link: 'https://github.com/w1iii/campusconnect',
    image: '/campusconnect.png',
    description: 'A campus community platform connecting students, faculty, and staff. Enables real-time communication, event discovery, and resource sharing across departments.',
    features: [
      'Real-time messaging with Socket.io',
      'Automatic partner matching with cross-school preference',
      'Reconnection handling',
      'Partner disconnection detection',
    ],
    tech: [
      { label: 'React', color: '#61DAFB' }, { label: 'Node.js', color: '#339933' },
      { label: 'Express', color: '#cccccc' }, { label: 'MongoDB', color: '#47A248' },
      { label: 'Socket.io', color: '#999999' }, { label: 'JWT', color: '#D63AFF' },
    ],
  },
  {
    name: 'The Chef', color: '#FF6E6E',
    link: 'https://github.com/w1iii/TheChef',
    image: '/thechef.png',
    description: 'An AI-powered recipe and meal planning app. Tell it what ingredients you have, and it generates recipes, nutritional info, and a full weekly meal plan.',
    features: [
      'Ingredient-based Recipe Generation — AI suggests recipes from available items',
      "AI-generated recipes using Groq's Llama model",
      'Instant recipe suggestions with title, ingredients list, and step-by-step instructions',
    ],
    tech: [
      { label: 'React', color: '#61DAFB' }, { label: 'Node.js', color: '#339933' },
      { label: 'Javascript', color: '#F7DF1E' } 
    ],
  },
  {
    name: 'Thrifty', color: '#FD3E3E',
    link: 'https://github.com/w1iii/thrifty',
    image: '/thrifty.png',
    description: 'A Tinder-style thrift shopping application that transforms the secondhand shopping experience into an engaging, swipe-based discovery platform. Built with a modern full-stack architecture.',
    features: [
      'Tinder-style card interface with drag gestures',
      'Swipe right to save (like), left to skip (pass)',
      'Protected routes with middleware verification',
      'Touch and mouse support for swiping',
    ],
    tech: [
      { label: 'Next.js', color: '#ffffff' }, { label: 'TypeScript', color: '#3178C6' },
      { label: 'Postgres', color: '#336791' }, { label: 'Prisma', color: '#5A67D8' },
      { label: 'Docker', color: '#2496ED' }, { label: 'Laravel', color: '#FF2D20' },
    ],
  },{
    name: 'DevTalk', color: '#FD3E3E',
    link: 'https://github.com/w1iii/Developer-Knowledge-Hub',
    image: '/thrifty.png',
    description: 'A Tinder-style thrift shopping application that transforms the secondhand shopping experience into an engaging, swipe-based discovery platform. Built with a modern full-stack architecture.',
    features: [
      'Tinder-style card interface with drag gestures',
      'Swipe right to save (like), left to skip (pass)',
      'Protected routes with middleware verification',
      'Touch and mouse support for swiping',
    ],
    tech: [
      { label: 'Next.js', color: '#ffffff' }, { label: 'TypeScript', color: '#3178C6' },
      { label: 'Postgres', color: '#336791' }, { label: 'Prisma', color: '#5A67D8' },
      { label: 'Docker', color: '#2496ED' }, { label: 'Laravel', color: '#FF2D20' },
    ],
  },

]

const navItems = [
  { id: 'about',    label: 'About' },
  { id: 'skills',   label: 'Technical Skills' },
  { id: 'projects', label: 'Recent Projects' },
  { id: 'contact',  label: "Let's Work Together" },
]

export default function Home() {
  const [activeSection, setActiveSection] = useState('about')
  const [openProject, setOpenProject] = useState<string | null>('Pivot')
  const [isLoaded, setIsLoaded] = useState(false)
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down')
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({})
  const lastScrollY = useRef(0)
  const animatedSections = useRef<Set<string>>(new Set())
  const [formData, setFormData] = useState({ name: '', email: '', budget: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    try {
      const res = await fetch('/api/submitform', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (res.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', budget: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch {
      setSubmitStatus('error')
    }
    setIsSubmitting(false)
  }

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrollDirection(currentScrollY > lastScrollY.current ? 'down' : 'up')
      lastScrollY.current = currentScrollY
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const observers: IntersectionObserver[] = []
    navItems.forEach(({ id }) => {
      const el = sectionRefs.current[id]
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
        { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach(o => o.disconnect())
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    document.querySelectorAll('.scroll-animate').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [isLoaded])

  const scrollTo = (id: string) => {
    sectionRefs.current[id]?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const setRef = (id: string) => (el: HTMLElement | null) => {
    sectionRefs.current[id] = el
  }

  const activeProject = projects.find(p => p.name === openProject)

  return (
    <div className="portfolio-layout">

      {/* SIDEBAR */}
      <aside className={`sidebar ${isLoaded ? 'page-load-1' : ''}`}>

        {/* White profile card */}
        <div className={`profile-card ${isLoaded ? 'page-load-card' : ''}`}>

          <div className="avatar-wrapper">
            <div className="avatar-pattern" />
            <img src="/profile.jpg" width="140%" />
          </div>

          <p className="card-name">Lui Franz A.<br />Lomugdang</p>

          <div className="flame-badge">
            <FlameIcon />
          </div>

          <p className="card-bio">
            A Software Developer who builds efficient, scalable, and user-focused applications.
          </p>

          <div className="card-socials">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon"><GithubIcon /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon"><LinkedinIcon /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon"><InstagramIcon /></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon"><FacebookIcon /></a>
          </div>
        </div>

        {/* Nav below card */}
        <nav className={`sidebar-nav ${isLoaded ? 'page-load-3' : ''}`}>
          {navItems.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`nav-btn${activeSection === id ? ' active' : ''}`}
            >
              <span className="nav-indicator" />
              {label}
            </button>
          ))}
        </nav>

      </aside>

      {/* MAIN */}
      <main className="main-content">
        <div className="content-inner">

          <section ref={setRef('about')} id="about" className={`scroll-animate ${scrollDirection === 'down' ? 'from-bottom' : 'from-top'} ${isLoaded ? 'page-load-2' : ''}`}>
            <p className="section-label">Who I Am</p>
            <h2 className="about-heading">SOFTWARE<br /><span className="accent">DEVELOPER</span></h2>
            <p className="about-body">
              I&apos;m a software developer passionate about building efficient, scalable, and
              user-focused applications. I enjoy solving real-world problems through clean code
              and continuous learning, with experience in backend development, databases, and
              modern development tools.
            </p>
          </section>

          <section ref={setRef('skills')} id="skills" className={`scroll-animate ${isLoaded ? 'page-load-3' : ''}`}>
            <p className="section-label">Expertise</p>
            <h2 className="section-title">TECHNICAL SKILLS</h2>
            <p className="section-sub">A curated selection of my expertise</p>
            <div className="skills-grid">
              {skills.map(s => (
                <div key={s.label} className="skill-card">
                  <div className="skill-icon" style={{ background: s.bg }}>
                    <img src={s.icon} alt={s.label} width={32} height={32} style={{ objectFit: 'contain' }} />
                  </div>
                  <span className="skill-label">{s.label}</span>
                </div>
              ))}
            </div>
          </section>

          <section ref={setRef('projects')} id="projects" className="scroll-animate">
            <p className="section-label">Work</p>
            <h2 className="section-title">RECENT PROJECTS</h2>
            <p className="section-sub">
              These projects represent my continuous learning journey in software development.
              From building APIs to implementing authentication and containerization, each one
              helped me deepen my understanding of real-world development practices.
            </p>
            <div className="projects-layout">
              <div className="projects-list">
                {projects.map(p => {
                  const isOpen = openProject === p.name
                  return (
                    <button
                      key={p.name}
                      onClick={() => setOpenProject(isOpen ? null : p.name)}
                      className={`project-btn${isOpen ? ' active' : ''}`}
                      style={{ borderColor: isOpen ? p.color : '#1E252C' }}
                    >
                      <span className="project-dot" style={{ background: p.color, boxShadow: isOpen ? `0 0 8px ${p.color}90` : 'none' }} />
                      <span style={{ flex: 1 }}>{p.name}</span>
                      <span className="project-btn-chevron" style={{ color: isOpen ? p.color : 'currentColor' }}>
                        {isOpen ? <ChevronDownIcon /> : <ChevronRightIcon />}
                      </span>
                    </button>
                  )
                })}
              </div>
              <div className="project-panel">
                {activeProject ? (
                  <div key={activeProject.name} className="panel-animate" style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                    <div className="panel-header">
                      <div className="panel-dot" style={{ background: activeProject.color, boxShadow: `0 0 10px ${activeProject.color}70` }} />
                      <h3 className="panel-name">{activeProject.name}</h3>
                    </div>
                    <a href={activeProject.link} target="_blank" className="project-link">{activeProject.link}</a>
                    {activeProject.image && <img src={activeProject.image} width="400" alt={activeProject.name} />}
                    
                    <p className="panel-desc">{activeProject.description}</p>
                    <div>
                      <p className="panel-section-label">Features</p>
                      <ul className="feature-list">
                        {activeProject.features.map((f, i) => (
                          <li key={i} className="feature-item">
                            <span className="feature-bullet" style={{ background: activeProject.color }} />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="panel-section-label">Tech Stack</p>
                      <div className="tech-stack">
                        {activeProject.tech.map(t => (
                          <span key={t.label} className="tech-badge">
                            <span className="tech-dot" style={{ background: t.color }} />
                            {t.label}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="project-panel-empty">Select a project to view details</div>
                )}
              </div>
            </div>
          </section>

          <section ref={setRef('contact')} id="contact" className="scroll-animate" style={{ paddingBottom: 48 }}>
            <p className="section-label">Contact</p>
            <h2 className="section-title-form">LET&apos;S WORK <span style={{ color: '#FF6E6E' }}>TOGETHER</span></h2>
            <form className="contact-form" style={{ marginTop: 32 }} onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Name</label>
                  <input 
                    type="text" 
                    className="form-input" 
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input 
                    type="email" 
                    className="form-input" 
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Budget</label>
                <div className="form-select-wrap">
                  <select 
                    className="form-select"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  >
                    <option value="" disabled>Select...</option>
                    <option>Less than $1,000</option>
                    <option>$1,000 – $5,000</option>
                    <option>$5,000 – $10,000</option>
                    <option>$10,000+</option>
                    <option>Let&apos;s Discuss</option>
                  </select>
                  <ChevronDownIcon />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea 
                  className="form-textarea" 
                  placeholder="Message" 
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>
              <button 
                className="submit-btn" 
                disabled={isSubmitting}
                style={{ opacity: isSubmitting ? 0.7 : 1 }}
              >
                {isSubmitting ? 'Sending...' : submitStatus === 'success' ? 'Sent!' : 'Submit'}
              </button>
              {submitStatus === 'success' && (
                <p style={{ color: '#4CAF50', marginTop: 8 }}>Thanks! I'll get back to you soon.</p>
              )}
              {submitStatus === 'error' && (
                <p style={{ color: '#FF6E6E', marginTop: 8 }}>Something went wrong. Please try again.</p>
              )}
            </form>
          </section>

        </div>
      </main>
    </div>
  )
}
