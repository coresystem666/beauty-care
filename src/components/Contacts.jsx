import React, { useState } from 'react'
import { IconPhone, IconMail, IconLocation, IconInstagram, IconVK, IconTelegram } from './Icons'
import './Contacts.css'

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.')
    setFormData({ name: '', phone: '', message: '' })
  }

  return (
    <section id="contacts" className="contacts">
      <div className="container">
        <h2 className="contacts__title">Свяжитесь с нами</h2>
        <p className="contacts__subtitle">Мы всегда рады ответить на ваши вопросы</p>
        
        <div className="contacts__content">
          <form className="contacts__form" onSubmit={handleSubmit}>
            <div className="contacts__form-group">
              <label htmlFor="name" className="contacts__label">Имя</label>
              <input
                type="text"
                id="name"
                name="name"
                className="contacts__input"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Ваше имя"
              />
            </div>
            
            <div className="contacts__form-group">
              <label htmlFor="phone" className="contacts__label">Телефон</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="contacts__input"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="+7 (999) 123-45-67"
              />
            </div>
            
            <div className="contacts__form-group">
              <label htmlFor="message" className="contacts__label">Сообщение</label>
              <textarea
                id="message"
                name="message"
                className="contacts__textarea"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Ваше сообщение..."
              ></textarea>
            </div>
            
            <button type="submit" className="contacts__submit-button">
              Отправить
            </button>
          </form>

          <div className="contacts__info">
            <div className="contacts__info-item">
              <div className="contacts__info-icon">
                <IconPhone className="contacts__icon-svg" />
              </div>
              <div>
                <h3 className="contacts__info-title">Телефон</h3>
                <a href="tel:+79991234567" className="contacts__info-link">+7 (999) 123-45-67</a>
              </div>
            </div>
            
            <div className="contacts__info-item">
              <div className="contacts__info-icon">
                <IconMail className="contacts__icon-svg" />
              </div>
              <div>
                <h3 className="contacts__info-title">Email</h3>
                <a href="mailto:info@beautycare.ru" className="contacts__info-link">info@beautycare.ru</a>
              </div>
            </div>
            
            <div className="contacts__info-item">
              <div className="contacts__info-icon">
                <IconLocation className="contacts__icon-svg" />
              </div>
              <div>
                <h3 className="contacts__info-title">Адрес</h3>
                <p className="contacts__info-text">Москва, ул. Примерная, д. 1</p>
              </div>
            </div>

            <div className="contacts__social">
              <a href="#" className="contacts__social-link" aria-label="Instagram">
                <IconInstagram className="contacts__social-icon" />
              </a>
              <a href="#" className="contacts__social-link" aria-label="VK">
                <IconVK className="contacts__social-icon" />
              </a>
              <a href="#" className="contacts__social-link" aria-label="Telegram">
                <IconTelegram className="contacts__social-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacts

