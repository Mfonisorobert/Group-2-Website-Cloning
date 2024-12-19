import React from 'react'
import Header from './components/header/Header'
import Hero from './components/content/Hero'
import About from './components/content/About'
import './App.css'
// import Contact from './components/content/Contact'
import Topheader from './components/header/Topheader'
import Services from './components/content/Services'
import Portfolio from './components/content/Portfolio'
import News from './components/content/News'
import Footer from './components/footer/Footer'

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
        <News/>
        <Footer/>
        

      </div>
    </main>
    
  )
}

export default App