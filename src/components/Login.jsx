import React from 'react'

const Login = () => {
  return (
    <div className='h-screen bg-black flex flex-col justify-center items-center'>
        
        <section className='bg-black  rounded-2xl w-xl p-5 border border-white flex flex-col justify-center items-center'>
            <h1 className=" text-white text-3xl font-semibold ">
              Welcome Back
            </h1>

            <div className='border border-[#00FF94] w-sm  rounded-xl text-white flex justify-center p-4 my-4'>
              Connect Wallet 
            </div>


            <div className='border border-[#9CA3AF] w-md  rounded-xl text-[#9CA3AF]  p-4 my-2 bg-[#111111]'>
              Email
            </div>
            <div className='border border-[#9CA3AF] w-md  rounded-xl text-[#9CA3AF]  p-4 my-2 bg-[#111111]'>
              Password
            </div>

            
        </section>
    </div>
  )
}

export default Login