import { motion } from 'framer-motion'
import SectionTitle from './SectionTitle'
import { experience } from '../data/portfolioData'
import { FiBriefcase, FiMapPin, FiCalendar, FiCheckCircle, FiAward } from 'react-icons/fi'
import { HiOutlineOfficeBuilding } from 'react-icons/hi'

export default function Experience() {
  return (
    <section id="experience" className="section-pad" style={{ background: 'var(--bg)', position: 'relative', overflow: 'hidden' }}>
      {/* Background Orbs for atmosphere */}
      <div style={{
        position: 'absolute', top: '20%', right: '-10%',
        width: '400px', height: '400px',
        background: 'rgba(108, 99, 255, 0.05)',
        filter: 'blur(100px)', borderRadius: '50%', zIndex: 0
      }} />
      <div style={{
        position: 'absolute', bottom: '10%', left: '-10%',
        width: '350px', height: '350px',
        background: 'rgba(247, 37, 133, 0.05)',
        filter: 'blur(100px)', borderRadius: '50%', zIndex: 0
      }} />

      <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <SectionTitle title="Work Experience" subtitle="My professional journey so far" />

        <div style={{ position: 'relative', marginTop: '4rem' }}>
          {/* Vertical Glowing Timeline Line */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            style={{
              position: 'absolute',
              left: '28px',
              top: 0,
              width: '4px',
              background: 'linear-gradient(to bottom, transparent, var(--accent), var(--accent-2), transparent)',
              borderRadius: '10px',
              boxShadow: '0 0 15px var(--accent-glow)',
            }} 
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            {experience.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: i * 0.2 }}
                style={{ position: 'relative', paddingLeft: '80px' }}
              >
                {/* Timeline Node */}
                <motion.div 
                  initial={{ scale: 0, rotate: -45 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 200, delay: i * 0.2 + 0.3 }}
                  style={{
                    position: 'absolute',
                    left: '12px',
                    top: '1.5rem',
                    width: '36px', height: '36px',
                    borderRadius: '50%',
                    background: i % 2 === 0 ? 'var(--accent)' : 'var(--accent-2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    zIndex: 2,
                    boxShadow: `0 0 20px ${i % 2 === 0 ? 'rgba(108, 99, 255, 0.6)' : 'rgba(247, 37, 133, 0.6)'}`,
                    border: '4px solid var(--bg)'
                  }}
                >
                  <FiBriefcase size={16} color="#fff" />
                </motion.div>

                {/* Experience Card */}
                <motion.div
                  whileHover={{ 
                    y: -6, 
                    scale: 1.01,
                    boxShadow: '0 20px 40px rgba(0,0,0,0.3), 0 0 20px var(--accent-glow)'
                  }}
                  className="glass"
                  style={{ 
                    padding: '2.5rem',
                    border: '1px solid var(--border)',
                    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  {/* Glowing Corner accent */}
                  <div style={{
                    position: 'absolute', top: 0, right: 0,
                    width: '100px', height: '100px',
                    background: `linear-gradient(225deg, ${i % 2 === 0 ? 'var(--accent)' : 'var(--accent-2)'}22, transparent)`,
                    zIndex: -1
                  }} />

                  <div style={{
                    display: 'flex', justifyContent: 'space-between',
                    alignItems: 'flex-start', flexWrap: 'wrap', gap: '1.5rem',
                    marginBottom: '2rem'
                  }}>
                    <div style={{ flex: '1 1 300px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.01em' }}>
                          {exp.role}
                        </h3>
                        <span style={{
                          fontSize: '0.7rem',
                          fontWeight: 700,
                          padding: '0.25rem 0.75rem',
                          borderRadius: '6px',
                          background: i % 2 === 0 ? 'rgba(108, 99, 255, 0.15)' : 'rgba(247, 37, 133, 0.15)',
                          color: i % 2 === 0 ? 'var(--accent)' : 'var(--accent-2)',
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em',
                          border: `1px solid ${i % 2 === 0 ? 'rgba(108, 99, 255, 0.2)' : 'rgba(247, 37, 133, 0.2)'}`
                        }}>
                          {exp.type}
                        </span>
                      </div>
                      
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem', fontWeight: 600 }}>
                        <HiOutlineOfficeBuilding className="gradient-text" style={{ fontSize: '1.2rem' }} />
                        <span className="gradient-text">{exp.company}</span>
                      </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', alignItems: 'flex-start', minWidth: '180px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.85rem', fontWeight: 500 }}>
                        <FiCalendar style={{ color: 'var(--accent)' }} />
                        {exp.period}
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.85rem', fontWeight: 500 }}>
                        <FiMapPin style={{ color: 'var(--accent-2)' }} />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  {/* Bullet Points */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {exp.points.map((point, j) => (
                      <motion.div
                        key={j}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.2 + j * 0.1 + 0.5 }}
                        style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}
                      >
                        <div style={{ 
                          marginTop: '5px',
                          width: '18px', height: '18px', 
                          borderRadius: '50%', 
                          background: 'rgba(108, 99, 255, 0.1)', 
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          flexShrink: 0
                        }}>
                          <FiCheckCircle size={12} style={{ color: 'var(--accent)' }} />
                        </div>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, fontWeight: 400 }}>
                          {point}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
