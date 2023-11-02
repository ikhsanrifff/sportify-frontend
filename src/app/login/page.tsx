import Link from 'next/link'
import React from 'react'

const Login = () => {
  return (
    <div className='flex max-w-screen-2xl m-auto bg-white p-10'>
      <div className='flex flex-col bg-white max-w-screen-2xl mx-auto h-screen p-8'>
        <p className='font-medium text-center text-2xl xl:text-[45px]'>Login Neuron Sportify</p>
        <div className='w-10/12 mt-6 mx-auto'>
          <p className='text-center text-sm xl:text-[22px]'>Welcome back.</p>
          <div className='p-0 mt-6 w-6/6'>
            <div className='grid'>
              <input className='h-2 w-6/6 bg-white border-2 border-gray-400 p-4 xl:p-7 rounded-lg text-xs xl:text-[20px]' type='email' placeholder='Nomor Handphone/Email'></input>
              <input className='h-2 bg-white border-2 border-gray-400 p-4 xl:p-7 rounded-lg  mt-2 text-xs xl:text-[20px]' type='Password' placeholder='Password'></input>
            </div>
            <div className='grid'>
              <p className='my-4 text-xs xl:text-[18px] font-normal text-right'>Lupa kata sandi?</p>
              <Link className=' bg-[#1B7996] text-center p-1 xl:p-3 mt-2 hover:bg-slate-300 rounded-lg text-white hover:text-black text-sm xl:text-xl' href={'/home'}><button>Masuk</button></Link>
              <p className='bg-white border-2 border-gray-400 p-6 text-center rounded-lg mt-6 text-xs xl:text-sm'>Belum Punya Akun?<Link className='underline font-bold' href={'/register'}> Daftar</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login