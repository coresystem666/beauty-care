import React from 'react'
import { IconSparkle, IconLeaf, IconCheck, IconTruck } from './Icons'
import './Hero.css'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero__background">
        <div className="hero__bg-shape hero__bg-shape--1"></div>
        <div className="hero__bg-shape hero__bg-shape--2"></div>
        <div className="hero__bg-shape hero__bg-shape--3"></div>
      </div>
      
      <div className="container">
        <div className="hero__content">
          <div className="hero__text">
            <div className="hero__badge fade-in">
              <IconSparkle className="hero__badge-icon" />
              <span>100% натуральные ингредиенты</span>
            </div>
            <h1 className="hero__title fade-in">
              Натуральная косметика<br />для вашей красоты
            </h1>
            <p className="hero__subtitle fade-in">
              Заботимся о вашей коже и волосах с помощью натуральных ингредиентов. 
              Без сульфатов, парабенов и вредных химических добавок.
            </p>
            <div className="hero__actions fade-in">
              <button 
                className="hero__button hero__button--primary"
                onClick={() => document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Смотреть каталог
              </button>
              <button 
                className="hero__button hero__button--secondary"
                onClick={() => document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Консультация
              </button>
            </div>
            <div className="hero__features fade-in">
              <div className="hero__feature">
                <IconLeaf className="hero__feature-icon" />
                <span>Натурально</span>
              </div>
              <div className="hero__feature">
                <IconCheck className="hero__feature-icon" />
                <span>Проверено</span>
              </div>
              <div className="hero__feature">
                <IconTruck className="hero__feature-icon" />
                <span>Быстрая доставка</span>
              </div>
            </div>
          </div>
          
          <div className="hero__images">
            <div className="hero__image-wrapper hero__image-wrapper--1 fade-in">
              <img 
                src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=500&fit=crop&q=80" 
                alt="Косметика для ухода"
                className="hero__image"
              />
            </div>
            <div className="hero__image-wrapper hero__image-wrapper--2 fade-in">
              <img 
                src="https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?w=400&h=500&fit=crop&q=80" 
                alt="Натуральная косметика"
                className="hero__image"
              />
            </div>
            <div className="hero__image-wrapper hero__image-wrapper--3 fade-in">
              <img 
                src="https://images.unsplash.com/photo-1612817288484-6f916006741a?w=400&h=500&fit=crop&q=80" 
                alt="Средства для красоты"
                className="hero__image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

