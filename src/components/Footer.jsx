import React from 'react'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__copyright">
            <p>&copy; {currentYear} BeautyCare. Все права защищены.</p>
          </div>
          <div className="footer__links">
            <a href="#" className="footer__link">Политика конфиденциальности</a>
            <span className="footer__separator">|</span>
            <a href="#" className="footer__link">Публичная оферта</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

