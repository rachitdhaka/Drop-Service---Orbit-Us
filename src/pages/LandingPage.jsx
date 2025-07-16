import React from 'react'
import Navbar from '../components/Navbar'

const LandingPage = () => {
  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      <div className='flex text-foreground justify-center items-center h-screen pt-16'>
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to OrbitUs</h1>
          <p className="text-muted text-lg">Landing page content goes here</p>
        </div>
      </div>
    </div>    
  )
}

export default LandingPage