import React, { useState } from 'react'
import styles from '../css/Projects.module.css'

export default function Projects() {
  const [filter, setFilter] = useState('all')

  const projects = [
    { id: 1, title: 'E-commerce Platform', category: 'full-stack', image: '/canon.jpg?height=300&width=400' },
    { id: 2, title: 'Portfolio Website', category: 'front-end', image: '/port.jpg?height=300&width=400' },
    { id: 3, title: 'Task Management API', category: 'back-end', image: '/Night_ride.jpg?height=300&width=400' },
    { id: 4, title: 'Jewelry Website', category: 'full-stack', image: '/jewlry.jpg?height=300&width=400' },
    { id: 5, title: 'Restaurant Website ', category: 'full-stack', image: '/food.jpg?height=300&width=400' },
    { id: 6, title: 'Social Media Dashboard', category: 'front-end', image: '/music_plus.jpg?height=300&width=400' },
  ]

  const filteredProjects = filter === 'all' ? projects : projects.filter(project => project.category === filter)

  return (
    <main className={styles.projects}>
      <h1>Mes Projets</h1>
      <div className={styles.filterButtons}>
        <button onClick={() => setFilter('all')} className={filter === 'all' ? styles.active : ''}>Tous</button>
        <button onClick={() => setFilter('front-end')} className={filter === 'front-end' ? styles.active : ''}>Front-end</button>
        <button onClick={() => setFilter('back-end')} className={filter === 'back-end' ? styles.active : ''}>Back-end</button>
        <button onClick={() => setFilter('full-stack')} className={filter === 'full-stack' ? styles.active : ''}>Full-stack</button>
        {/* <button onClick={() => setFilter('mobile')} className={filter === 'mobile' ? styles.active : ''}>Mobile</button> */}
      </div>
      <div className={styles.projectsGrid}>
        {filteredProjects.map(project => (
          <div key={project.id} className={styles.projectCard}>
            <img src={project.image} alt={project.title} />
            <h2>{project.title}</h2>
            <p>{project.category}</p>
            <button className={styles.viewProject}>Voir le projet</button>
          </div>
        ))}
      </div>
    </main>
  )
}

