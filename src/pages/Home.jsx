import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from '../css/Home.module.css'

function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <h1>Bienvenue sur mon portfolio</h1>
      <p>Je suis Malak, développeur Full Stack passionné par la création d'applications web innovantes et responsives.</p>
      <div className={styles.ctaButtons}>
        <Link to="/projects" className={styles.ctaButton}>Voir mes projets</Link>
        <Link to="/contact" className={`${styles.ctaButton} ${styles.ctaButtonSecondary}`}>Me contacter</Link>
      </div>
    </section>
  )
}

function FeaturedProjects() {
  const projects = [
    {
      title: 'Projet 1',
      image: '/canon.jpg?height=200&width=300',
      description: 'Créé un site web minimaliste et visuellement attrayant pour présenter les objectifs Canon, mettant l"accent sur les détails des produits et une expérience photographique haut de gamme.',
    },
    {
      title: 'Projet 2',
      image: '/Night_ride.jpg?height=200&width=300',
      description: 'Conçu et développé un site web moderne et élégant pour le commerce électronique, mettant en avant des motos de pointe avec un thème dynamique et percutant "Night Rider" et une navigation intuitive.',
    },
  ]

  return (
    <section className={styles.featuredProjects}>
      <h2>Projets en vedette</h2>
      <div className={styles.projectGrid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
      <Link to="/projects" className={styles.seeMoreButton}>Voir plus de projets</Link>
    </section>
  )
}

function Services() {
  const services = [
    {
      title: 'FRONT-END DEVELOPMENT',
      description: 'Creating responsive and interactive user interfaces using modern frameworks and libraries.',
    },
    {
      title: 'BACK-END DEVELOPMENT',
      description: 'Building robust server-side applications and APIs to power your web solutions.',
    },
    {
      title: 'DATABASE MANAGEMENT',
      description: 'Designing and optimizing databases to efficiently store and retrieve your application data.',
    },
  ]

  return (
    <section id="services" className={styles.services}>
      <h2>My Skills</h2>
      <div className={styles.servicesGrid}>
        {services.map((service, index) => (
          <div key={index} className={styles.serviceCard}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function Portfolio() {
  const projects = [
    {
      title: 'Project 1',
      image: '/moto.jpg?height=400&width=600',
      category: 'Full Stack',
    },
    {
      title: 'Project 2',
      image: '/headphons.jpg?height=400&width=600',
      category: 'Front-end',
    },
    {
      title: 'Project 3',
      image: '/Night_ride.jpg?height=400&width=600',
      category: 'Back-end',
    },
    {
      title: 'Project 4',
      image: '/food.jpg?height=400&width=600',
      category: 'Full Stack',
    },
  ]

  return (
    <section id="work" className={styles.portfolio}>
      <h2>My Projects</h2>
      <div className={styles.portfolioGrid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.portfolioItem}>
            <img src={project.image} alt={project.title} />
            <div className={styles.portfolioOverlay}>
              <h3>{project.title}</h3>
              <p>{project.category}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your message! I will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className={styles.contact}>
      <h2>Get in Touch</h2>
      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name" 
          required 
        />
        <input 
          type="email" 
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email" 
          required 
        />
        <textarea 
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message" 
          required
        ></textarea>
        <button type="submit" className={styles.submitButton}>SEND MESSAGE</button>
      </form>
    </section>
  )
}

export default function Home() {
  return (
    <main className={styles.home}>
      <Hero />
      <FeaturedProjects />
      <Services />
      <Portfolio />
      <Contact />
    </main>
  )
}

