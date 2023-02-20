import React from 'react'
import Features from '../components/Features';
import Hero from '../components/Hero'
const home = () => {
  return (
    <div className='grid'>
      <div>
      <Hero/>
      <Features/>
      </div>
    </div>
  )
}

export default home;