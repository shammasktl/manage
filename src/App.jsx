import React from 'react'
import './App.css'
import Hero from './Components/Hero/Hero'
import Manage from './Components/Manage/Manage'
import Said from './Components/Said/Said'

function App() {

  return (
    <div className='landing'>
      <Hero />
      <div className="others w-[80%] my-0 mx-auto">
        <Manage />
        <Said />
      </div>
    </div>
  )
}

export default App
