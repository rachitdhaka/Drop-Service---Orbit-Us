import React from 'react'
import Boxes from './Boxes'

const Dashboard = () => {
  return (
    <div className='h-screen bg-black '>

      <div className='w-full flex justify-evenly p-6'>
        <Boxes/>
        <Boxes/>
        <Boxes/>
        <Boxes/>
      </div>
      
    </div>
  )
}

export default Dashboard