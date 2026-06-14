import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiStar } from 'react-icons/fi'
import SectionTitle from './SectionTitle'

export default function About() {
  const pdfUrl = '/resume/Lavanya_Rayapureddi_exp.pdf'

  const handleResumeDownload = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch(pdfUrl)
      if (!response.ok) throw new Error('Failed to fetch PDF')
      const blob = await response.blob()
      const blobUrl = URL.createObjectURL(blob)

      // Trigger download
      const link = document.createElement('a')
      link.href = blobUrl
      link.download = 'Lavanya_Rayapureddi_Resume.pdf'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)

      // Open PDF in a new tab
      window.open(pdfUrl, '_blank', 'noopener,noreferrer')

      // Release blob URL after a short delay
      setTimeout(() => URL.revokeObjectURL(blobUrl), 5000)
    } catch (err) {
      console.error('Resume download failed:', err)
      // Fallback: open in new tab directly
      window.open(pdfUrl, '_blank', 'noopener,noreferrer')
    }
  }

  const buttons = [
    { icon: <FiGithub />, label: 'GitHub', link: 'https://github.com/lavanyarayapureddi' },
    { icon: <FiLinkedin />, label: 'LinkedIn', link: 'https://www.linkedin.com/in/rayapureddi-lavanya' },
    { icon: <FiMail />, label: 'Email', link: 'mailto:lavanyarlvns@gmail.com' },
  ]

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  }

  return (
    <section id="about" className="section-pad" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Enhanced Background Blobs */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, 50, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute', top: '15%', left: '5%',
            width: '300px', height: '300px',
            background: 'radial-gradient(circle, rgba(108,99,255,0.12) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(50px)',
          }}
        />
        <motion.div
          animate={{ x: [0, -40, 0], y: [0, 60, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          style={{
            position: 'absolute', bottom: '15%', right: '5%',
            width: '350px', height: '350px',
            background: 'radial-gradient(circle, rgba(247,37,133,0.1) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(60px)',
          }}
        />
      </div>

      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <SectionTitle title="About Me" subtitle="Modern professional summary and network links" />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '2.5rem',
          alignItems: 'stretch',
        }}>
          {/* LEFT CONTAINER: Intro Card */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{
              y: -10,
              boxShadow: '0 20px 40px rgba(108, 99, 255, 0.15)',
              borderColor: 'var(--accent)'
            }}
            className="glass"
            style={{
              padding: '3rem 2.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              border: '1.5px solid var(--border)',
              transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Corner Glow */}
            <div style={{
              position: 'absolute', top: 0, right: 0,
              width: '100px', height: '100px',
              background: 'radial-gradient(circle at top right, rgba(108,99,255,0.1), transparent 70%)',
              pointerEvents: 'none'
            }} />

            <div>
              <span style={{
                color: 'var(--accent)',
                fontSize: '0.85rem',
                fontWeight: 700,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '0.75rem'
              }}>
                ABOUT ME
              </span>
              <h3 className="gradient-text" style={{
                fontSize: 'clamp(1.8rem, 4vw, 2.2rem)',
                fontWeight: 800,
                lineHeight: 1.2,
                letterSpacing: '-0.02em'
              }}>
                Frontend Developer & AI/ML Enthusiast
              </h3>
            </div>

            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: 1.9,
              fontSize: '1.05rem',
              margin: '0',
            }}>
              Passionate Frontend Developer with hands-on experience in React.js, responsive UI development,
              REST API integration, and real-time project development. Skilled in building scalable web
              applications with clean UI/UX and modern frontend technologies. Also exploring AI & ML
              to build intelligent digital experiences.
            </p>

            <div style={{
              marginTop: 'auto',
              width: '60px',
              height: '4px',
              background: 'linear-gradient(90deg, var(--accent), var(--accent-2))',
              borderRadius: '99px',
              boxShadow: '0 2px 10px var(--accent-glow)'
            }} />
          </motion.div>

          {/* RIGHT CONTAINER: Connect Card */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{
              y: -10,
              boxShadow: '0 20px 40px rgba(247, 37, 133, 0.1)',
              borderColor: 'var(--accent-2)'
            }}
            className="glass"
            style={{
              padding: '3rem 2.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem',
              border: '1.5px solid var(--border)',
              transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Highlighted Heading */}
            <div style={{ textAlign: 'center' }}>
              <h4 style={{
                fontSize: '1.4rem',
                fontWeight: 800,
                color: 'var(--text-primary)',
                letterSpacing: '-0.01em',
                marginBottom: '0.5rem'
              }}>
                Find me on <span className="gradient-text">these platforms</span>
              </h4>
              <div style={{
                width: '40px', height: '2px', background: 'var(--border)', margin: '0.5rem auto'
              }} />
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1.2rem',
              flex: 1
            }}>
              {buttons.map((btn) => (
                <motion.a
                  key={btn.label}
                  href={btn.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    scale: 1.08,
                    y: -5,
                    boxShadow: '0 10px 20px var(--accent-glow)'
                  }}
                  whileTap={{ scale: 0.94 }}
                  className="btn-glow-soft"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.75rem',
                    padding: '1.5rem 0.5rem',
                    borderRadius: '20px',
                    background: 'var(--bg-card)',
                    border: '1.5px solid var(--border)',
                    color: 'var(--text-primary)',
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    textDecoration: 'none',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    textAlign: 'center',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <span style={{
                    fontSize: '1.6rem',
                    color: 'var(--accent)',
                    background: 'var(--accent-glow)',
                    width: '50px',
                    height: '50px',
                    borderRadius: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '0.2rem',
                    transition: 'transform 0.3s ease'
                  }} className="icon-container">
                    {btn.icon}
                  </span>
                  {btn.label}
                  <div className="shimmer" />
                </motion.a>
              ))}

              {/* Resume — fetch + Blob download, then open in new tab */}
              <motion.button
                id="about-resume-btn"
                onClick={handleResumeDownload}
                whileHover={{
                  scale: 1.08,
                  y: -5,
                  boxShadow: '0 10px 20px var(--accent-glow)'
                }}
                whileTap={{ scale: 0.94 }}
                className="btn-glow-soft"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.75rem',
                  padding: '1.5rem 0.5rem',
                  borderRadius: '20px',
                  background: 'var(--bg-card)',
                  border: '1.5px solid var(--border)',
                  color: 'var(--text-primary)',
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  textAlign: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  fontFamily: 'inherit',
                }}
              >
                <span style={{
                  fontSize: '1.6rem',
                  color: 'var(--accent)',
                  background: 'var(--accent-glow)',
                  width: '50px',
                  height: '50px',
                  borderRadius: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '0.2rem',
                  transition: 'transform 0.3s ease'
                }} className="icon-container">
                  <FiDownload />
                </span>
                Resume
                <div className="shimmer" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .btn-glow-soft:hover {
          border-color: var(--accent);
          background: var(--bg-glass);
        }
        .btn-glow-soft:hover .icon-container {
          transform: translateY(-3px) scale(1.1);
          background: var(--accent);
          color: white;
        }
        .shimmer {
          position: absolute;
          top: -100%; left: -100%;
          width: 200%; height: 200%;
          background: linear-gradient(45deg, transparent, rgba(255,255,255,0.05), transparent);
          transition: 0.5s;
          pointer-events: none;
        }
        .btn-glow-soft:hover .shimmer {
          top: 100%; left: 100%;
        }
        @media (max-width: 640px) {
          .section-pad { padding: 4rem 1rem; }
        }
      `}</style>
    </section>
  )
}
