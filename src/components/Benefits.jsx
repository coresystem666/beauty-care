import React from 'react'
import { IconLeaf, IconSparkle, IconTruck, IconShield, IconDiamond, IconHeart } from './Icons'
import './Benefits.css'

const benefits = [
  {
    icon: IconLeaf,
    title: 'Натуральные ингредиенты',
    description: 'Только природные компоненты, выращенные в экологически чистых условиях'
  },
  {
    icon: IconSparkle,
    title: 'Без сульфатов и парабенов',
    description: 'Безопасная формула без агрессивных химических веществ'
  },
  {
    icon: IconTruck,
    title: 'Доставка по всей стране',
    description: 'Быстрая и надежная доставка в любой город России'
  },
  {
    icon: IconShield,
    title: 'Проверено дерматологами',
    description: 'Вся продукция прошла клинические испытания и одобрена специалистами'
  },
  {
    icon: IconDiamond,
    title: 'Премиальное качество',
    description: 'Высокие стандарты производства и контроль качества на каждом этапе'
  },
  {
    icon: IconHeart,
    title: 'Забота о природе',
    description: 'Экологичная упаковка и ответственное отношение к окружающей среде'
  }
]

const Benefits = () => {
  return (
    <section className="benefits">
      <div className="container">
        <h2 className="benefits__title">Почему выбирают нас</h2>
        <div className="benefits__grid">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon
            return (
              <div key={index} className="benefits__card fade-in">
                <div className="benefits__icon">
                  <IconComponent className="benefits__icon-svg" />
                </div>
                <h3 className="benefits__card-title">{benefit.title}</h3>
                <p className="benefits__card-description">{benefit.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Benefits

