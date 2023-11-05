import Link from 'next/link'
import React from 'react'

const Login = () => {
  return (
    <div className='flex max-w-screen-2xl m-auto bg-white'>
      <div className='flex flex-col bg-white max-w-screen-2xl mx-auto h-screen p-4'>
        <p className='font-medium text-center text-[35px] xl:text-[45px]'>Login Neuron Sportify</p>
        <div className='mt-6'>
          <p className='text-center font-normal text-[22px]'>Welcome back.</p>
          <div className='mt-0 xl:mt-6 w-6/6 p-4'>
            <div className='grid'>
              <input className='h-2 w-6/6 bg-white border-2 border-gray-400 p-7 rounded-lg text-[20px] my-6' type='email' placeholder='Email'></input>
              <input className='h-2 bg-white border-2 border-gray-400 p-7 rounded-lg text-[20px]' type='Password' placeholder='Password'></input>
            </div>
            <div className='grid'>
              <p className='my-4 text-[18px] font-normal text-right'>Lupa kata sandi?</p>
              <Link className=' bg-[#1B7996] text-center p-3 mt-2 hover:bg-slate-300 rounded-lg text-white hover:text-black text-[25px]' href={'/home'}><button>Masuk</button></Link>
              <p className='bg-white border-2 border-gray-400 p-6 text-center rounded-lg mt-6 text-[18px]'>Belum Punya Akun?<Link className='underline font-bold' href={'/register'}> Daftar</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login