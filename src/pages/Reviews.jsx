import React from 'react'
import { Star } from 'lucide-react'
import styles from '../css/Reviews.module.css'

export default function Reviews() {
  const reviews = [
    { id: 1, name: 'Jean Dupont', company: 'Tech Co.', content: 'Malak a fait un travail exceptionnel sur notre projet. Son expertise technique et sa capacité à résoudre les problèmes ont été inestimables.', rating: 5 },
    { id: 2, name: 'Marie Martin', company: 'Design Studio', content: 'Travailler avec Malak a été un plaisir. Il a su transformer notre vision en une réalité fonctionnelle et esthétique.', rating: 5 },
    { id: 3, name: 'Pierre Lefebvre', company: 'StartUp Inc.', content: 'Malak a dépassé nos attentes. Son attention aux détails et son engagement envers la qualité sont remarquables.', rating: 4 },
    { id: 4, name: 'Sophie Dubois', company: 'E-commerce Plus', content: 'Nous avons été impressionnés par la rapidité et l\'efficacité de Malak. Notre site e-commerce fonctionne parfaitement grâce à lui.', rating: 5 },
  ]

  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, i) => (
      <Star key={i} className={i < rating ? styles.filled : ''} />
    ))
  }

  return (
    <main className={styles.reviews}>
      <h1>Avis des clients</h1>
      <div className={styles.reviewsGrid}>
        {reviews.map(review => (
          <div key={review.id} className={styles.reviewCard}>
            <div className={styles.reviewHeader}>
              <h2>{review.name}</h2>
              <p>{review.company}</p>
            </div>
            <p className={styles.reviewContent}>{review.content}</p>
            <div className={styles.reviewRating}>
              {renderStars(review.rating)}
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}

