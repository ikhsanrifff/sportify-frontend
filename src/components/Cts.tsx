import React from 'react'

function Cts() {
  return (
    <div className='px-36 max-w-screen-2xl mx-auto'>
      <div>
        <h1 className='text-[2.5rem] font-semibold'>Kenapa harus neuron sportify?</h1>
        <p className='text-[1.5rem] py-4'>Rasakan kemudahaan booking online melalui aplikasi neuron sportify!</p>
      </div>
      <div className='grid grid-cols-4 text-center text-xl text-[#1B7996] font-semibold my-12 '>
        <div>
          <img src="/tap.png" alt="tap" width={100} height={100} className='mx-auto' />
          <p className='mt-6'>Kemudahan Akses</p>
        </div>
        <div>
          <img src="/network.png" alt="tap" width={100} height={100} className='mx-auto' />
          <p className='mt-6'>Kemudahan Akses</p>
        </div>
        <div>
          <img src="/transparency.png" alt="tap" width={100} height={100} className='mx-auto' />
          <p className='mt-6'>Kemudahan Akses</p>
        </div>
        <div>
          <img src="/accuracy.png" alt="tap" width={100} height={100} className='mx-auto' />
          <p className='mt-6'>Kemudahan Akses</p>
        </div>
      </div>
    </div>
  )
}

export default Cts

