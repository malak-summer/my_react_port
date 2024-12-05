import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Reviews from './pages/Reviews'
import ScrollToTop from './components/ScrollToTop'
import styles from './App.module.css'

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const closeMenu = () => {
      if (window.innerWidth > 768 && isMenuOpen) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('resize', closeMenu)
    return () => window.removeEventListener('resize', closeMenu)
  }, [isMenuOpen])

  return (
    <nav className={`${styles.navbar} ${scrollPosition > 50 ? styles.scrolled : ''}`}>
      <div className={styles.logo}>MALAK</div>
      <button 
        className={`${styles.mobileMenuBtn} ${isMenuOpen ? styles.open : ''}`}
        onClick={toggleMenu}
        aria-expanded={isMenuOpen}
        aria-label="Toggle navigation menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul className={`${styles.navLinks} ${isMenuOpen ? styles.active : ''}`}>
        <li><Link to="/" onClick={toggleMenu}>Accueil</Link></li>
        <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
        <li><Link to="/services" onClick={toggleMenu}>Services</Link></li>
        <li><Link to="/projects" onClick={toggleMenu}>Projects</Link></li>
        <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
        <li><Link to="/reviews" onClick={toggleMenu}>Reviews</Link></li>
      </ul>
    </nav>
  )
}

export default function App() {
  return (
    <Router>
      <div className={styles.app}>
        <Navigation />
        <main className={styles.mainContent}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/reviews" element={<Reviews />} />
          </Routes>
        </main>
        <footer className={styles.footer}>
          <p>&copy; {new Date().getFullYear()} Malak's Portfolio. All rights reserved.</p>
        </footer>
        <ScrollToTop />
      </div>
    </Router>
  )
}
