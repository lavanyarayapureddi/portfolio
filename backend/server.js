const dns = require('node:dns')
dns.setDefaultResultOrder('ipv4first')

require('dotenv').config()
const express = require('express')
const cors = require('cors')
const { verifyTransporter } = require('./config/mailConfig')
const contactRoutes = require('./routes/contactRoutes')

const app = express()
const PORT = process.env.PORT || 5000

// ── CORS ─────────────────────────────────────────────────────────────────────
// In development: allow all. In production: restrict to your deployed domain.
const allowedOrigins = [
  'http://localhost:5173',  // Vite dev server
  'http://localhost:3000',
  'https://lavanyarayapureddi.netlify.app',
  'https://lavanyarayapureddi.vercel.app',
  process.env.FRONTEND_URL,           // set on Render/Vercel for prod
].filter(Boolean).map(origin => origin.replace(/\/$/, ''))

app.use(cors({
  origin: (origin, callback) => {
    console.log(`ℹ️  Incoming CORS request from Origin: "${origin}"`)
    const formattedOrigin = origin ? origin.replace(/\/$/, '') : null
    
    // Check if the origin matches allowed list OR is a local development address
    const isLocalhost = formattedOrigin && (
      /^https?:\/\/localhost(:\d+)?$/.test(formattedOrigin) || 
      /^https?:\/\/127\.0\.0\.1(:\d+)?$/.test(formattedOrigin)
    )

    // Check if origin matches Vercel or Netlify subdomains
    const isVercelOrNetlify = formattedOrigin && (
      /^https?:\/\/.*\.vercel\.app$/.test(formattedOrigin) ||
      /^https?:\/\/.*\.netlify\.app$/.test(formattedOrigin)
    )

    if (!origin || allowedOrigins.includes(formattedOrigin) || isLocalhost || isVercelOrNetlify) {
      console.log(`✅  CORS origin accepted: "${origin}"`)
      return callback(null, true)
    }
    console.warn(`⚠️  CORS blocked origin: "${origin}". Allowed origins are:`, allowedOrigins)
    callback(null, false)
  },
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
}))

// ── Body parsing ──────────────────────────────────────────────────────────────
app.use(express.json({ limit: '10kb' }))
app.use(express.urlencoded({ extended: true }))

// ── Health check ──────────────────────────────────────────────────────────────
app.get('/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

// ── Routes ────────────────────────────────────────────────────────────────────
app.use('/api/contact', contactRoutes)

// ── 404 handler ───────────────────────────────────────────────────────────────
app.use((_req, res) => {
  res.status(404).json({ success: false, message: 'Route not found' })
})

// ── Global error handler ──────────────────────────────────────────────────────
app.use((err, _req, res, _next) => {
  console.error('❌ GLOBAL SERVER ERROR:', err)
  res.status(500).json({ 
    success: false, 
    message: err.message || 'Internal server error',
    stack: process.env.NODE_ENV !== 'production' ? err.stack : undefined
  })
})

// ── Start ─────────────────────────────────────────────────────────────────────
if (require.main === module) {
  app.listen(PORT, async () => {
    console.log(`🚀  Backend running on http://localhost:${PORT}`)
    
    // Validate and log critical environment variables
    console.log('ℹ️  Verifying environment variables at startup:')
    console.log(`  - EMAIL_USER: ${process.env.EMAIL_USER ? `"${process.env.EMAIL_USER}"` : '⚠️  NOT SET'}`)
    console.log(`  - EMAIL_PASS: ${process.env.EMAIL_PASS ? '[Configured]' : '⚠️  NOT SET'}`)
    console.log(`  - FRONTEND_URL: ${process.env.FRONTEND_URL ? `"${process.env.FRONTEND_URL}"` : '⚠️  NOT SET'}`)
    console.log(`  - SMTP_HOST: ${process.env.SMTP_HOST ? `"${process.env.SMTP_HOST}"` : 'Not set (falling back to smtp.gmail.com)'}`)
    console.log(`  - SMTP_USER: ${process.env.SMTP_USER ? `"${process.env.SMTP_USER}"` : 'Not set'}`)
    console.log(`  - EMAIL_FROM: ${process.env.EMAIL_FROM ? `"${process.env.EMAIL_FROM}"` : 'Not set'}`)
    console.log(`  - EMAIL_TO: ${process.env.EMAIL_TO ? `"${process.env.EMAIL_TO}"` : 'Not set'}`)

    await verifyTransporter()
  })
}

module.exports = app
