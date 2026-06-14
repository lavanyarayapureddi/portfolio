import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

const TECH = ['React.js', 'Node.js', 'Firebase', 'REST APIs', 'Tailwind CSS']
const FEATURES = [
  'Industry-Relevant Skill Training',
  'Real-Time Project-Based Learning',
  'Hands-On Practical Experience',
  'Technology Learning Paths',
  'Career & Placement Preparation',
  'Progress Tracking Dashboard',
]

export default function StudentHubDetails() {
  const navigate = useNavigate()
  useEffect(() => { document.body.style.overflow = 'hidden'; return () => { document.body.style.overflow = '' } }, [])

  return (
    <div style={{
      height: '100vh', width: '100vw', overflow: 'hidden',
      background: 'linear-gradient(135deg, #03030f 0%, #090920 55%, #05051a 100%)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      position: 'relative', fontFamily: 'inherit',
    }}>
      {/* Ambient glows */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', top: '-12%', left: '-6%',
          width: '420px', height: '420px',
          background: 'radial-gradient(circle, rgba(76,201,240,0.08) 0%, transparent 65%)',
          borderRadius: '50%',
        }} />
        <div style={{
          position: 'absolute', bottom: '-14%', right: '-6%',
          width: '380px', height: '380px',
          background: 'radial-gradient(circle, rgba(108,99,255,0.07) 0%, transparent 65%)',
          borderRadius: '50%',
        }} />
      </div>

      {/* ── Card ── */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.65, ease: 'easeOut' }}
        className="hub-card"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.2fr',
          width: 'min(760px, 92vw)',
          borderRadius: '24px',
          overflow: 'hidden',
          background: 'rgba(255,255,255,0.04)',
          backdropFilter: 'blur(22px) saturate(160%)',
          border: '1px solid rgba(255,255,255,0.09)',
          boxShadow: '0 30px 70px rgba(0,0,0,0.65), 0 0 35px rgba(76,201,240,0.07)',
          position: 'relative', zIndex: 1,
        }}
      >
        {/* Back Button */}
        <motion.button
          onClick={() => navigate('/', { state: { scrollTo: 'projects' } })}
          whileHover={{ scale: 1.1, x: -3, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
          whileTap={{ scale: 0.95 }}
          style={{
            position: 'absolute',
            top: '20px',
            left: '20px',
            zIndex: 10,
            width: '42px',
            height: '42px',
            borderRadius: '50%',
            border: '1px solid rgba(255, 255, 255, 0.22)',
            background: 'rgba(0, 0, 0, 0.45)',
            backdropFilter: 'blur(12px)',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.45)',
            transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
          }}
          title="Back to Projects"
        >
          <FiArrowLeft size={20} />
        </motion.button>

        {/* ── LEFT: Image ── */}
        <div style={{ position: 'relative', overflow: 'hidden', minHeight: '420px' }}>
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=85&w=700"
            alt="Student Hub Platform"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to right, rgba(0,0,0,0.05) 0%, rgba(4,4,20,0.52) 100%)',
          }} />
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0, height: '45%',
            background: 'linear-gradient(to top, rgba(4,4,20,0.85), transparent)',
          }} />
          {/* Highlight Quote Overlay */}
          <div style={{
            position: 'absolute', bottom: '24px', left: '24px', right: '24px',
            zIndex: 2,
          }}>
            <h2 style={{
              color: '#ffffff', fontSize: '1.05rem', fontWeight: 800,
              lineHeight: 1.35, margin: 0, textShadow: '0 2px 4px rgba(0,0,0,0.6)',
              fontStyle: 'italic',
            }}>
              "Learn Skills. Build Projects. Become Industry Ready."
            </h2>
          </div>
        </div>

        {/* ── RIGHT: Content ── */}
        <div style={{
          padding: 'clamp(1.4rem, 2.5vw, 2rem)',
          display: 'flex', flexDirection: 'column',
          justifyContent: 'space-between', gap: '1rem',
          borderLeft: '1px solid rgba(76,201,240,0.1)',
        }}>

          {/* Badge + Title + Description */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <motion.span
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              style={{
                display: 'inline-flex', alignItems: 'center',
                background: 'rgba(76,201,240,0.11)',
                border: '1px solid rgba(76,201,240,0.26)',
                borderRadius: '999px', padding: '0.22rem 0.8rem',
                color: '#4cc9f0', fontSize: '0.63rem',
                fontWeight: 700, letterSpacing: '0.08em',
                textTransform: 'uppercase', width: 'fit-content',
              }}
            >
              Industry-Ready Skill Development Platform
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              style={{
                fontSize: 'clamp(1.4rem, 3vw, 1.9rem)', fontWeight: 900,
                background: 'linear-gradient(135deg, #ffffff 30%, #4cc9f0 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                backgroundClip: 'text', letterSpacing: '-0.03em', lineHeight: 1.1, margin: 0,
              }}
            >
              Student Hub Platform
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              style={{
                color: 'rgba(200,200,230,0.62)', fontSize: '0.78rem',
                lineHeight: 1.75, margin: 0,
              }}
            >
              Student Hub Platform is designed to bridge the gap between academics and industry requirements by helping students learn in-demand technologies, develop practical skills, and gain experience through real-time projects.
            </motion.p>

            {/* Purpose Section */}
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              style={{
                background: 'rgba(255,255,255,0.02)', padding: '0.65rem 0.85rem',
                borderRadius: '12px', borderLeft: '3px solid #4cc9f0',
                marginTop: '0.2rem',
              }}
            >
              <p style={{ color: 'rgba(215,215,240,0.85)', fontSize: '0.72rem', lineHeight: 1.45, margin: 0 }}>
                <strong style={{ color: '#4cc9f0', fontWeight: 700 }}>Purpose:</strong> The main goal of Student Hub Platform is to prepare students for the software industry by providing practical learning, project experience, and skill development beyond traditional academic education.
              </p>
            </motion.div>
          </div>

          {/* Divider */}
          <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)' }} />

          {/* Features */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
            <p style={{
              color: 'rgba(255,255,255,0.3)', fontSize: '0.62rem', fontWeight: 700,
              letterSpacing: '0.13em', textTransform: 'uppercase', margin: 0,
            }}>Key Features</p>
            {FEATURES.map((f, i) => (
              <motion.div
                key={f}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.42 + i * 0.055 }}
                style={{
                  display: 'flex', alignItems: 'center', gap: '0.55rem',
                  color: 'rgba(215,215,240,0.82)', fontSize: '0.8rem', fontWeight: 500,
                }}
              >
                <span style={{
                  width: '5px', height: '5px', borderRadius: '50%', flexShrink: 0,
                  background: '#4cc9f0', boxShadow: '0 0 5px rgba(76,201,240,0.65)',
                }} />
                {f}
              </motion.div>
            ))}
          </div>

          {/* Divider */}
          <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)' }} />

          {/* Tech badges */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <p style={{
              color: 'rgba(255,255,255,0.3)', fontSize: '0.62rem', fontWeight: 700,
              letterSpacing: '0.13em', textTransform: 'uppercase', margin: 0,
            }}>Technologies</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.38rem' }}>
              {TECH.map(t => (
                <span key={t} style={{
                  padding: '0.2rem 0.6rem',
                  background: 'rgba(76,201,240,0.09)',
                  border: '1px solid rgba(76,201,240,0.22)',
                  borderRadius: '5px', color: '#4cc9f0',
                  fontSize: '0.68rem', fontWeight: 700,
                }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      <style>{`
        @media (max-width: 600px) {
          .hub-card { grid-template-columns: 1fr !important; }
          .hub-card > div:first-child { min-height: 180px !important; }
        }
      `}</style>
    </div>
  )
}
