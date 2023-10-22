import React, { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Content from './components/content/Content'
// import Slider from './components/compSlider/Slider'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Store from './route1/Store'


const App = () => {
  return (
    <Router>
      <div className='App'>
            <Navbar />
        <Routes>
          <Route path='/' element={<div>
            <Content />
          </div>}/>
          <Route path='/store' element={<div>
            <Store/>
          </div>} />
        </Routes>
        {/* <Slider /> */}
      </div>
    </Router>
  )
}

export default App