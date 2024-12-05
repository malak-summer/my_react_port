import React, { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react';
import styles from '../css/ScrollToTop.module.css'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      {isVisible && (
        <button 
          onClick={scrollToTop} 
          className={styles.scrollToTop}
          aria-label="Scroll to top"
        >
          <ArrowUp />
        </button>
      )}
    </>
  )
}

export default ScrollToTop

