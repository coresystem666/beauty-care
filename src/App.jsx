import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import Catalog from './components/Catalog'
import Reviews from './components/Reviews'
import About from './components/About'
import Contacts from './components/Contacts'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Catalog />
        <Reviews />
        <About />
        <Contacts />
      </main>
      <Footer />
    </div>
  )
}

export default App

