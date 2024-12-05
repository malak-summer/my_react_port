import React from 'react'
import { Code, Server, Database, Smartphone } from 'lucide-react'
import styles from '../css/Services.module.css'

export default function Services() {
  const services = [
    {
      icon: <Code />,
      title: 'Développement Front-end',
      description: 'Création d\'interfaces utilisateur réactives et interactives en utilisant les dernières technologies web.'
    },
    {
      icon: <Server />,
      title: 'Développement Back-end',
      description: 'Conception et mise en œuvre de serveurs robustes et d\'APIs performantes pour alimenter vos applications.'
    },
    {
      icon: <Database />,
      title: 'Gestion de bases de données',
      description: 'Conception et optimisation de bases de données pour un stockage et une récupération efficaces des données.'
    },
    {
      icon: <Smartphone />,
      title: 'Développement d\'applications mobiles',
      description: 'Création d\'applications mobiles natives et hybrides pour iOS et Android.'
    }
  ]

  return (
    <main className={styles.services}>
      <h1>Mes Services</h1>
      <div className={styles.servicesGrid}>
        {services.map((service, index) => (
          <div key={index} className={styles.serviceCard}>
            <div className={styles.serviceIcon}>{service.icon}</div>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </main>
  )
}

