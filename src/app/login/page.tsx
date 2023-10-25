import Link from 'next/link'
import React from 'react'

const Login = () => {
  return (
    <div className='grid max-w-screen-2xl m-auto bg-white p-20'>
      <div className='bg-white max-w-screen-2xl h-max p-8'>
        <p className='font-bold text-center text-5xl'>Login Neuron Sportify</p>
        <div className='w-2/6 m-auto'>
          <p className='text-center text-lg'>Welcome back.</p>
          <div className='p-0 mt-6'>
            <div className='grid'>
              <input className='h-2 bg-white border-2 border-gray-400 p-8 rounded-lg ' type='email' placeholder='Nomor Handphone/Email'></input>
              <input className='h-2 bg-white border-2 border-gray-400 p-8 rounded-lg  mt-2 ' type='Password' placeholder='Password'></input>
            </div>
            <div className='grid'>
              <p className='p-2 text-sm font-semibold text-right'>Lupa kata sandi?</p>
              <Link className=' bg-[#1B7996] text-center p-3 mt-2 hover:bg-slate-300 rounded-lg text-white hover:text-black' href={'/register'}><button className=''>Masuk</button></Link>
              <p className='bg-white border-2 border-gray-400 p-6 text-center rounded-lg mt-2 text-sm'>Belum Punya Akun?<Link className='underline font-bold' href={'/register'}> Daftar</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login