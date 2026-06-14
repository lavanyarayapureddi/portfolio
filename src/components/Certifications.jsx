import { motion } from 'framer-motion'
import SectionTitle from './SectionTitle'
import { certifications } from '../data/portfolioData'
import { FiExternalLink, FiAward } from 'react-icons/fi'

export default function Certifications() {
  return (
    <section id="certifications" className="section-pad">
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <SectionTitle title="Certifications" subtitle="Validated skills and completed courses" />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '1.5rem',
        }}>
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5, boxShadow: `0 16px 40px ${cert.color}33` }}
              className="glass"
              style={{ padding: '1.8rem', cursor: 'pointer', position: 'relative', overflow: 'hidden' }}
            >
              {/* Color accent bar top */}
              <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0,
                height: '3px',
                background: `linear-gradient(90deg, ${cert.color}, transparent)`,
              }} />

              {/* Icon */}
              <div style={{
                width: '48px', height: '48px',
                borderRadius: '14px',
                background: `${cert.color}22`,
                border: `1px solid ${cert.color}44`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '1.1rem',
              }}>
                <FiAward style={{ color: cert.color, fontSize: '1.4rem' }} />
              </div>

              <h3 style={{
                fontSize: '1rem', fontWeight: 700,
                color: 'var(--text-primary)',
                marginBottom: '0.4rem',
                lineHeight: 1.4,
              }}>
                {cert.title}
              </h3>

              <p style={{ color: cert.color, fontWeight: 600, fontSize: '0.87rem' }}>
                {cert.issuer}
              </p>

              <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                marginTop: '1rem',
              }}>
                <span style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.8rem',
                  background: 'var(--bg)',
                  borderRadius: '6px',
                  padding: '0.2rem 0.6rem',
                  border: '1px solid var(--border)',
                }}>
                  📅 {cert.date}
                </span>

                <motion.a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '0.3rem',
                    color: cert.color, fontSize: '0.82rem', fontWeight: 600,
                    textDecoration: 'none',
                  }}
                >
                  <FiExternalLink /> Verify
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
