import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { scroller } from 'react-scroll'
import Loader from './components/Loader'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import StudentHubDetails from './components/StudentHubDetails'

// ── Main portfolio single-page view ───────────────────────────────────────────
function PortfolioHome() {
  const location = useLocation()
  const [loading, setLoading] = useState(() => {
    return !location.state?.scrollTo
  })

  useEffect(() => {
    if (!loading && location.state?.scrollTo) {
      const target = location.state.scrollTo
      setTimeout(() => {
        scroller.scrollTo(target, {
          duration: 800,
          delay: 50,
          smooth: 'easeInOutQuart',
        })
      }, 100)
    }
  }, [loading, location])

  return (
    <>
      {loading && <Loader onDone={() => setLoading(false)} />}
      {!loading && (
        <>
          <Navbar />
          <main>
            <Hero />
            <About />
            <Education />
            <Skills />
            <Experience />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </>
  )
}

// ── Root App ──────────────────────────────────────────────────────────────────
function App() {
  const [theme] = useState(() => localStorage.getItem('portfolio-theme') || 'dark')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  return (
    <BrowserRouter>
      <Routes>
        {/* Main portfolio page */}
        <Route path="/" element={<PortfolioHome />} />

        {/* Student Hub case study */}
        <Route path="/project/student-hub" element={<StudentHubDetails />} />

        {/* Catch-all: redirect any unknown URL back to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
