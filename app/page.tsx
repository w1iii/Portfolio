'use client'

import { useState, useEffect } from 'react'

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
)
const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
)
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
)
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
)

const skills = [
  { label: 'JavaScript', icon: '/icons/js.png', color: '#F7DF1E', bg: '#2a2700' },
  { label: 'TypeScript', icon: '/icons/typescript.png', color: '#3178C6', bg: '#0d1f3c' },
  { label: 'Python',     icon: '/icons/python.png', color: '#3776AB', bg: '#0d1e2e' },
  { label: 'PHP',        icon: '/icons/php.png', color: '#777BB4', bg: '#1a1a2e' },
  { label: 'C++',        icon: '/icons/c-.png', color: '#00599C', bg: '#001a2e' },
  { label: 'C#',         icon: '/icons/c-sharp.png', color: '#239120', bg: '#0a1f0a' },
  { label: 'React',      icon: '/icons/react.png', color: '#61DAFB', bg: '#0d2a30' },
  { label: 'Next.js',    icon: '/icons/next.svg', color: '#ffffff', bg: 'white' },
  { label: 'Docker',     icon: '/icons/docker.png', color: '#2496ED', bg: '#0d1e30' },
  { label: 'Redis',      icon: '/icons/redis.png', color: '#DC382D', bg: '#2a0d0d' },
  { label: 'Postgres',   icon: '/icons/postgres.png', color: '#336791', bg: '#0d1a25' },
  { label: 'MySQL',      icon: '/icons/mysql.png', color: '#CC2927', bg: '#2a0d0d' },
  { label: 'Django',     icon: '/icons/django.png', color: '#44B78B', bg: 'white' },
  { label: 'Flask',      icon: '/icons/Flask.png', color: '#cccccc', bg: 'white' },
  { label: 'Git',        icon: '/icons/Git.png', color: '#F05032', bg: '#2a1208' },
  { label: 'GH Actions', icon: '/icons/github-actions.png', color: '#2088FF', bg: '#0d1a30' },
  { label: 'Bash',       icon: '/icons/Bash.png', color: '#4EAA25', bg: 'white' },
  { label: 'Linux',      icon: '/icons/Linux.png', color: '#FCC624', bg: '#2a2200' },
  { label: 'Node.js',    icon: '/icons/Node.js.png', color: '#339933', bg: '#0a1f0a' },
  { label: 'Express',    icon: '/icons/Express.png', color: '#cccccc', bg: 'white' },
  { label: 'Laravel',    icon: '/icons/Laravel.png', color: '#FF2D20', bg: '#2a0d0d' },
  { label: 'MongoDB',    icon: '/icons/MongoDB.png', color: '#47A248', bg: '#0a1f0a' },
  { label: 'Vim',        icon: '/icons/Vim.png', color: '#019733', bg: '#0a1f0a' },
  { label: 'Figma',      icon: '/icons/Figma.png', color: '#019733', bg: '#0a1f0a' },
  { label: 'Vercel',     icon:'/icons/vercel-logo.svg', bg: '#ffffff' },
  { label: 'Render',    icon: '/icons/render.jpeg', bg: 'black' },
  { label: 'Google Gemini API', icon: '/icons/Google.png', bg: '#0d1a30' },
  { label: 'System Design', icon: '/icons/sd.png', color: 'black', bg: '#2a1208' },
  { label: 'Vite.js', icon:'/icons/vite.png', bg: '#0d1a30' },
  { label: 'Apache', icon:'/icons/Apache.png', bg: '#2a0d0d' },
]

const recentWin = {
  title: 'Omniversal AI',
  type: 'hackathon',
  award: 'MLH Best Use of ElevenLabs',
  event: 'AI Hackfest',
  date: 'April 2026',
  description: 'A high-performance, dark-aesthetic cognitive processing engine with real-time voice synthesis. Built with Next.js 16, Gemini 2.5 Flash, and ElevenLabs.',
  link: 'https://devpost.com/software/omniversal-ai',
  builtBy: 'Lui Franz Lomugdang, Pujan Bade & Rishabh Kataria',
}

const projects = [
  {
    name: 'Boards', color: '#FF6E6E',
    link: 'https://boards-tau-three.vercel.app',
    image: '/boards.png',
    description: 'An AI-powered practice exam platform for the Philippine Nursing Licensure Exam (NLE). Generates NLE-style situational questions with full rationales, tracks weak areas, and provides timed mock exam mode — built for nursing students and review centers.',
    features: [
      'AI Question Generation — NLE-style situational questions with rationale for every choice, not just the correct answer',
      'Practice Mode — choose content areas (Med-Surg, Mother & Child, Psychiatric, Community Health, Leadership), difficulty, and 5–50 questions',
      'Mock Exam Mode — timed, full-screen, results with pass/fail at the 75% mark',
      'Progress Analytics — overall mastery score, per-area breakdown, weak-area alerts (<50%)',
      'Adaptive Weak-Area Tracking — prioritizes your weakest content area after ~20 answered questions',
      'Study Guides & Curriculum — downloadable guides, notes, and review materials with admin review queue',
      'Subscription Payments — PayMongo checkout (GCash, Maya, cards, Billease)',
      'Clerk Authentication — email/password, Google OAuth, org-ready',
    ],
    tech: [
      { label: 'Next.js 16', color: '#ffffff' }, { label: 'React 19', color: '#61DAFB' },
      { label: 'TypeScript', color: '#3178C6' }, { label: 'Tailwind CSS 4', color: '#38B2AC' },
      { label: 'PostgreSQL', color: '#336791' }, { label: 'Neon', color: '#00E59B' },
      { label: 'Clerk', color: '#6C47FF' }, { label: 'Groq SDK', color: '#FF6E6E' },
      { label: 'PayMongo', color: '#00C7B7' }, { label: 'Zod', color: '#3E67B1' },
    ],
  },{
    name: 'The Feynman', color: '#FF6E6E',
    link: 'https://the-feynman.vercel.app', 
    image: '/feyn.png',
    description: "An AI-powered learning platform that implements the Feynman Technique — a proven method for deep understanding through simplified explanation. Named after Nobel Prize physicist Richard Feynman, who believed that if you can't explain something simply, you don't understand it well enough.",
    features: [
      'AI Coaching Loop — Cumulative, conversation-based tutoring that asks one question at a time, targeting your weakest understanding criteria',
      '5-Criterion Grading — Evaluates explanations across: plain language, core mechanism, analogy/example, no gaps/filler, and child-friendly tone',
      'Progressive Feedback — Passed criteria never drop; the AI builds on previous answers like a real tutor',
      'Smart Session Cap — Sessions end when all criteria are met or after 20 questions max'
    ],
    tech: [
      { label: 'Next.js 16', color: '#ffffff' }, { label: 'TypeScript 5 ', color: '#3178C6' },  
      { label: 'Supabase', color: '#FA9A9A' }, { label: 'Vanilla CSS', color: '#339933' },
      { label: 'Supabase Auth', color: '#DC382D' }, { label: 'Groq SDK', color: '#FD3E3E' },
      { label: 'React 19, Tailwind CSS 4', color: '#336791' }
    ],
  },{
    name: 'Local Automation Engine', color: '#FF6E6E',
    link: 'https://github.com/w1iii/Local-Automation-Engine',
    image: '/file_organizer_thumbnail.svg',
    description: 'A Python CLI tool that automatically organizes files by moving them to designated folders based on file extension rules.', 
    features: [
      'Automatic sorting - Watches directories for new files and moves them based on rules',
      'Rule-based organization - Configure file extensions and destination folders in rules.json',
      'Manual cleanup - Sort existing files in any folder with the clean command',
      'Duplicate handling - Automatically renames files if a duplicate exists in the destination',
      'Large file detection - Files >= 5GB are moved to a largefiles subfolder',
      'Download safety - Skips incomplete downloads (.download, .crdownload, .part, .tmp)',
      'Logging - All actions are logged with timestamps to console and app.log',
      'Portable - Run from any directory, paths are relative to script location',
    ],
    tech: [
      { label: 'Python3', color: '#ffffff' }, { label: 'typer', color: '#3178C6' },
      { label: 'watchdog', color: '#FD3E3E' }, { label: 'pathlib', color: '#ffffff' },
    ],
  },{
    name: 'Student Grade Management System', color: '#FF6E6E',
    link: 'https://github.com/w1iii/Student-Grade-Management-System',
    image: '/sgms.png',
    description: 'A desktop application for managing and tracking student grades across multiple grade levels. Built with Electron, React, and TypeScript.', 
    features: [
      'Multi-grade Support: Manage grades from Elementary (Grade 1-6), High School (Grade 7-10), and Senior High School (Grade 11-12)',
      'Student Management: View and manage student records organized by grade level',
      'Grade Tracking: Track grades across 4 quarters for multiple subjects',
      'Auto Calculations: Automatic calculation of subject averages and general average',
      'CSV Data Storage: Student data stored in CSV format for easy import/export',
      'Desktop Application: Native desktop experience with Electron',
    ],
    tech: [
      { label: 'React 19', color: '#ffffff' }, { label: 'TypeScript', color: '#3178C6' },
      { label: 'Electon 39', color: '#336791' }, { label: 'React Router DOM', color: '#5A67D8' },
      { label: 'CSV-parser', color: '#339933' }, { label: 'fast-csv', color: '#339933' },
      { label: 'xlsx', color: '#339933' }
    ],
  },{
    name: 'Omniversal AI', color: '#FF6E6E',
    link: 'https://omniversal-ai.vercel.app', 
    image: '/Omni.png',
    description: 'Omniversal AI is a high-performance, dark-aesthetic cognitive processing engine designed for the next generation of AI-native applications. Built with Next.js 16 (App Router) and powered by Google Gemini 2.5 Flash, it provides a seamless, stateful chat experience with real-time neural visualization.',
    createdBy: 'Lui Franz Lomugdang, Pujan Bade, and Rishabh Kataria', 
    features: [
      'Advanced Chat Memory - Unlike standard single-shot LLM wrappers, Omniversal AI manages a sophisticated local session state. Persistent Sessions: Your chats are automatically saved to locally-tracked neural nodes. Dynamic Context: The AI remembers previous exchanges within a session for true conversational depth.',
      'Multi-Persona Engine - Switch between meticulously crafted personas, each with unique reasoning patterns and behavioral weights.',
      'Ultra-Low latency Voice - Seamlessly integrated with ElevenLabs, the platform synthesizes response audio in real-time.',
      "Stealth Analytics Protocol - Classified Demo Exclusive: The platform features a background safety protocol. After exactly 3 prompts in a session, the system automatically drafts and dispatches a 'Neural Behavioral Report' to a designated emergency contact (e.g., the User's Father), providing a savage analysis of the user's cognitive maturity."
    ],
    tech: [
      { label: 'Next.js 16', color: '#ffffff' }, { label: 'Nodemailer', color: '#FF6E6E' },
      { label: 'Google Gemini 2.5 flash', color: '#FA9A9A' }, { label: 'Vanilla CSS + custom design tokens', color: '#339933' },
      { label: 'ElevenLabs API', color: '#DC382D' }, { label: 'Framer Motion', color: '#FD3E3E' },
      { label: 'Lucide React', color: '#FD3E3E' }
    ],
  },{
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
  },{
    name: 'Credipro', color: '#FF6E6E',
    link: 'https://credipro-frontend-production.up.railway.app', 
    image: '/credi.png',
    description: "Credipro is a decentralized lending protocol that solves the 'Sybil default paradox' in Web3 uncollateralized lending. It connects institutional underwriters with retail borrowers through a privacy-preserving, zero-knowledge proof-based underwriting model built on Midnight Network's Kachina protocol.",
    createdBy: 'Lui Franz Lomugdang, Pujan Bade, and Rishabh Kataria', 
    features: [
      'Zero-Knowledge Proof of Creditworthiness',
      'Cryptographic Identity Binding',
      'Selective Identity Reveal with Oracle Consensus',
      'Privacy-Preserving Underwriting',
      'Sybil Attack Prevention',
      'Institutional-Grade Privacy',
    ],
    tech: [
      { label: 'React', color: '#ffffff' }, { label: 'Docker', color: '#3178C6' },  
      { label: 'Express', color: '#FA9A9A' }, { label: 'Oracle', color: '#339933' },
      { label: 'JWT auth', color: '#DC382D' }, { label: 'Railway', color: '#FD3E3E' },
      { label: 'Compact', color: '#336791' }
    ],
  },{
    name: 'Akawnt', color: '#FF6E6E',
    link: 'https://github.com/w1iii/akawnt',
    image: '/akawnt.png',
    description: 'Akawnt is a web-based job application and administration management system built for the Akawnt accounting firm. It provides a complete workflow for managing job applications - from initial submission through hiring - with separate portals for job applicants and administrators.', 
    features: [
      'Online Application Form - Submit job applications via web form with resume upload (PDF, DOC, DOCX - max 5MB)',
      'Email Notifications - Automatic email notifications for application status changes (accepted/declined)',
      'Applicant Portal	Secure - login portal for accepted applicants to view their application status and profile',
      'Personal Dashboard - View profile, application details, and access personal tools',
      'Admin Dashboard - Central dashboard with application statistics and overview',
      'Application Management -	Search, filter, and manage applications with actions to accept, decline, or mark as reviewing',
      'Whitelist-Based Registration	- Restricted admin registration - only pre-approved emails can create administrator accounts',
      'Employee Management - Full CRUD operations for managing administrators and employees',
      'Reports Export - Export data to Excel and PDF formats for record-keeping',
      'Support System - Handle support requests and inquiries from employees',
    ],
    tech: [
      { label: 'PHP 8.1+', color: '#ffffff' }, { label: 'Laravel 10.x', color: '#FF6E6E' },
      { label: 'MySQL/SQlite', color: '#FA9A9A' }, { label: 'maatwebsite/excel', color: '#339933' },
      { label: 'dompdf', color: '#DC382D' }, { label: 'Larvel sanctum', color: '#FD3E3E' },
    ],
  },{
    name: 'iSuggest', color: '#FF6E6E',
    link: 'https://github.com/w1iii/iSuggest', 
    image: '/iSuggest.png',
    description: " A full-stack employee suggestion management system built with Laravel 13 + Vue 3.",
    features: [
      'Employees create, read, update, delete own suggestions',
      'Kanban board with drag-drop between status columns',
      'Laravel Sanctum SPA authentication',
      'Download analytics PDF report',
    ],
    tech: [
      { label: 'PHP 8.3', color: '#ffffff' }, { label: 'npm', color: '#3178C6' },  
      { label: 'Composer', color: '#FA9A9A' }, { label: 'Vue.js', color: '#339933' },
      { label: 'Node.js 20', color: '#DC382D' }, { label: 'Laravel Backend', color: '#FD3E3E' },
      { label: 'MySQL 8+', color: '#336791' }
    ],
  },{
    name: 'Campus Connect', color: '#FF6E6E',
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
]

const certifications = [
  {
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    year: 'Issued 2024',
    description: 'Foundational cloud knowledge: AWS services, architecture, pricing, and security.',
  },
  {
    title: 'Meta Front-End Developer Professional Certificate',
    issuer: 'Meta',
    year: 'Issued 2023',
    description: 'Modern front-end development: React, responsive UI, and version control.',
  },
  {
    title: 'Google IT Automation with Python',
    issuer: 'Google',
    year: 'Issued 2023',
    description: 'Python programming, Git, IT automation, and troubleshooting at scale.',
  },
]

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'expertise', label: 'Expertise' },
  { id: 'work', label: 'Work' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
]

export default function Home() {
  const [isDark, setIsDark] = useState(true)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', budget: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  /* slider state */
  const [perView, setPerView] = useState(1)
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'))
  }, [])

  useEffect(() => {
    const compute = () => setPerView(window.innerWidth >= 1024 ? 2 : 1)
    compute()
    window.addEventListener('resize', compute)
    return () => window.removeEventListener('resize', compute)
  }, [])

  const maxIndex = projects.length - perView

  useEffect(() => {
    if (index > maxIndex) setIndex(Math.max(0, maxIndex))
  }, [maxIndex])

  useEffect(() => {
    if (paused) return
    const t = setInterval(() => setIndex(i => (i >= maxIndex ? 0 : i + 1)), 4500)
    return () => clearInterval(t)
  }, [paused, maxIndex])

  const next = () => setIndex(i => (i >= maxIndex ? 0 : i + 1))
  const prev = () => setIndex(i => (i <= 0 ? maxIndex : i - 1))

  const toggleTheme = () => {
    const next = !isDark
    setIsDark(next)
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }

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

  const inputClass = 'w-full bg-surface-container-low border border-border-subtle rounded px-4 py-3 text-text-primary focus:outline-none focus:border-accent-electric focus:ring-2 focus:ring-accent-electric/20 transition-all font-body-md text-body-md'

  return (
    <div className="min-h-screen">
      {/* ── TOP NAV BAR ── */}
      <nav className="fixed top-0 w-full z-50 bg-background-deep/80 backdrop-blur-md border-b border-border-subtle">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter flex justify-between items-center h-16">
          <a className="font-display-xl text-headline-md font-bold text-on-surface tracking-tighter" href="#about">
            Lui Franz
          </a>
          <div className="hidden md:flex gap-8">
            {navItems.map(item => (
              <a
                key={item.id}
                className="font-button text-button text-text-secondary hover:text-text-primary transition-colors hover:text-accent-electric duration-200"
                href={`#${item.id}`}
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="flex items-center justify-center w-9 h-9 text-text-secondary hover:text-accent-electric transition-colors"
            >
              <span className="material-symbols-outlined">{isDark ? 'light_mode' : 'dark_mode'}</span>
            </button>
            <a
              className="hidden md:inline-flex items-center justify-center px-4 py-2 bg-accent-electric text-white font-button text-button rounded hover:opacity-90 active:scale-95 transition-all"
              href="mailto:lomugdanglf.19@gmail.com"
            >
              Resume
            </a>
            <button
              onClick={() => setMobileOpen(o => !o)}
              aria-label="Open menu"
              className="md:hidden text-text-primary"
            >
              <span className="material-symbols-outlined">{mobileOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>
        {mobileOpen && (
          <div className="md:hidden bg-background-deep/95 backdrop-blur-md border-b border-border-subtle">
            <div className="max-w-container-max mx-auto px-margin-mobile py-4 flex flex-col gap-4">
              {navItems.map(item => (
                <a
                  key={item.id}
                  className="font-button text-button text-text-secondary hover:text-accent-electric transition-colors"
                  href={`#${item.id}`}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                className="inline-flex items-center justify-center px-4 py-2 bg-accent-electric text-white font-button text-button rounded"
                href="mailto:lomugdanglf.19@gmail.com"
              >
                Resume
              </a>
            </div>
          </div>
        )}
      </nav>

      <main className="pt-24 pb-section-gap">

        {/* ── HERO & ABOUT (BENTO) ── */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-gutter mt-section-gap mb-section-gap" id="about">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-component-gap">
            <div className="md:col-span-4 bg-surface-charcoal border border-border-subtle rounded-xl p-8 flex flex-col items-center text-center ambient-shadow relative overflow-hidden">
              <div className="w-32 h-32 rounded-[999px] overflow-hidden mb-6 border-4 border-surface-elevated">
                <img className="w-full h-full object-cover" src="/profile.jpg" alt="Lui Franz A. Lomugdang" />
              </div>
              <h1 className="font-headline-lg text-headline-lg text-text-primary mb-2">Lui Franz A. <br />Lomugdang</h1>
              <p className="font-body-md text-body-md text-text-secondary mb-6">Software Developer</p>
              <div className="flex gap-4 mb-6">
                <a className="text-text-secondary hover:text-accent-electric transition-colors" href="https://github.com/w1iii" target="_blank" rel="noopener noreferrer">
                  <GithubIcon />
                </a>
                <a className="text-text-secondary hover:text-accent-electric transition-colors" href="https://www.linkedin.com/in/lui-franz-lomugdang-785a85307/" target="_blank" rel="noopener noreferrer">
                  <LinkedinIcon />
                </a>
                <a className="text-text-secondary hover:text-accent-electric transition-colors" href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <InstagramIcon />
                </a>
                <a className="text-text-secondary hover:text-accent-electric transition-colors" href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <FacebookIcon />
                </a>
              </div>
              <a className="w-full py-3 bg-surface-elevated border border-border-subtle rounded text-text-primary font-button text-button hover:border-accent-electric transition-colors" href="#contact">
                Let&apos;s Work Together
              </a>
            </div>

            <div className="md:col-span-8 flex flex-col justify-center">
              <span className="font-label-mono text-label-mono text-text-muted uppercase mb-4 tracking-widest">Who I Am</span>
              <h2 className="font-display-xl-mobile md:font-display-xl text-display-xl-mobile md:text-display-xl text-text-primary mb-6 leading-tight">
                SOFTWARE <br /><span className="text-accent-electric">DEVELOPER</span>
              </h2>
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="font-label-mono text-label-mono bg-surface-elevated text-text-secondary px-3 py-1 border border-border-subtle rounded-full">Full-Stack Developer</span>
                <span className="font-label-mono text-label-mono bg-surface-elevated text-text-secondary px-3 py-1 border border-border-subtle rounded-full">University of St. Lasalle</span>
                <span className="font-label-mono text-label-mono bg-surface-elevated text-text-secondary px-3 py-1 border border-border-subtle rounded-full">BS Computer Science (Exp. 2027)</span>
              </div>
              <p className="font-body-lg text-body-lg text-text-secondary max-w-2xl">
                I&apos;m a software developer passionate about building efficient, scalable, and user-focused applications. I enjoy solving real-world problems through clean code and continuous learning, with experience in backend development, databases, and modern development tools. Building production applications since 2023.
              </p>
            </div>
          </div>
        </section>

        {/* ── TECHNICAL SKILLS (LISTED BY ROW) ── */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-gutter mb-section-gap" id="expertise">
          <span className="font-label-mono text-label-mono text-text-muted uppercase mb-4 block tracking-widest">Expertise</span>
          <h2 className="font-headline-lg text-headline-lg text-text-primary mb-2">TECHNICAL SKILLS</h2>
          <p className="font-body-md text-body-md text-text-secondary mb-12">A curated selection of my expertise</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {skills.map(s => (
              <div key={s.label} className="flex items-center gap-4 bg-surface-charcoal border border-border-subtle rounded-lg px-4 py-3 hover:border-accent-electric transition-colors group">
                <div
                  className="w-10 h-10 rounded flex items-center justify-center flex-shrink-0 overflow-hidden"
                  style={{ background: s.bg }}
                >
                  <img src={s.icon} alt={s.label} width={24} height={24} style={{ objectFit: 'contain' }} />
                </div>
                <span className="font-label-mono text-label-mono text-text-secondary group-hover:text-accent-electric transition-colors uppercase">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ── WORK / PROJECTS (SLIDER) ── */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-gutter mb-section-gap" id="work">
          <span className="font-label-mono text-label-mono text-text-muted uppercase mb-4 block tracking-widest">Work</span>
          <h2 className="font-headline-lg text-headline-lg text-text-primary mb-2">RECENT PROJECTS</h2>
          <p className="font-body-md text-body-md text-text-secondary mb-12 max-w-2xl">
            These projects represent my continuous learning journey in software development. From building APIs to implementing authentication and containerization, each one helped me deepen my understanding of real-world development practices.
          </p>

          {/* Recent win highlight */}
          <div className="relative bg-surface-charcoal border border-border-subtle rounded-xl p-8 mb-10 overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-accent-coral"></div>
            <div className="flex justify-between items-start mb-6">
              <div>
                <span className="font-label-mono text-label-mono text-accent-coral mb-2 block uppercase tracking-wider text-xs">Hackathon Win</span>
                <h3 className="font-headline-md text-headline-md text-text-primary">{recentWin.title}</h3>
              </div>
              <span className="font-label-mono text-label-mono text-text-muted text-xs">{recentWin.date}</span>
            </div>
            <p className="font-body-md text-body-md text-text-secondary mb-6 max-w-2xl">{recentWin.description}</p>
            <div className="bg-surface-elevated border border-border-subtle rounded p-3 mb-6 inline-flex">
              <p className="font-label-mono text-label-mono text-tertiary text-xs">★ {recentWin.award}</p>
            </div>
            <a className="inline-flex items-center gap-2 font-button text-button text-accent-electric hover:text-primary transition-colors" href={recentWin.link} target="_blank" rel="noopener noreferrer">
              View on Devpost <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
          </div>

          {/* Slider */}
          <div
            className="relative"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div className="overflow-hidden rounded-xl">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${index * (100 / perView)}%)` }}
              >
                {projects.map(p => (
                  <div
                    key={p.name}
                    className="px-2 md:px-3 flex-shrink-0"
                    style={{ width: `${100 / perView}%` }}
                  >
                    <div className="bg-surface-charcoal border border-border-subtle rounded-xl p-8 flex flex-col h-full relative overflow-hidden group">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="font-headline-md text-headline-md text-text-primary">{p.name}</h3>
                        <span className="font-label-mono text-label-mono text-text-muted text-xs">Open ↗</span>
                      </div>
                      <div className="w-full h-44 bg-surface-elevated rounded-lg mb-6 overflow-hidden border border-border-subtle">
                        {p.image && (
                          <img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" src={p.image} alt={p.name} />
                        )}
                      </div>
                      <p className="font-body-md text-body-md text-text-secondary mb-6 flex-grow">{p.description}</p>
                      <div className="flex flex-wrap gap-2 mt-auto mb-4">
                        {p.tech.slice(0, 6).map(t => (
                          <span key={t.label} className="font-label-mono text-label-mono bg-surface-elevated text-text-secondary px-2 py-1 border border-border-subtle rounded text-xs">
                            {t.label}
                          </span>
                        ))}
                      </div>
                      <a className="inline-flex items-center gap-2 font-button text-button text-accent-electric hover:text-primary transition-colors" href={p.link} target="_blank" rel="noopener noreferrer">
                        View Project <span className="material-symbols-outlined text-sm">arrow_forward</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={prev}
              aria-label="Previous projects"
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 w-10 h-10 rounded-[999px] bg-surface-elevated border border-border-subtle text-text-primary flex items-center justify-center hover:border-accent-electric hover:text-accent-electric transition-colors shadow-lg z-10"
            >
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button
              onClick={next}
              aria-label="Next projects"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 w-10 h-10 rounded-[999px] bg-surface-elevated border border-border-subtle text-text-primary flex items-center justify-center hover:border-accent-electric hover:text-accent-electric transition-colors shadow-lg z-10"
            >
              <span className="material-symbols-outlined">chevron_right</span>
            </button>

            <div className="flex justify-center gap-2 mt-6">
              {projects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${i === index ? 'w-6 bg-accent-electric' : 'w-1.5 bg-border-subtle hover:bg-text-muted'}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ── CERTIFICATIONS ── */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-gutter mb-section-gap" id="certifications">
          <span className="font-label-mono text-label-mono text-text-muted uppercase mb-4 block tracking-widest">Learning</span>
          <h2 className="font-headline-lg text-headline-lg text-text-primary mb-12">CERTIFICATIONS</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map(c => (
              <div key={c.title} className="bg-surface-charcoal border border-border-subtle rounded-xl p-6 flex flex-col hover:border-accent-electric transition-colors">
                <span className="material-symbols-outlined text-accent-electric mb-4 text-3xl">workspace_premium</span>
                <h3 className="font-headline-md text-headline-md text-text-primary mb-2">{c.title}</h3>
                <p className="font-body-md text-body-md text-text-secondary mb-4">{c.description}</p>
                <p className="font-label-mono text-label-mono text-text-muted mt-auto">{c.issuer} · {c.year}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-gutter mb-12" id="contact">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-section-gap items-center">
            <div>
              <span className="font-label-mono text-label-mono text-text-muted uppercase mb-4 block tracking-widest">Contact</span>
              <h2 className="font-display-xl-mobile md:font-display-xl text-display-xl-mobile md:text-display-xl text-text-primary mb-4 leading-none">
                LET&apos;S WORK <br /><span className="text-accent-coral">TOGETHER</span>
              </h2>
              <a className="font-label-mono text-label-mono text-accent-coral hover:text-accent-electric transition-colors text-lg block mb-8" href="mailto:lomugdanglf.19@gmail.com">
                lomugdanglf.19@gmail.com
              </a>
            </div>
            <div className="bg-surface-charcoal border border-border-subtle rounded-xl p-8">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="font-label-mono text-label-mono text-text-secondary block mb-2 uppercase text-xs">Name</label>
                    <input
                      className={inputClass}
                      placeholder="Your Name"
                      type="text"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="font-label-mono text-label-mono text-text-secondary block mb-2 uppercase text-xs">Email</label>
                    <input
                      className={inputClass}
                      placeholder="your@email.com"
                      type="email"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="font-label-mono text-label-mono text-text-secondary block mb-2 uppercase text-xs">Budget</label>
                  <select
                    className={`${inputClass} appearance-none`}
                    value={formData.budget}
                    onChange={e => setFormData({ ...formData, budget: e.target.value })}
                  >
                    <option value="" disabled>Select...</option>
                    <option>Less than $1,000</option>
                    <option>$1,000 - $5,000</option>
                    <option>$5,000+</option>
                  </select>
                </div>
                <div>
                  <label className="font-label-mono text-label-mono text-text-secondary block mb-2 uppercase text-xs">Message</label>
                  <textarea
                    className={`${inputClass} resize-none`}
                    placeholder="Message"
                    rows={4}
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>
                <button
                  className="w-full bg-accent-coral hover:bg-accent-coral/90 text-white font-button text-button py-4 rounded transition-colors disabled:opacity-60"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : submitStatus === 'success' ? 'Sent!' : 'Submit'}
                </button>
                {submitStatus === 'success' && (
                  <p className="font-body-md text-body-md" style={{ color: 'rgb(var(--accent-electric))' }}>Thanks! I&apos;ll get back to you soon.</p>
                )}
                {submitStatus === 'error' && (
                  <p className="font-body-md text-body-md text-accent-coral">Something went wrong. Please try again.</p>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer className="w-full py-stack-md bg-background-deep border-t border-border-subtle">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter flex flex-col md:flex-row justify-between items-center gap-stack-sm">
          <p className="font-label-mono text-label-mono text-text-muted">© 2026 Lui Franz A. Lomugdang. Built for performance.</p>
          <div className="flex gap-6">
            <a className="font-body-md text-body-md text-text-muted hover:text-accent-electric transition-colors opacity-80 hover:opacity-100" href="https://github.com/w1iii" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a className="font-body-md text-body-md text-text-muted hover:text-accent-electric transition-colors opacity-80 hover:opacity-100" href="https://www.linkedin.com/in/lui-franz-lomugdang-785a85307/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
