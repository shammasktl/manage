import React from 'react'
import './App.css'
import Hero from './Components/Hero/Hero'
import Manage from './Components/Manage/Manage'

function App() {

  return (
    <div className='landing'>
      <Hero />
      <div className="others w-[80%] my-0 mx-auto">
        <Manage />
      </div>
    </div>
  )
}

export default App
