const { transporter, isBrevoConfigured } = require('../config/mailConfig')

/**
 * POST /api/contact
 * Validates form input, sends a professional HTML email to the owner's inbox.
 */
const sendContactEmail = async (req, res) => {
  console.log('📥  Received portfolio contact form submission request:')
  console.log('ℹ️  Request Body:', JSON.stringify(req.body, null, 2))
  const { name, email, message } = req.body

  // ── Environment variable validation ──────────────────────────────────────
  if (isBrevoConfigured) {
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS || !process.env.EMAIL_FROM) {
      console.error('❌ Server error: SMTP_USER, SMTP_PASS, or EMAIL_FROM is not set in environment variables for Brevo SMTP.')
      return res.status(500).json({
        success: false,
        message: 'Brevo SMTP credentials (SMTP_USER, SMTP_PASS, or EMAIL_FROM) are missing. Please add them to your environment variables on Render.',
      })
    }
  } else {
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('❌ Server error: EMAIL_USER or EMAIL_PASS is not set in environment variables for Gmail SMTP.')
      return res.status(500).json({
        success: false,
        message: 'Email credentials (EMAIL_USER or EMAIL_PASS) are missing on the hosting server. Please add them to your environment variables on Render.',
      })
    }
  }

  // ── Input validation ─────────────────────────────────────────────────────
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: 'All fields (name, email, message) are required.',
    })
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      message: 'Please provide a valid email address.',
    })
  }

  if (name.trim().length < 2) {
    return res.status(400).json({
      success: false,
      message: 'Name must be at least 2 characters.',
    })
  }

  if (message.trim().length < 10) {
    return res.status(400).json({
      success: false,
      message: 'Message must be at least 10 characters.',
    })
  }

  // ── Build professional HTML email ────────────────────────────────────────
  const submittedAt = new Date().toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    dateStyle: 'full',
    timeStyle: 'short',
  })

  const htmlBody = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <style>
        body { font-family: 'Segoe UI', Arial, sans-serif; background: #0f0f1a; color: #e0e0e0; margin: 0; padding: 0; }
        .wrapper { max-width: 600px; margin: 40px auto; background: #1a1a2e; border-radius: 16px; overflow: hidden; border: 1px solid #6c63ff44; }
        .header { background: linear-gradient(135deg, #6c63ff, #f72585); padding: 32px 40px; text-align: center; }
        .header h1 { color: #fff; margin: 0; font-size: 22px; font-weight: 800; letter-spacing: -0.02em; }
        .header p { color: rgba(255,255,255,0.75); margin: 8px 0 0; font-size: 13px; }
        .divider { height: 3px; background: linear-gradient(90deg, #6c63ff, #f72585, #4cc9f0); }
        .body { padding: 36px 40px; }
        .field { margin-bottom: 28px; }
        .field-label { font-size: 11px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #6c63ff; margin-bottom: 8px; }
        .field-value { font-size: 15px; color: #f0f0f0; background: rgba(108,99,255,0.08); border-left: 3px solid #6c63ff; padding: 12px 16px; border-radius: 0 8px 8px 0; line-height: 1.65; white-space: pre-wrap; word-break: break-word; }
        .field-value a { color: #4cc9f0; text-decoration: none; }
        .footer { background: rgba(0,0,0,0.2); padding: 20px 40px; text-align: center; font-size: 12px; color: #888; border-top: 1px solid #ffffff10; }
        .badge { display: inline-block; background: rgba(108,99,255,0.2); border: 1px solid #6c63ff55; color: #a9a4ff; border-radius: 999px; padding: 4px 14px; font-size: 12px; font-weight: 600; margin-top: 8px; }
      </style>
    </head>
    <body>
      <div class="wrapper">
        <div class="header">
          <h1>New Portfolio Contact Request</h1>
          <p>Someone reached out through your portfolio website</p>
        </div>
        <div class="divider"></div>
        <div class="body">
          <div class="field">
            <div class="field-label">Name</div>
            <div class="field-value">${name.trim()}</div>
          </div>
          <div class="field">
            <div class="field-label">Email</div>
            <div class="field-value"><a href="mailto:${email.trim()}">${email.trim()}</a></div>
          </div>
          <div class="field">
            <div class="field-label">Message</div>
            <div class="field-value">${message.trim()}</div>
          </div>
          <div class="field">
            <div class="field-label">Submitted From</div>
            <div class="field-value">Lavanya Rayapureddi — Portfolio Website</div>
          </div>
          <div class="field">
            <div class="field-label">Date &amp; Time</div>
            <div class="field-value">${submittedAt} (IST)</div>
          </div>
        </div>
        <div class="footer">
          <div>This message was sent via your portfolio contact form.</div>
          <div class="badge">lavanyarayapureddi.dev &mdash; Portfolio</div>
        </div>
      </div>
    </body>
    </html>
  `

  // ── Determine Mail From & To addresses ─────────────────────────────────────
  let mailFrom, mailTo
  if (isBrevoConfigured) {
    const fromEmail = process.env.EMAIL_FROM || process.env.SMTP_USER
    mailFrom = `"${name.trim()} via Portfolio" <${fromEmail}>`
    mailTo = process.env.EMAIL_TO || process.env.SMTP_USER || process.env.EMAIL_USER
  } else {
    mailFrom = `"Portfolio Contact" <${process.env.EMAIL_USER}>`
    mailTo = process.env.EMAIL_USER
  }

  const mailOptions = {
    from: mailFrom,
    to: mailTo,
    replyTo: email.trim(),
    subject: `New Portfolio Contact Message from ${name.trim()}`,
    html: htmlBody,
    text: `
================================
New Portfolio Contact Request
================================

Name:
${name.trim()}

Email:
${email.trim()}

Message:
${message.trim()}

Submitted From:
Portfolio Website

Date:
${submittedAt}

================================
    `.trim(),
  }

  // ── Dynamic transporter verification ──────────────────────────────────────
  console.log('ℹ️  Verifying mail transporter connection dynamically before sending...')
  try {
    await transporter.verify()
    console.log('✅  Dynamic transporter verification successful')
  } catch (verifyErr) {
    console.error('❌  Dynamic transporter verification failed before sendMail:')
    console.error(`  - Code: ${verifyErr.code || 'N/A'}`)
    console.error(`  - Message: ${verifyErr.message}`)
    if (verifyErr.stack) {
      console.error('  - Stack trace:', verifyErr.stack)
    }
  }

  // ── Send email ────────────────────────────────────────────────────────────
  try {
    console.log(`ℹ️  Sending email... (From: ${mailFrom}, To: ${mailTo}, Reply-To: ${email.trim()})`)
    const info = await transporter.sendMail(mailOptions)
    console.log('✅  Email sent successfully!')
    console.log('ℹ️  sendMail() result:', JSON.stringify(info, null, 2))
    return res.status(200).json({
      success: true,
      message: 'Message sent successfully.',
    })
  } catch (error) {
    console.error('FULL ERROR:', error)
    return res.status(500).json({
      success: false,
      message: error.message,
      stack: process.env.NODE_ENV !== 'production' ? error.stack : undefined
    })
  }
}

module.exports = { sendContactEmail }
