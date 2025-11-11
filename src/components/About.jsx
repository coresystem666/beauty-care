import React from 'react'
import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about__content">
          <div className="about__text">
            <h2 className="about__title">О компании BeautyCare</h2>
            <p className="about__description">
              Мы создаем натуральную косметику для тех, кто ценит качество и заботится о своем здоровье. 
              Наша миссия — предложить эффективные средства ухода, которые не только преображают внешность, 
              но и бережно относятся к вашей коже и волосам.
            </p>
            <p className="about__description">
              Каждый продукт проходит тщательный отбор ингредиентов и клинические испытания. 
              Мы используем только проверенные натуральные компоненты и современные технологии производства, 
              чтобы гарантировать безопасность и эффективность нашей косметики.
            </p>
            <div className="about__values">
              <div className="about__value">
                <h3 className="about__value-title">Философия</h3>
                <p className="about__value-text">Красота должна быть естественной и безопасной</p>
              </div>
              <div className="about__value">
                <h3 className="about__value-title">Качество</h3>
                <p className="about__value-text">Строгий контроль на каждом этапе производства</p>
              </div>
              <div className="about__value">
                <h3 className="about__value-title">Забота</h3>
                <p className="about__value-text">О вас, вашей коже и окружающей среде</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

