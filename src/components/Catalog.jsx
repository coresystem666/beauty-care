import React from 'react'
import './Catalog.css'

const products = [
  {
    id: 1,
    name: 'Шампунь для волос "Нежность"',
    price: '890 ₽',
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=400&fit=crop',
    description: 'Для сухих и поврежденных волос'
  },
  {
    id: 2,
    name: 'Крем для лица "Увлажнение"',
    price: '1 290 ₽',
    image: 'https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?w=400&h=400&fit=crop',
    description: 'Интенсивное увлажнение на 24 часа'
  },
  {
    id: 3,
    name: 'Сыворотка для лица "Сияние"',
    price: '1 590 ₽',
    image: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?w=400&h=400&fit=crop',
    description: 'Витамин C для сияющей кожи'
  },
  {
    id: 4,
    name: 'Маска для волос "Восстановление"',
    price: '990 ₽',
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&h=400&fit=crop',
    description: 'Глубокое восстановление структуры'
  },
  {
    id: 5,
    name: 'Тоник для лица "Очищение"',
    price: '750 ₽',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop',
    description: 'Мягкое очищение и тонизирование'
  },
  {
    id: 6,
    name: 'Масло для тела "Релакс"',
    price: '1 190 ₽',
    image: 'https://images.unsplash.com/photo-1571875257727-256c39da42af?w=400&h=400&fit=crop',
    description: 'Увлажнение и ароматерапия'
  }
]

const Catalog = () => {
  const handleBuy = (productId) => {
    alert(`Товар "${products.find(p => p.id === productId)?.name}" добавлен в корзину!`)
  }

  return (
    <section id="catalog" className="catalog">
      <div className="container">
        <h2 className="catalog__title">Каталог товаров</h2>
        <p className="catalog__subtitle">Выберите лучшее для вашей красоты</p>
        <div className="catalog__grid">
          {products.map((product) => (
            <div key={product.id} className="catalog__card fade-in">
              <div className="catalog__card-image-wrapper">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="catalog__card-image"
                  loading="lazy"
                />
              </div>
              <div className="catalog__card-content">
                <h3 className="catalog__card-title">{product.name}</h3>
                <p className="catalog__card-description">{product.description}</p>
                <div className="catalog__card-footer">
                  <span className="catalog__card-price">{product.price}</span>
                  <button 
                    className="catalog__card-button"
                    onClick={() => handleBuy(product.id)}
                  >
                    Купить
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Catalog

