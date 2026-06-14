import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'


const navLinks = [
  { label: 'Home', to: 'home' },
  { label: 'About', to: 'about' },
  { label: 'Education', to: 'education' },
  { label: 'Skills', to: 'skills' },
  { label: 'Experience', to: 'experience' },
  { label: 'Projects', to: 'projects' },
  { label: 'Contact', to: 'contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // close menu on resize
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{
          position: 'fixed',
          top: 0, left: 0,
          width: '100%',
          zIndex: 1000,
          background: scrolled ? 'var(--navbar-bg)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
          borderBottom: scrolled ? '1px solid var(--border)' : 'none',
          transition: 'background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
          boxShadow: scrolled ? 'var(--shadow)' : 'none',
        }}
      >
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 1.5rem',
          height: '80px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          {/* Logo */}
          <Link to="home" smooth duration={500} style={{ cursor: 'pointer' }}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              style={{
                fontSize: '1.5rem',
                fontWeight: 800,
                color: '#4F6EF7',
                letterSpacing: '-0.02em',
              }}
            >
              Lavanya Rayapureddi
            </motion.div>
          </Link>

          {/* Right controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            {/* Desktop Nav */}
            <ul style={{
              display: 'flex',
              gap: '0.25rem',
              listStyle: 'none',
              alignItems: 'center',
              margin: 0,
              padding: 0,
            }}
              className="nav-desktop"
            >
              {navLinks.map(link => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    smooth
                    duration={500}
                    spy
                    onSetActive={() => setActiveSection(link.to)}
                    style={{
                      padding: '0.5rem 1rem',
                      borderRadius: '10px',
                      fontWeight: 500,
                      fontSize: '0.9rem',
                      color: activeSection === link.to ? 'var(--accent)' : 'var(--text-secondary)',
                      background: activeSection === link.to ? 'var(--accent-glow)' : 'transparent',
                      transition: 'all 0.2s ease',
                      display: 'block',
                      cursor: 'pointer',
                    }}
                    className="nav-link"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            {/* Hamburger */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMenuOpen(o => !o)}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: '10px',
                width: '38px', height: '38px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--accent)',
                fontSize: '1.3rem',
                cursor: 'pointer',
              }}
              className="hamburger"
              aria-label="Open menu"
            >
              {menuOpen ? <HiX /> : <HiMenuAlt3 />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            style={{
              position: 'fixed',
              top: '80px', left: 0, right: 0,
              background: 'var(--navbar-bg)',
              backdropFilter: 'blur(20px)',
              borderBottom: '1px solid var(--border)',
              zIndex: 999,
              padding: '1rem',
            }}
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.to}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
              >
                <Link
                  to={link.to}
                  smooth
                  duration={500}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    display: 'block',
                    padding: '0.85rem 1rem',
                    borderRadius: '10px',
                    color: 'var(--text-primary)',
                    fontWeight: 500,
                    fontSize: '0.95rem',
                    cursor: 'pointer',
                    transition: 'background 0.2s ease, color 0.2s ease',
                  }}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 769px) { .hamburger { display: none !important; } }
        @media (max-width: 768px) { .nav-desktop { display: none !important; } }
        .nav-link:hover { background: var(--accent-glow) !important; color: var(--accent) !important; }
      `}</style>
    </>
  )
}
