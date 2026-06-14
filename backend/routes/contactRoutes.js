const express = require('express')
const { sendContactEmail } = require('../controllers/contactController')

const router = express.Router()

// POST /api/contact — send contact form email
router.post('/', sendContactEmail)

module.exports = router
