import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import SectionTitle from './SectionTitle'
import { FiGithub, FiExternalLink, FiArrowRight } from 'react-icons/fi'

// ── Project data (self-contained, compact) ────────────────────────────────────
const FEATURED = [
  {
    id: 'ai-chatbot',
    title: 'AI Project Management Assistant Chatbot',
    desc: 'AI-powered chatbot that analyzes PDFs and provides intelligent project insights using NLP and OpenAI.',
    tech: ['React.js', 'Node.js', 'PostgreSQL'],
    color: '#6c63ff',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    github: 'https://github.com/lavanyarayapureddi/Project-Management-Assistant-AI-Chatbot-Using-PDF-s',
    live: 'https://your-chatbot-demo.vercel.app',
  },
  {
    id: 'portfolio',
    title: 'Personal Portfolio Website',
    desc: 'Responsive portfolio showcasing skills, projects, experience, and resume.',
    tech: ['React.js', 'JavaScript', 'Node.js', 'Vite'],
    color: '#f72585',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80&w=800',
    github: 'https://github.com/lavanyarayapureddi/portfolio',
    live: 'https://portfolio-plum-seven-gu1q2kvclp.vercel.app/',
  },
]

const SHOWCASE = {
  id: 'student-hub',
  title: 'Student Hub Platform',
  desc: 'A skill development platform that helps students learn industry-relevant technologies through structured learning paths, hands-on training, and real-time project experience.',
  tech: ['React.js', 'Node.js', 'Firebase'],
  color: '#4cc9f0',
  image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1000',
}

// ── Featured Card ─────────────────────────────────────────────────────────────
function FeaturedCard({ p, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.55, delay: index * 0.12, ease: 'easeOut' }}
      whileHover={{ y: -8, boxShadow: `0 20px 50px rgba(0,0,0,0.45), 0 0 24px ${p.color}28` }}
      style={{
        borderRadius: '20px',
        overflow: 'hidden',
        background: 'var(--bg-card)',
        border: '1px solid var(--border)',
        display: 'flex',
        flexDirection: 'column',
        transition: 'border-color 0.3s ease',
        maxWidth: '440px',
        width: '100%',
        margin: '0 auto',
      }}
    >
      {/* Accent top bar */}
      <div style={{ height: '3px', background: `linear-gradient(90deg, ${p.color}, transparent)` }} />

      {/* Image */}
      <div style={{ position: 'relative', height: '190px', overflow: 'hidden', flexShrink: 0 }}>
        <motion.img
          src={p.image} alt={p.title}
          whileHover={{ scale: 1.07 }}
          transition={{ duration: 0.55 }}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.04) 40%, rgba(0,0,0,0.65) 100%)',
        }} />
      </div>

      {/* Content */}
      <div style={{ padding: '1.35rem', display: 'flex', flexDirection: 'column', gap: '0.85rem', flex: 1 }}>
        <h3 style={{
          fontSize: '1.0rem', fontWeight: 800,
          color: 'var(--text-primary)', lineHeight: 1.35,
          letterSpacing: '-0.01em',
        }}>
          {p.title}
        </h3>

        <p style={{ color: 'var(--text-secondary)', fontSize: '0.82rem', lineHeight: 1.7, margin: 0 }}>
          {p.desc}
        </p>

        {/* Tech badges */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
          {p.tech.map(t => (
            <span key={t} style={{
              padding: '0.2rem 0.6rem',
              background: `${p.color}13`,
              border: `1px solid ${p.color}28`,
              borderRadius: '6px',
              fontSize: '0.7rem', fontWeight: 600,
              color: p.color, letterSpacing: '0.02em',
            }}>{t}</span>
          ))}
        </div>

        {/* Buttons */}
        <div style={{ display: 'flex', gap: '0.6rem', marginTop: 'auto', paddingTop: '0.25rem' }}>
          <motion.button
            onClick={() => window.open(p.github, '_blank', 'noopener,noreferrer')}
            whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
            style={outlineBtn(p.color)}
          >
            <FiGithub size={14} /> View Code
          </motion.button>
          <motion.button
            onClick={() => window.open(p.live, '_blank', 'noopener,noreferrer')}
            whileHover={{ scale: 1.04, boxShadow: `0 6px 18px ${p.color}44` }}
            whileTap={{ scale: 0.97 }}
            style={solidBtn(p.color)}
          >
            <FiExternalLink size={14} /> Live
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

// ── Showcase Card (Student Hub — wide) ────────────────────────────────────────
function ShowcaseCard({ p }) {
  const navigate = useNavigate()
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      whileHover={{ y: -6, boxShadow: `0 20px 50px rgba(0,0,0,0.4), 0 0 24px ${p.color}28` }}
      className="showcase-card"
      style={{
        borderRadius: '20px', overflow: 'hidden',
        background: 'var(--bg-card)', border: '1px solid var(--border)',
        display: 'grid', gridTemplateColumns: '1fr 1.1fr',
        maxWidth: '860px', width: '100%', margin: '0 auto',
        transition: 'border-color 0.3s ease',
      }}
    >
      {/* Image */}
      <div style={{ position: 'relative', overflow: 'hidden', minHeight: '240px' }}>
        <motion.img
          src={p.image} alt={p.title}
          whileHover={{ scale: 1.06 }} transition={{ duration: 0.55 }}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to right, rgba(0,0,0,0.05), rgba(0,0,0,0.45))',
        }} />
      </div>

      {/* Content */}
      <div style={{
        padding: '2rem 1.75rem',
        display: 'flex', flexDirection: 'column',
        justifyContent: 'space-between', gap: '1.1rem',
        borderLeft: `1px solid ${p.color}18`,
      }}>
        <div>
          <h3 style={{
            fontSize: '1.3rem', fontWeight: 800,
            color: 'var(--text-primary)', lineHeight: 1.25,
            letterSpacing: '-0.02em', marginBottom: '0.65rem',
          }}>{p.title}</h3>

          <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.75 }}>
            {p.desc}
          </p>
        </div>

        {/* Tech badges */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
          {p.tech.map(t => (
            <span key={t} style={{
              padding: '0.22rem 0.65rem',
              background: `${p.color}13`, border: `1px solid ${p.color}28`,
              borderRadius: '6px', fontSize: '0.72rem', fontWeight: 600,
              color: p.color,
            }}>{t}</span>
          ))}
        </div>

        <motion.button
          onClick={() => navigate('/project/student-hub')}
          whileHover={{ scale: 1.04, boxShadow: `0 8px 22px ${p.color}44` }}
          whileTap={{ scale: 0.97 }}
          style={{
            ...solidBtn(p.color),
            width: 'fit-content', padding: '0.7rem 1.4rem',
            color: '#000',
          }}
        >
          View Details <FiArrowRight size={15} />
        </motion.button>
      </div>
    </motion.div>
  )
}

// ── Section ───────────────────────────────────────────────────────────────────
export default function Projects() {
  return (
    <section id="projects" className="section-pad" style={{ background: 'var(--bg)', position: 'relative', overflow: 'hidden' }}>
      {/* Subtle background orbs */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
        <div style={{
          position: 'absolute', top: '5%', right: '-8%',
          width: '420px', height: '420px',
          background: 'radial-gradient(circle, rgba(108,99,255,0.09) 0%, transparent 70%)',
          borderRadius: '50%',
        }} />
        <div style={{
          position: 'absolute', bottom: '10%', left: '-6%',
          width: '360px', height: '360px',
          background: 'radial-gradient(circle, rgba(247,37,133,0.07) 0%, transparent 70%)',
          borderRadius: '50%',
        }} />
      </div>

      <div style={{ maxWidth: '960px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <SectionTitle
          title="Projects"
          subtitle="Innovative solutions combining software engineering and AI"
        />

        {/* Row 1 — Two featured cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem',
          marginTop: '2.75rem',
          justifyItems: 'center',
        }}>
          {FEATURED.map((p, i) => <FeaturedCard key={p.id} p={p} index={i} />)}
        </div>

        {/* Divider */}
        <div style={{ height: '1px', background: 'var(--border)', margin: '2.5rem 0 2.25rem' }} />

        {/* Row 2 — Showcase card */}
        <ShowcaseCard p={SHOWCASE} />
      </div>

      <style>{`
        @media (max-width: 640px) {
          .showcase-card { grid-template-columns: 1fr !important; }
          .showcase-card > div:first-child { min-height: 200px !important; }
        }
      `}</style>
    </section>
  )
}

// ── Shared button styles ──────────────────────────────────────────────────────
function outlineBtn(color) {
  return {
    flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center',
    gap: '0.4rem', padding: '0.6rem 0.5rem',
    background: 'transparent', border: `1.5px solid ${color}40`,
    borderRadius: '10px', color, fontWeight: 700, fontSize: '0.8rem',
    cursor: 'pointer', fontFamily: 'inherit', transition: 'border-color 0.2s ease',
  }
}
function solidBtn(color) {
  return {
    flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center',
    gap: '0.4rem', padding: '0.6rem 0.5rem',
    background: color, border: 'none',
    borderRadius: '10px', color: '#fff', fontWeight: 700, fontSize: '0.8rem',
    cursor: 'pointer', fontFamily: 'inherit',
  }
}
