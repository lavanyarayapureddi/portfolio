import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionTitle from './SectionTitle'
import { personalInfo } from '../data/portfolioData'
import { FiMail, FiMapPin, FiSend, FiCheckCircle, FiAlertCircle, FiLoader } from 'react-icons/fi'
import { sendContactMessage } from '../services/contactService'

// ── Submission states ─────────────────────────────────────────────────────────
const STATUS = { IDLE: 'idle', LOADING: 'loading', SUCCESS: 'success', ERROR: 'error' }

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(STATUS.IDLE)
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()

    // ── Client-side validation ────────────────────────────────────────────
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus(STATUS.ERROR)
      setErrorMsg('Please fill in all fields before sending.')
      return
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(form.email.trim())) {
      setStatus(STATUS.ERROR)
      setErrorMsg('Please enter a valid email address.')
      return
    }

    setStatus(STATUS.LOADING)
    setErrorMsg('')

    try {
      await sendContactMessage({
        name: form.name.trim(),
        email: form.email.trim(),
        message: form.message.trim(),
      })
      setStatus(STATUS.SUCCESS)
      setForm({ name: '', email: '', message: '' })
      // Auto-dismiss success banner after 6 s
      setTimeout(() => setStatus(STATUS.IDLE), 6000)
    } catch (err) {
      console.error('Contact form error:', {
        message: err.message,
        response: err.response?.data,
        status: err.response?.status,
        stack: err.stack
      })
      setStatus(STATUS.ERROR)
      setErrorMsg(
        err?.response?.data?.message ||
        'Failed to send message. Please try again.'
      )
    }
  }

  const isLoading = status === STATUS.LOADING

  return (
    <section
      id="contact"
      className="section-pad"
      style={{ background: 'var(--bg-card)', borderTop: '1px solid var(--border)' }}
    >
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <SectionTitle
          title="Get In Touch"
          subtitle="Have a project in mind? Let's build something great together."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2.5rem',
            alignItems: 'start',
          }}
        >
          {/* ── Left: Contact info card ──────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{
              position: 'relative',
              padding: '2rem',
              borderRadius: '24px',
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid var(--border)',
              overflow: 'hidden',
            }}
          >
            {/* Animated bottom border/glow */}
            <motion.div
              animate={{ x: ['-100%', '100%'], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                height: '3px',
                background: 'linear-gradient(90deg, transparent, #4cc9f0, transparent)',
                filter: 'blur(1px)',
              }}
            />

            <h3
              style={{
                fontSize: '1.4rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginBottom: '1rem',
              }}
            >
              Let's Talk
            </h3>
            <p
              style={{
                color: 'var(--text-secondary)',
                lineHeight: 1.85,
                fontSize: '0.93rem',
                marginBottom: '2rem',
              }}
            >
              I'm currently open to new opportunities and collaborations.
              Whether you have a question or just want to say hi, my inbox is always open!
            </p>

            {/* Social / contact links */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {[
                {
                  icon: <FiMail />,
                  label: personalInfo.email,
                  href: `mailto:${personalInfo.email}`,
                  color: '#4cc9f0',
                },
                {
                  icon: <FiMapPin />,
                  label: personalInfo.location,
                  href: '#',
                  color: '#4cc9f0',
                },
              ].map(({ icon, label, href, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  whileHover={{ x: 8, backgroundColor: 'rgba(76, 201, 240, 0.1)' }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '1rem 1.25rem',
                    borderRadius: '14px',
                    background: 'var(--bg)',
                    border: '1px solid var(--border)',
                    textDecoration: 'none',
                    color: 'var(--text-primary)',
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    transition: 'background 0.2s ease',
                  }}
                >
                  <span
                    style={{
                      color,
                      fontSize: '1.2rem',
                      width: '36px',
                      height: '36px',
                      background: `${color}18`,
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {icon}
                  </span>
                  {label}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* ── Right: Contact form ──────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass"
            style={{ padding: '2.5rem' }}
          >
            {/* ── Success banner ── */}
            <AnimatePresence>
              {status === STATUS.SUCCESS && (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: -12, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -12, scale: 0.96 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '1rem 1.25rem',
                    borderRadius: '14px',
                    background: 'rgba(76, 201, 128, 0.12)',
                    border: '1px solid rgba(76, 201, 128, 0.4)',
                    color: '#4cc980',
                    fontWeight: 600,
                    fontSize: '0.93rem',
                    marginBottom: '1.5rem',
                  }}
                >
                  <FiCheckCircle style={{ fontSize: '1.3rem', flexShrink: 0 }} />
                  Message sent successfully. I'll get back to you soon! ✨
                </motion.div>
              )}
            </AnimatePresence>

            {/* ── Error banner ── */}
            <AnimatePresence>
              {status === STATUS.ERROR && (
                <motion.div
                  key="error"
                  initial={{ opacity: 0, y: -12, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -12, scale: 0.96 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '1rem 1.25rem',
                    borderRadius: '14px',
                    background: 'rgba(247, 37, 133, 0.1)',
                    border: '1px solid rgba(247, 37, 133, 0.35)',
                    color: '#f72585',
                    fontWeight: 600,
                    fontSize: '0.93rem',
                    marginBottom: '1.5rem',
                  }}
                >
                  <FiAlertCircle style={{ fontSize: '1.3rem', flexShrink: 0 }} />
                  {errorMsg || 'Failed to send message. Please try again.'}
                </motion.div>
              )}
            </AnimatePresence>

            {/* ── Form ── */}
            <form
              onSubmit={handleSubmit}
              style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
              noValidate
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="contact-name"
                  style={{
                    display: 'block',
                    marginBottom: '0.4rem',
                    color: 'var(--text-secondary)',
                    fontSize: '0.85rem',
                    fontWeight: 500,
                  }}
                >
                  Your Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Lavanya Rayapureddi"
                  required
                  disabled={isLoading}
                  className="form-input"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="contact-email"
                  style={{
                    display: 'block',
                    marginBottom: '0.4rem',
                    color: 'var(--text-secondary)',
                    fontSize: '0.85rem',
                    fontWeight: 500,
                  }}
                >
                  Email Address
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                  disabled={isLoading}
                  className="form-input"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  style={{
                    display: 'block',
                    marginBottom: '0.4rem',
                    color: 'var(--text-secondary)',
                    fontSize: '0.85rem',
                    fontWeight: 500,
                  }}
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell me about your project..."
                  required
                  disabled={isLoading}
                  className="form-input"
                  style={{ resize: 'vertical' }}
                />
              </div>

              {/* Submit button */}
              <motion.button
                type="submit"
                id="contact-submit"
                disabled={isLoading}
                whileHover={isLoading ? {} : { scale: 1.03 }}
                whileTap={isLoading ? {} : { scale: 0.97 }}
                className="btn-glow"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.6rem',
                  width: '100%',
                  opacity: isLoading ? 0.7 : 1,
                  cursor: isLoading ? 'not-allowed' : 'pointer',
                }}
              >
                {isLoading ? (
                  <>
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      style={{ display: 'inline-flex' }}
                    >
                      <FiLoader />
                    </motion.span>
                    Sending…
                  </>
                ) : (
                  <>
                    <FiSend /> Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
