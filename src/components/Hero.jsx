import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { Link } from 'react-scroll'
import { FiGithub, FiLinkedin, FiDownload } from 'react-icons/fi'
import { personalInfo } from '../data/portfolioData'

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '100px 1.5rem 2.5rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background gradient orbs */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0,
      }}>
        <div style={{
          position: 'absolute', top: '10%', left: '-5%',
          width: '500px', height: '500px',
          background: 'radial-gradient(circle, rgba(108,99,255,0.18) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'floatOrb 8s ease-in-out infinite',
        }} />
        <div style={{
          position: 'absolute', bottom: '10%', right: '-5%',
          width: '400px', height: '400px',
          background: 'radial-gradient(circle, rgba(247,37,133,0.15) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'floatOrb 10s ease-in-out infinite reverse',
        }} />
      </div>

      <div style={{
        maxWidth: '1280px',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '3rem',
        alignItems: 'center',
        position: 'relative',
        zIndex: 1,
      }}>
        {/* Text side */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{
              display: 'inline-block',
              background: 'var(--accent-glow)',
              border: '1px solid var(--border)',
              borderRadius: '999px',
              padding: '0.35rem 1.1rem',
              fontSize: '0.8rem',
              fontWeight: 600,
              color: 'var(--accent)',
              marginBottom: '1.5rem',
              letterSpacing: '0.05em',
            }}
          >
            Available for opportunities
          </motion.div>

          <h1 style={{
            fontSize: 'clamp(2.5rem, 7vw, 4.2rem)',
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            color: 'var(--text-primary)',
            marginBottom: '1rem',
          }}>
            Hi, I'm{' '}
            <span className="gradient-text">{personalInfo.name.split(' ')[0]}</span>
          </h1>

          <div style={{
            fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
            fontWeight: 700,
            color: 'var(--accent)',
            marginBottom: '1.5rem',
            minHeight: '2.5rem',
          }}>
            <TypeAnimation
              sequence={[
                'AI & ML EXPLORER', 2000,
                'FRONTEND DEVELOPER', 2000,
                'PROBLEM SOLVER', 2000,
                'UI/UX DEVELOPER', 2000,
              ]}
              repeat={Infinity}
              cursor
            />
          </div>

          {/* Skill tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
            {['AI & ML Explorer', 'Frontend Developer', 'UI/UX Developer', 'Problem Solver'].map((tag) => (
              <span
                key={tag}
                style={{
                  background: 'var(--accent-glow)',
                  border: '1px solid var(--border)',
                  borderRadius: '999px',
                  padding: '0.3rem 0.9rem',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  color: 'var(--accent)',
                  letterSpacing: '0.02em',
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          <p style={{
            color: 'var(--text-secondary)',
            fontSize: '1rem',
            lineHeight: 1.85,
            maxWidth: '500px',
            marginBottom: '2.5rem',
          }}>
            Combining modern frontend development with AI &amp; ML innovation to create
            smart, responsive, and impactful digital experiences.
          </p>

          {/* CTA buttons */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
            <Link to="contact" smooth duration={500}>
              <button className="btn-glow" id="hero-contact-btn">
                Let's Connect
              </button>
            </Link>
            <Link to="projects" smooth duration={500}>
              <button className="btn-outline" id="hero-projects-btn">
                View Work
              </button>
            </Link>
          </div>


        </motion.div>

        {/* Image side */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <div style={{ position: 'relative' }}>
            {/* Glow ring */}
            <div style={{
              position: 'absolute', inset: '-12px',
              borderRadius: '50%',
              background: 'conic-gradient(from 0deg, #6c63ff, #f72585, #4cc9f0, #6c63ff)',
              animation: 'spin 6s linear infinite',
              padding: '3px',
            }}>
              <div style={{
                width: '100%', height: '100%',
                borderRadius: '50%',
                background: 'var(--bg)',
              }} />
            </div>

            <img
              src="/images/lavanya-profile.png"
              alt="Lavanya Rayapureddi — Frontend Developer"
              className="profile-photo"
              style={{
                width: '420px',
                height: '420px',
                objectFit: 'cover',
                borderRadius: '50%',
                position: 'relative',
                zIndex: 1,
                border: '4px solid #6c63ff',
                boxShadow: '0 0 40px rgba(108, 99, 255, 0.55), 0 0 80px rgba(108, 99, 255, 0.25)',
              }}
            />

            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                position: 'absolute', top: '-10px', right: '-20px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: '14px',
                padding: '0.6rem 1rem',
                fontSize: '0.8rem',
                fontWeight: 600,
                color: 'var(--accent)',
                boxShadow: 'var(--shadow)',
                whiteSpace: 'nowrap',
              }}
            >
              Frontend Dev
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              style={{
                position: 'absolute', bottom: '-20px', left: '-10px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: '14px',
                padding: '0.6rem 1rem',
                fontSize: '0.8rem',
                fontWeight: 600,
                color: '#f72585',
                boxShadow: 'var(--shadow)',
                whiteSpace: 'nowrap',
              }}
            >
              AI & ML EXPLORER
            </motion.div>
          </div>
        </motion.div>
      </div>



      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes floatOrb {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-30px) scale(1.05); }
        }
        .profile-photo {
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }
        .profile-photo:hover {
          transform: scale(1.05);
          box-shadow: 0 0 60px rgba(108, 99, 255, 0.75), 0 0 120px rgba(108, 99, 255, 0.35);
        }
      `}</style>
    </section>
  )
}
