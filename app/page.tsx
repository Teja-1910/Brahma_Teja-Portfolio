'use client'

import { useEffect, useState } from 'react'
import {
  ArrowUpRight,
  BarChart3,
  BrainCircuit,
  Check,
  ChevronDown,
  Code2,
  Globe,
  Mail,
  Menu,
  Moon,
  Network,
  Sun,
  X,
} from 'lucide-react'

const skillGroups = [
  { icon: Code2, label: 'Programming & Data', items: ['Python', 'SQL / MySQL', 'Pandas', 'NumPy', 'EDA', 'Data Preprocessing', 'Data Cleaning'] },
  { icon: BarChart3, label: 'Machine Learning', items: ['Scikit-learn', 'Supervised Learning', 'Unsupervised Learning', 'Feature Engineering', 'Model Evaluation', 'Statistics & Probability', 'Predictive Modeling'] },
  { icon: BrainCircuit, label: 'Deep Learning & NLP', items: ['TensorFlow', 'PyTorch (familiar)', 'NLP', 'Embeddings', 'Semantic Search', 'Neural Networks', 'Text Classification'] },
  { icon: Network, label: 'Generative AI & RAG', items: ['RAG Pipelines', 'LLM Integration', 'Vector Databases', 'Prompt Engineering', 'Agentic Workflows', 'Groq API', 'Qwen', 'Pinecone', 'Retrieval & Reranking'] },
]

const experiences = [
  { company: 'Pantech Solutions', role: 'AI/Data Science Intern', duration: 'Dec 2023 — Mar 2024', location: 'Remote', detail: 'Performed data preprocessing, exploratory data analysis, statistical visualization, feature engineering, and data quality improvements using Pandas, Matplotlib, and Seaborn.' },
  { company: 'Accenture · Forage', role: 'Data Analytics Virtual Experience', duration: 'Jan 2024', location: 'Virtual', detail: 'Analyzed business datasets and derived actionable insights using structured data analytics workflows.' },
  { company: 'Exafluence Pvt Ltd', role: 'Python Development Trainee', duration: 'Dec 2022 — Jun 2023', location: 'Tirupati, Andhra Pradesh', detail: 'Worked with Python development and SQL database operations, with a focus on programming logic and data workflows.' },
]

const education = [
  { degree: 'B.Tech — Computer Science & Engineering (AI & ML)', school: 'Chaitanya Bharathi Institute of Technology (Autonomous)', place: 'Proddatur', result: 'CGPA: 8.33', duration: '2023 — 2026' },
  { degree: 'Diploma — Computer Science Engineering', school: 'Government Polytechnic', place: 'Pillaripattu', result: 'Percentage: 80.09%', duration: '2020 — 2023' },
]

const projects = [
  { number: '01', title: 'SmartDocQA', type: 'RAG · LLM', description: 'A centralized multi-tenant Retrieval-Augmented Generation platform for securely managing and querying organizational knowledge bases.', details: ['PDF ingestion, intelligent chunking, and retrieval', 'SentenceTransformer embeddings with vector database search', 'Groq-powered LLM contextual answer generation', 'Semantic search, document QA, and organization-level knowledge retrieval'], technologies: ['Python', 'RAG', 'LLM', 'Embeddings', 'Pinecone', 'Groq'], link: 'https://smart-doc-qa-9wpm.vercel.app/', linkLabel: 'Open SmartDocQA repository', featured: true },
  { number: '02', title: 'AI Lead Enrichment Agent', type: 'AI · AUTOMATION', description: 'An AI-powered company intelligence agent that crawls public company websites and converts web content into structured business intelligence.', details: ['Playwright-based dynamic website crawling', 'Groq + Qwen 3.8 27B structured extraction', 'Pydantic validation and confidence scoring', 'Streamlit interface with multi-page analysis'], technologies: ['Python', 'Playwright', 'Groq', 'Qwen', 'Streamlit'], link: 'https://enrichmentagent.streamlit.app/', linkLabel: 'Open AI Lead Enrichment Agent', featured: false },
]

const navItems = ['About', 'Skills', 'Experience', 'Education', 'Projects', 'Contact']

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dark, setDark] = useState(true)
  const [active, setActive] = useState('About')

  useEffect(() => {
    document.documentElement.classList.toggle('light', !dark)
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('is-visible') })
    }, { threshold: 0.12 })
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      document.documentElement.style.setProperty('--page-cursor-x', `${event.clientX}px`)
      document.documentElement.style.setProperty('--page-cursor-y', `${event.clientY}px`)
      document.documentElement.classList.add('page-cursor-active')
    }
    window.addEventListener('pointermove', handlePointerMove)
    return () => window.removeEventListener('pointermove', handlePointerMove)
  }, [])

  const goTo = (id: string) => {
    const target = document.getElementById(id.toLowerCase())
    if (target) {
      target.classList.add('is-visible')
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setMenuOpen(false)
  }

  return (
    <main>
      <header className="site-header">
        <div className="shell nav-inner">
          <button className="brand" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top"><span>BR</span><strong>Brahma Teja Reddy</strong></button>
          <nav className="desktop-nav" aria-label="Primary navigation">{navItems.map((item) => <button className={active === item ? 'active' : ''} key={item} onClick={() => { setActive(item); goTo(item) }}>{item}</button>)}</nav>
          <div className="nav-actions"><a className="resume-link" href="/Polu_BrahmaTejaReddy_Resume_2026.pdf" download="Brahma-Teja-Reddy-Resume.pdf">Resume <ArrowUpRight size={14} /></a><button className="icon-button" onClick={() => setDark(!dark)} aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}>{dark ? <Sun size={17} /> : <Moon size={17} />}</button><button className="menu-button icon-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X size={19} /> : <Menu size={19} />}</button></div>
        </div>
        {menuOpen && <nav className="mobile-nav" aria-label="Mobile navigation">{navItems.map((item) => <button key={item} onClick={() => { setActive(item); goTo(item) }}>{item}<ArrowUpRight size={15} /></button>)}</nav>}
      </header>

      <section className="hero shell" id="about">
        <div className="hero-copy reveal"><p className="eyebrow"><span className="status-dot" /> Open to opportunities</p><h1>Building intelligent<br /><em>systems that matter.</em></h1><p className="hero-lede">I&apos;m Brahma Teja Reddy, an AI &amp; ML graduate currently focused on machine learning, predictive systems, and turning data into useful, practical solutions.</p><div className="hero-meta"><span>B.Tech · Artificial Intelligence &amp; Machine Learning</span><span className="meta-line" /><span>Based in India</span></div></div>
        <div className="hero-visual reveal"><div className="code-backdrop" aria-hidden="true"><div className="code-window"><div className="code-window-bar"><i /><i /><i /><span>ml_pipeline.py</span></div><pre><code><span className="code-comment"># train a useful model</span>{'\n'}<span className="code-keyword">from</span> sklearn.pipeline <span className="code-keyword">import</span> Pipeline{'\n'}<span className="code-keyword">from</span> sklearn.ensemble <span className="code-keyword">import</span> RandomForestRegressor{'\n\n'}<span className="code-keyword">def</span> <span className="code-function">build_model</span>(data):{'\n'}{'  '}X, y = prepare_features(data){'\n'}{'  '}model = Pipeline([{'\n'}{'    '}(&apos;forest&apos;, RandomForestRegressor(n_estimators=<span className="code-number">200</span>)),{'\n'}{'  '}]){'\n'}{'  '}model.fit(X, y){'\n'}{'  '}<span className="code-keyword">return</span> model<span className="cursor-block">▌</span></code></pre><div className="code-status"><span><b className="live-dot" /> running</span><span>accuracy: 94.8%</span></div><div className="cursor-orb" /></div><div className="code-line line-two">prediction = model.predict(X_test)</div><div className="code-line line-three">features = df.dropna().select_dtypes(&apos;number&apos;)</div></div><div className="hero-grid" aria-hidden="true" /><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="portrait-frame"><img src="/teja-profile.jpeg" alt="Brahma Teja Reddy wearing a black blazer" /><div className="portrait-shine" /></div><div className="profile-panel"><span className="mini-kicker">PROFILE / 01</span><strong>Brahma Teja<br />Reddy</strong><span>AI · ML · Analytics</span></div><div className="metric-card metric-top"><span className="mini-kicker">CURRENT FOCUS</span><strong><BrainCircuit size={15} /> Machine learning</strong><span className="metric-bar"><i /></span></div><div className="metric-card metric-bottom"><span className="mini-kicker">PROJECT / 01</span><strong>SmartDocQA <ArrowUpRight size={13} /></strong><small>RAG · LLM · Embeddings</small></div><div className="signal-card signal-left"><span className="mini-kicker">BASE</span><strong>India</strong></div><div className="signal-card signal-right"><span className="mini-kicker">EDUCATION</span><strong>B.Tech</strong><small>AI &amp; ML · 2025</small></div><div className="signal-card signal-bottom-right"><span className="mini-kicker">STATUS</span><strong><span className="live-dot" /> Available</strong><small>For ML opportunities</small></div></div>
      </section>

      <div className="ticker" aria-hidden="true"><div className="ticker-track"><span>PYTHON</span><span>•</span><span>MACHINE LEARNING</span><span>•</span><span>DATA ANALYTICS</span><span>•</span><span>GENERATIVE AI</span><span>•</span><span>PYTHON</span><span>•</span><span>MACHINE LEARNING</span><span>•</span><span>DATA ANALYTICS</span></div></div>

      <section className="section shell reveal" id="skills"><div className="section-heading"><div><p className="eyebrow">01 / Capabilities</p><h2>Tools for turning<br /><em>questions into clarity.</em></h2></div><p className="section-intro">From preparing data to building intelligent ML systems, I enjoy working across the path from a problem to a practical AI solution.</p></div><div className="skill-grid">{skillGroups.map(({ icon: Icon, label, items }) => <article className="skill-card" key={label}><div className="skill-top"><Icon size={20} /><span>0{skillGroups.findIndex((g) => g.label === label) + 1}</span></div><h3>{label}</h3><div className="tag-list">{items.map((item) => <span key={item}>{item}</span>)}</div></article>)}</div></section>

      <section className="section section-muted reveal" id="experience"><div className="shell"><div className="section-heading compact"><div><p className="eyebrow">02 / Experience</p><h2>Learning by<br /><em>doing the work.</em></h2></div><p className="section-intro">Practical experience across data science, analytics, Python development, and AI/ML workflows.</p></div><div className="timeline">{experiences.map((experience, index) => <article className="timeline-item" key={`${experience.company}-${experience.role}`}><div className="timeline-marker">0{index + 1}</div><div className="timeline-content"><div className="timeline-head"><div><p className="company">{experience.company}</p><h3>{experience.role}</h3></div><span>{experience.duration}</span></div><p className="timeline-location">{experience.location}</p><p>{experience.detail}</p></div></article>)}</div></div></section>

<section className="section shell reveal" id="education"><div className="section-heading compact"><div><p className="eyebrow">03 / Education</p><h2>Built on a<br /><em>strong foundation.</em></h2></div><p className="section-intro">Academic training in artificial intelligence, machine learning, computer science, and data-driven problem solving.</p></div><div className="education-grid">{education.map((item, index) => <article className="education-card" key={item.degree}><div className="education-index">0{index + 1}</div><div><h3>{item.degree}</h3><p>{item.school}</p><span>{item.place} · {item.duration}</span></div><strong>{item.result}</strong></article>)}</div></section>

      <section className="section shell reveal" id="projects"><div className="section-heading"><div><p className="eyebrow">04 / Selected work</p><h2>Ideas made<br /><em>tangible.</em></h2></div><p className="section-intro">A selection of projects exploring retrieval, prediction, and the practical side of machine learning.</p></div><div className="project-grid">{projects.map((project) => <article className={`project-card ${project.featured ? 'featured' : ''}`} key={project.title}><div className="project-head"><span className="project-number">{project.number}</span><span className="project-type">{project.type}</span><a className="project-arrow-link" href={project.link} target="_blank" rel="noreferrer" aria-label={`Open ${project.title}`}><ArrowUpRight className="project-arrow" size={20} /></a></div><div className="project-body"><div><h3>{project.title}</h3><p>{project.description}</p><ul>{project.details.map((detail) => <li key={detail}><Check size={14} />{detail}</li>)}</ul><div className="project-tags">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div><a className="repo-link" href={project.link} target="_blank" rel="noreferrer">{project.linkLabel} <ArrowUpRight size={15} /></a></div></div></article>)}</div></section>

      <section className="contact-section shell" id="contact"><div className="contact-copy"><p className="eyebrow">05 / Connect</p><h2>Let&apos;s build something<br /><em>worth talking about.</em></h2><p>I&apos;m looking for opportunities to learn, contribute, and grow as an AI/ML and data professional.</p></div><div className="social-grid"><a className="social-card" href="https://www.linkedin.com/in/brahma-teja-reddy-polu-5a9ba8284" target="_blank" rel="noreferrer"><span className="social-logo linkedin-logo">in</span><span><strong>LinkedIn</strong><small>Professional network</small></span><ArrowUpRight size={17} /></a><a className="social-card" href="https://github.com/Teja-1910" target="_blank" rel="noreferrer"><span className="social-logo github-logo">&lt;/&gt;</span><span><strong>GitHub</strong><small>Profile</small></span><ArrowUpRight size={17} /></a><a className="social-card" href="mailto:brahmateja1910@gmail.com"><span className="social-logo mail-logo"><Mail size={18} /></span><span><strong>Email</strong><small>brahmateja1910@gmail.com</small></span><ArrowUpRight size={17} /></a><a className="social-card" href="tel:+919110791336"><span className="social-logo phone-logo">+91</span><span><strong>Phone</strong><small>+91 9110791336</small></span><ArrowUpRight size={17} /></a><div className="social-card address-card"><span className="social-logo location-logo"><Globe size={18} /></span><span><strong>Based in India</strong><small>1/4, Peddanapadu, Yerraguntla, Andhra Pradesh, 516309</small></span></div></div></section>

      <footer className="site-footer shell"><span>© {new Date().getFullYear()} Brahma Teja Reddy</span><span>Designed &amp; built with curiosity.</span><button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Back to top <ChevronDown size={15} className="up-icon" /></button></footer>
    </main>
  )
}
