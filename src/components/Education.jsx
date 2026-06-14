import { motion } from 'framer-motion'
import SectionTitle from './SectionTitle'

export default function Education() {
  const educationData = [
    {
      title: '10th',
      institution: 'Syamala High School',
      location: 'In Pedana',
      percentage: '99%',
      src: 'https://png.pngtree.com/png-clipart/20230715/ourmid/pngtree-school-building-vector-images-png-image_7507280.png'
    },
    {
      title: 'Intermediate',
      institution: 'Vijayanandha Junior College',
      location: 'In Pedana',
      percentage: '94%',
      src: 'https://cdn.britannica.com/03/130603-050-37F7F535/Alliman-Administration-Center-Hesston-College-Mennonite-college.jpg'
    },
    {
      title: 'B.Tech',
      institution: 'Sri Vasavi Institute of Engineering and Technology',
      location: 'In Nadamuru',
      percentage: '77%',
      src: 'https://www.sviet.edu.in/wp-content/uploads/2023/05/svietacheivement-2.jpg'
    }
  ]

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' }
    })
  }

  return (
    <section id="education" className="section-pad">
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <SectionTitle 
          title="Education Details" 
          subtitle="A summary of my academic background and achievements" 
        />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '2rem',
          justifyContent: 'center'
        }}>
          {educationData.map((edu, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              whileHover={{ 
                y: -12,
                boxShadow: '0 20px 40px rgba(108, 99, 255, 0.12)',
                borderColor: 'var(--accent)'
              }}
              className="glass education-card"
              style={{
                padding: '1.75rem 1.5rem',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1.25rem',
                background: 'var(--bg-card)',
                border: '1.2px solid var(--border)',
                borderRadius: '24px',
                boxShadow: 'var(--shadow)',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <h3 style={{ 
                fontSize: '1.4rem', 
                fontWeight: 800, 
                color: 'var(--accent)',
                letterSpacing: '-0.01em',
                margin: 0
              }}>
                {edu.title}
              </h3>

              <div style={{
                width: '100%',
                height: '150px',
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid var(--border)',
                background: 'var(--bg)'
              }}>
                <img 
                  src={edu.src} 
                  alt={edu.institution} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                  className="card-image"
                />
              </div>

              <div style={{ 
                marginTop: 'auto', 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '0.4rem',
                width: '100%'
              }}>
                <h4 style={{ 
                  fontSize: '1.05rem', 
                  fontWeight: 700, 
                  color: 'var(--text-primary)',
                  lineHeight: 1.4,
                  margin: 0
                }}>
                  {edu.institution}
                </h4>
                <p style={{ 
                  fontSize: '0.85rem', 
                  color: 'var(--text-secondary)',
                  fontWeight: 500,
                  opacity: 0.9,
                  margin: 0
                }}>
                  {edu.location}
                </p>
                <div style={{
                  fontSize: '1.2rem',
                  fontWeight: 800,
                  color: 'var(--accent)',
                  marginTop: '0.6rem',
                  background: 'var(--accent-glow)',
                  padding: '0.4rem 1.2rem',
                  borderRadius: '10px',
                  display: 'inline-block',
                  alignSelf: 'center',
                  border: '1px solid rgba(108, 99, 255, 0.2)'
                }}>
                  {edu.percentage}
                </div>
              </div>

              {/* Decorative Subtle Line */}
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: '10%',
                right: '10%',
                height: '3px',
                background: 'linear-gradient(90deg, transparent, var(--accent), transparent)',
                opacity: 0,
                transition: 'opacity 0.3s ease'
              }} className="bottom-line" />
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .education-card:hover .card-image {
          transform: scale(1.08);
        }
        .education-card:hover .bottom-line {
          opacity: 0.6;
        }
        @media (max-width: 640px) {
          .education-card { padding: 1.5rem 1.25rem; }
        }
      `}</style>
    </section>
  )
}
