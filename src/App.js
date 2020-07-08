import React, { useState } from 'react'
import ComponentNav from './components/ComponentNav'
import './App.css'; 
import image from './image.jpg';
import { Footer } from './Footer';

export const App = () => {
  const componentState = useState(0)
  return (
    <div className="App">
      <img className='image' src={image} alt="COVID-19" />
      <ComponentNav componentState={componentState} />
      <Footer />
    </div>
  )
}
