import React from 'react'
import logo from '../assets/images/logo.jpg'
const Boxes = () => {
  return (
    <div className='h-[108px] w-[326px] bg-[#111111] rounded-[12px] flex justify-center items-center hover:scale-105 duration-300 hover:shadow-[0_4px_8px_rgba(173,216,230,0.25)]'>

      
        <div className='h-[56px] w-[276px] flex '>
            {/* left side Image */}
            <div className='w-[20%] h-full '>
               <img src={logo} alt="" className='h-full rounded-2xl'/> 
            </div>

            {/* rightside text div */}
            <div className='w-[80%] h-full bg-[#111111] pl-2 flex flex-col  '>
                <p className='text-md text-[#9CA3AF] font-Geist font-light'>Total Jobs</p>
                <h1 className='text-white text-2xl font-Geist font-light'>1234</h1>
            </div>
        </div>
    </div>
  )
}

export default Boxes