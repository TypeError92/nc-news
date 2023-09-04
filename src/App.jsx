import { useState } from 'react'
import Header from './components/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <Header id='header'/>
      <Main id='main'/>
      <Footer id='footer'/>
    </>
  )
}

export default App
