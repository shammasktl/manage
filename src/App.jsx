import React from 'react'
import './App.css'
import Hero from './Components/Hero/Hero'
import Manage from './Components/Manage/Manage'
import Footer from './Components/Footer/Footer'
import Simplify from './Components/Simplify/Simplify'
import Said from './Components/Said/Said'

function App() {

  return (
    <div className='landing'>
      <Hero />
      <div className="mx-auto my-0 w-[80%] others">
        <Manage />
        <Said />
      </div>
      <Simplify />
      <Footer />
    </div>
  )
}

export default App
