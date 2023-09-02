import React, { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Content from './components/content/Content'
// import Slider from './components/compSlider/Slider'


const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Content />
      {/* <Slider /> */}
    </div>
  )
}

export default App