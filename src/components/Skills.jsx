import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionTitle from './SectionTitle'
import { skills } from '../data/portfolioData'
import {
  SiReact, SiJavascript, SiHtml5, SiCss, SiTailwindcss,
  SiNodedotjs, SiPython, SiOpenjdk, SiMysql, SiPostgresql,
  SiGit, SiGithub, SiFigma,
  SiScikitlearn, SiNumpy, SiPandas, SiOpenai
} from 'react-icons/si'
import { TbBrain } from 'react-icons/tb'
import { FiCode } from 'react-icons/fi'
import { RiPlanetFill } from 'react-icons/ri'

const iconMap = {
  react: <SiReact />,
  js: <SiJavascript />,
  html: <SiHtml5 />,
  css: <SiCss />,
  tailwind: <SiTailwindcss />,
  node: <SiNodedotjs />,
  python: <SiPython />,
  java: <SiOpenjdk />,
  mysql: <SiMysql />,
  postgresql: <SiPostgresql />,
  git: <SiGit />,
  github: <SiGithub />,
  figma: <SiFigma />,
  vscode: <FiCode />,
  openai: <SiOpenai />,
  ml: <TbBrain />,
  numpy: <SiNumpy />,
  pandas: <SiPandas />,
  sklearn: <SiScikitlearn />,
  antigravity: <RiPlanetFill />,
}

const colorMap = {
  react: '#61dafb', js: '#f7df1e', html: '#e34f26', css: '#1572b6',
  tailwind: '#06b6d4', node: '#339933', python: '#3776ab', java: '#007396',
  mysql: '#4479a1', postgresql: '#4169e1', git: '#f05032', github: '#6c63ff',
  figma: '#f24e1e', vscode: '#007acc', openai: '#10a37f', ml: '#f72585', 
  numpy: '#4dabcf', pandas: '#130654', sklearn: '#f89820', antigravity: '#a78bfa',
}

const categories = ['All', 'Frontend', 'Backend', 'Languages', 'Tools']

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? skills
    : skills.filter(s => s.category === activeCategory)

  return (
    <section id="skills" className="section-pad" style={{ background: 'var(--bg-card)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <SectionTitle title="My Skills" subtitle="Technologies and tools I work with" />

        {/* Filter pills */}
        <div style={{
          display: 'flex', gap: '1rem', justifyContent: 'center',
          flexWrap: 'wrap', marginBottom: '4rem',
        }}>
          {categories.map(cat => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '0.6rem 1.8rem',
                borderRadius: '999px',
                border: activeCategory === cat ? 'none' : '1px solid var(--border)',
                background: activeCategory === cat 
                  ? 'linear-gradient(135deg, var(--accent), var(--accent-2))' 
                  : 'rgba(255, 255, 255, 0.03)',
                color: activeCategory === cat ? '#fff' : 'var(--text-secondary)',
                fontWeight: 600,
                fontSize: '0.9rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: activeCategory === cat ? '0 8px 20px var(--accent-glow)' : 'none',
              }}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Skills grid */}
        <motion.div
          layout
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '1.5rem',
          }}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((skill, i) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="skill-card-premium"
                style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid var(--border)',
                  borderRadius: '16px',
                  padding: '2rem 1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '1rem',
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'default',
                  transition: 'all 0.3s ease',
                  width: '180px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = colorMap[skill.icon] || 'var(--accent)'
                  e.currentTarget.style.boxShadow = `0 10px 30px -10px ${colorMap[skill.icon] || 'var(--accent)'}44`
                  e.currentTarget.style.transform = 'translateY(-5px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border)'
                  e.currentTarget.style.boxShadow = 'none'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                <div style={{
                  fontSize: '2.8rem',
                  color: colorMap[skill.icon] || 'var(--accent)',
                  transition: 'transform 0.3s ease',
                }}>
                  {iconMap[skill.icon] || '⚙️'}
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ 
                    fontSize: '0.95rem', 
                    fontWeight: 600, 
                    color: 'var(--text-primary)',
                    letterSpacing: '0.02em'
                  }}>
                    {skill.name}
                  </span>
                  
                  {/* Decorative line */}
                  <div style={{
                    width: '30px',
                    height: '3px',
                    borderRadius: '2px',
                    background: `linear-gradient(90deg, ${colorMap[skill.icon] || 'var(--accent)'}, transparent)`,
                    marginTop: '2px'
                  }} />

                  {skill.badge && (
                    <span style={{
                      fontSize: '0.65rem',
                      padding: '0.2rem 0.6rem',
                      background: 'rgba(108, 99, 255, 0.2)',
                      color: 'var(--accent)',
                      borderRadius: '4px',
                      marginTop: '0.4rem',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}>
                      {skill.badge}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
