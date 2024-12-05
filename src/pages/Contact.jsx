import React, { useState } from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'
import styles from '../css/Contact.module.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Here you would typically send the form data to a server
    alert('Merci pour votre message ! Je vous répondrai bientôt.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <main className={styles.contact}>
      <h1>Contactez-moi</h1>
      <div className={styles.contactContainer}>
        <div className={styles.contactInfo}>
          <h2>Informations de contact</h2>
          <ul>
            <li><Mail /> malaksummer35@gmail.com</li>
            <li><Phone /> +212 7 65 56 46 18</li>
            <li><MapPin /> Casablanca, Moroco</li>
          </ul>
        </div>
        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Votre nom"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Votre email"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Votre message"
            required
          ></textarea>
          <button type="submit" className={styles.submitButton}>Envoyer</button>
        </form>
      </div>
    </main>
  )
}

