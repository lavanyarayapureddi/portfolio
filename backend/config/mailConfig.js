const nodemailer = require('nodemailer')

const isBrevoConfigured = !!process.env.SMTP_HOST
const host = isBrevoConfigured ? process.env.SMTP_HOST : 'smtp.gmail.com'
const port = isBrevoConfigured ? parseInt(process.env.SMTP_PORT || '587', 10) : 587
const secure = isBrevoConfigured ? (process.env.SMTP_SECURE === 'true' || port === 465) : false
const user = isBrevoConfigured ? process.env.SMTP_USER : process.env.EMAIL_USER
const pass = isBrevoConfigured ? process.env.SMTP_PASS : process.env.EMAIL_PASS

console.log(`ℹ️  Initializing mail transporter using ${isBrevoConfigured ? 'Brevo/Custom SMTP' : 'Gmail SMTP'}`)
console.log(`ℹ️  SMTP Host: ${host}, Port: ${port}, Secure: ${secure}`)

const transporter = nodemailer.createTransport({
  host,
  port,
  secure,
  auth: {
    user,
    pass,
  },
  tls: {
    rejectUnauthorized: false, // handles self-signed cert
  },
  family: 4, // Force IPv4 to prevent ENETUNREACH/connection timeouts on Render (which has disabled IPv6 routing)
  debug: true, // Enables SMTP traffic logging in console (crucial for debugging)
  logger: true, // Logs SMTP traffic details to console
})

/**
 * Verify transporter connection on startup
 */
const verifyTransporter = async () => {
  if (!user || !pass) {
    console.warn('⚠️  Mail credentials (EMAIL_USER/EMAIL_PASS or SMTP_USER/SMTP_PASS) are not fully configured. Transporter verification skipped.')
    return false
  }
  try {
    console.log('ℹ️  Verifying SMTP connection...')
    await transporter.verify()
    console.log('✅  Mail transporter connection verified successfully!')
    return true
  } catch (err) {
    console.error('❌  Mail transporter verification failed:')
    console.error(`  - Code: ${err.code || 'N/A'}`)
    console.error(`  - Message: ${err.message}`)
    console.error(`  - Command: ${err.command || 'N/A'}`)
    if (err.code === 'EADDRNOTAVAIL' || err.code === 'ENETUNREACH') {
      console.error('  - Suggestion: This is a network reaching error. Ensure outbound SMTP connections are allowed on your server/firewall and that family: 4 is active.')
    } else if (err.code === 'ETIMEDOUT') {
      console.error('  - Suggestion: Connection timed out. Make sure the port (587/465) is open and not blocked by the host.')
    }
    return false
  }
}

module.exports = { transporter, verifyTransporter, isBrevoConfigured }

