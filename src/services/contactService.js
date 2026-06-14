/**
 * contactService.js
 * Uses native fetch (built into browsers) — no external dependencies needed.
 * Base URL switches automatically between local dev and Vite production env var.
 */

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'

/**
 * Sends a contact form submission to the backend.
 * @param {{ name: string, email: string, message: string }} data
 * @returns {Promise<{ success: boolean, message: string }>}
 */
export const sendContactMessage = async (data) => {
  const response = await fetch(`${API_BASE_URL}/api/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })

  const result = await response.json()

  if (!response.ok) {
    // Throw so the catch block in Contact.jsx picks up the server error message
    const error = new Error(result.message || `HTTP error! Status: ${response.status}`)
    error.response = { data: result, status: response.status }
    throw error
  }

  return result
}
