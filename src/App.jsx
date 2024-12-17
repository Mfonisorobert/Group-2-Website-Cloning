import React from 'react'
import Header from './components/header/Header'
import Hero from './components/content/Hero'
import About from './components/content/About'
import './App.css'
import Contact from './components/content/Contact'
import Topheader from './components/header/Topheader'
import Services from './components/content/Services'
import Portfolio from './components/content/Portfolio'

const App = () => {
  return (
    <main className='header__container'>
      <Topheader/>
      <Header/>
      <div>
        <Hero/>
        <About/>
        <Services/>
        <Portfolio/>
        <Contact/>
        

      </div>
    </main>
    
  )
}

export default App