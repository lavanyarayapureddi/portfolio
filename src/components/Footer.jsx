import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { Link } from 'react-scroll'
import { personalInfo } from '../data/portfolioData'

const navLinks = ['home', 'about', 'skills', 'experience', 'projects', 'contact']

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--bg)',
      borderTop: '1px solid var(--border)',
      padding: '3rem 1.5rem',
    }}>
      <div style={{
        maxWidth: '1280px', margin: '0 auto',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', gap: '2rem',
      }}>
        {/* Logo */}
        <div style={{
          fontSize: '1.8rem', fontWeight: 800,
          background: 'linear-gradient(135deg, #6c63ff, #f72585)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>
          Lavanya.
        </div>

        {/* Nav */}
        <nav style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem 1.5rem', justifyContent: 'center' }}>
          {navLinks.map(item => (
            <Link
              key={item}
              to={item}
              smooth
              duration={500}
              style={{
                color: 'var(--text-secondary)',
                fontSize: '0.85rem',
                fontWeight: 500,
                cursor: 'pointer',
                textTransform: 'capitalize',
                transition: 'color 0.2s ease',
              }}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}
        </nav>

        {/* Social */}
        <div style={{ display: 'flex', gap: '1rem' }}>
          {[
            { icon: <FiGithub />, href: personalInfo.github },
            { icon: <FiLinkedin />, href: personalInfo.linkedin },
            { icon: <FiMail />, href: `mailto:${personalInfo.email}` },
          ].map(({ icon, href }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: '40px', height: '40px',
                borderRadius: '10px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--text-secondary)',
                fontSize: '1.05rem',
                transition: 'color 0.2s ease, border-color 0.2s ease',
              }}
            >
              {icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p style={{
          color: 'var(--text-secondary)',
          fontSize: '0.82rem',
          textAlign: 'center',
        }}>
          © {new Date().getFullYear()} Lavanya Rayapureddi. Designed & Developed with ❤️
        </p>
      </div>
    </footer>
  )
}
