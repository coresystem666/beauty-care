import React from 'react'
import './Reviews.css'

const reviews = [
  {
    id: 1,
    name: 'Анна Петрова',
    text: 'Пользуюсь шампунем уже полгода. Волосы стали намного мягче и послушнее. Очень довольна качеством!',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?img=47'
  },
  {
    id: 2,
    name: 'Мария Иванова',
    text: 'Крем для лица просто чудо! Кожа стала более увлажненной и сияющей. Рекомендую всем подругам.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?img=45'
  },
  {
    id: 3,
    name: 'Елена Смирнова',
    text: 'Заказала несколько средств. Все пришло быстро, упаковка отличная. Качество продукции на высоте!',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?img=33'
  },
  {
    id: 4,
    name: 'Ольга Козлова',
    text: 'Сыворотка для лица действительно работает! Пигментация стала менее заметной, кожа выглядит свежее.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?img=20'
  }
]

const Reviews = () => {
  return (
    <section className="reviews">
      <div className="container">
        <h2 className="reviews__title">Отзывы наших клиентов</h2>
        <div className="reviews__grid">
          {reviews.map((review) => (
            <div key={review.id} className="reviews__card fade-in">
              <div className="reviews__header">
                <img 
                  src={review.avatar} 
                  alt={review.name}
                  className="reviews__avatar"
                />
                <div className="reviews__info">
                  <h3 className="reviews__name">{review.name}</h3>
                  <div className="reviews__rating">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <svg key={i} className="reviews__star" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="reviews__text">"{review.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Reviews

