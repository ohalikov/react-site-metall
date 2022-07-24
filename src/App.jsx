import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Advantages from './components/advatages/Advantages'
import Footer from './components/footer/Footer'

import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Services />
      <Portfolio />
      <Advantages />
      <Footer />
    </>
  )
}

export default App