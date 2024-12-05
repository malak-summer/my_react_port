import React from 'react'
import styles from '../css/About.module.css'

export default function About() {
  return (
    <main className={styles.about}>
      <h1>À propos de moi</h1>
      <div className={styles.aboutContent}>
        <img src="/mine_.jpg?height=300&width=300" alt="Malak" className={styles.profileImage} />
        <div className={styles.aboutText}>
          <p>Je suis Malak, un développeur Full Stack passionné par la création d'applications web innovantes et responsives. Avec une solide formation en informatique et une expérience pratique dans le développement web, je m'efforce de créer des solutions élégantes et efficaces pour mes clients.</p>
          <p>Mes compétences incluent :</p>
          <ul>
            <li>Développement Front-end (HTML, CSS, JavaScript, React)</li>
            <li>Développement Back-end (Node.js, Python)</li>
            <li>Bases de données (MongoDB, MySQL)</li>
            <li>Conception responsive </li>
            <li>Gestion de version avec Git</li>
          </ul>
          <p>Je suis toujours à la recherche de nouveaux défis et d'opportunités pour améliorer mes compétences et créer des projets passionnants.</p>
          <a href="/path-to-your-resume.pdf" download className={styles.downloadButton}>
            Télécharger mon CV
          </a>
        </div>
      </div>
    </main>
  )
}
