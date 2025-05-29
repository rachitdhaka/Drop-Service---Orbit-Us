import React from 'react'

const Jobdiv = () => {
  return (
    <div className='h-[190px] w-[443px] bg-[#111111] rounded-2xl py-6'>


        {/* top line , full time and price  */}
      <div className='w-full px-4 py-2 flex justify-between'>
        <div>
          <p className='bg-[#B026FF]/20 inline-block text-[#B026FF] text-sm px-3 py-2 rounded-full'>
            Full Time
          </p>
        </div>

        <div className='flex justify-center items-center'>
            <p className='text-[#00FF94]'>
                2.5 ETH
            </p>
        </div>
      </div>




      {/* title  */}
      <div className='text-white text-xl pl-5 pt-2'>
        Senior Rust Developer 
      </div>

      {/* company  */}
      <div className='text-[#9CA3AF] pl-5'>
        BlockChain Labs 
      </div>
    </div>
  )
}

export default Jobdiv
