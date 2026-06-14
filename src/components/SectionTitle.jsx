import { motion } from 'framer-motion'

export default function SectionTitle({ title, subtitle, light = false }) {
  return (
    <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{
          fontSize: 'clamp(2rem, 5vw, 3rem)',
          fontWeight: 800,
          letterSpacing: '-0.02em',
          color: light ? '#fff' : 'var(--text-primary)',
        }}
      >
        {title.split(' ').map((word, i) =>
          i === title.split(' ').length - 1 ? (
            <span key={i} className="gradient-text"> {word}</span>
          ) : (
            <span key={i}>{word} </span>
          )
        )}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          style={{
            color: light ? 'rgba(255,255,255,0.7)' : 'var(--text-secondary)',
            marginTop: '0.75rem',
            fontSize: '1rem',
            maxWidth: '520px',
            margin: '0.75rem auto 0',
          }}
        >
          {subtitle}
        </motion.p>
      )}

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.25 }}
        style={{
          width: '60px',
          height: '4px',
          background: 'linear-gradient(90deg, #6c63ff, #f72585)',
          borderRadius: '9px',
          margin: '1.2rem auto 0',
          transformOrigin: 'left center',
        }}
      />
    </div>
  )
}
