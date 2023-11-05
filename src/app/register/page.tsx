import React from 'react'
import Link from 'next/link'

const Register = () => {
  return (
    <>
      <div className='flex max-w-screen-2xl mx-auto h-screen bg-white'>
          <div className='max-w-screen-2xl w-1/2 brightness-50 bg-none bg-cover bg-no-repeat '>
        </div>
        <div className='flex flex-col w-3/6 bg-white p-8 rounded-lg'>
          <p className='font-medium text-xl xl:text-[45px] m-6 text-center'>Join Neuron Sportify</p>
          <p className='text-sm xl:text-xl text-center m-4'>Sudah Punya Akun?<Link className='font-bold underline' href={'/login'}> Masuk</Link></p>
          <div className='w-4/6 m-auto gap-4 p-0 mt-6 grid'>
            <input className='h-2 bg-white border border-gray-400 p-4 xl:p-7 rounded-lg text-xs xl:text-[20px] leading-6 font-normal ' type='text' placeholder='Nama Lengkap'></input>
            <input className='h-2 bg-white border border-gray-400 p-4 xl:p-7 rounded-lg text-xs xl:text-xl font-normal mt-2 ' type='email' placeholder='Email'></input>
            <input className='h-2 bg-white border border-gray-400 p-4 xl:p-7 rounded-lg text-xs xl:text-xl font-normal mt-2' type='tel' placeholder='Nomor Handphone'></input>
            <input className='h-2 bg-white border border-gray-400 p-4 xl:p-7 rounded-lg text-xs xl:text-xl font-normal mt-2 ' type='text' placeholder='Password'></input>
            <Link className='bg-[#1B7996] p-2 xl:p-4 mt-2 hover:bg-slate-300 rounded-lg hover:text-[#1B7996] text-white text-center font-medium' href={'/home'}><button className='text-sm xl:text-xl'>Daftar</button></Link>
          </div>
        </div>
      </div>
    </>

  )
}

export default Register