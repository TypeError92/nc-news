import { useState } from 'react'
import {Header, Footer} from './components'
import Main from './components/Main'
import './App.css'

function App() {
  console.log(Footer)
  

  return (
    <div className='App'>
      <Header id='header'/>
      <Main id='main'/>
      <Footer id='footer'/>
    </div>
  )
}

export default App
