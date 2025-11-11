import React, { useState, useEffect } from 'react'
import './Header.css'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="container">
        <div className="header__content">
          <div className="header__logo">
            <span className="header__logo-text">BeautyCare</span>
          </div>
          
          <nav className={`header__nav ${isMobileMenuOpen ? 'header__nav--open' : ''}`}>
            <a href="#home" className="header__nav-link" onClick={() => setIsMobileMenuOpen(false)}>Главная</a>
            <a href="#catalog" className="header__nav-link" onClick={() => setIsMobileMenuOpen(false)}>Каталог</a>
            <a href="#about" className="header__nav-link" onClick={() => setIsMobileMenuOpen(false)}>О нас</a>
            <a href="#contacts" className="header__nav-link" onClick={() => setIsMobileMenuOpen(false)}>Контакты</a>
          </nav>

          <button 
            className="header__cta-button"
            onClick={() => window.location.href = '#catalog'}
          >
            Купить сейчас
          </button>

          <button 
            className="header__menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Меню"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header

