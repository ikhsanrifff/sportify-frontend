import React from 'react'
import Link from 'next/link'

const Register = () => {
  return (
    <>
      <div className='flex max-w-screen-2xl mx-auto h-max bg-white'>
        <div className='max-w-screen-2xl w-2/12 xl:w-5/12 bg-cover bg-[url("/bg-register.svg")]'>
        </div>
        <div className='flex flex-col w-3/6 bg-white p-8  rounded-lg'>
          <p className='font-bold text-xl xl:text-5xl text-center'>Join Neuron Sportify</p>
          <p className='text-sm xl:text-lg text-center p-2'>Sudah Punya Akun?<Link className='font-bold underline' href={'/login'}> Masuk</Link></p>
          <div className='w-4/6 m-auto gap-3 p-0 mt-6 grid'>
            <input className='h-2 bg-white border-2 border-gray-400 p-4 xl:p-8 rounded-lg' type='text' placeholder='Nama Lengkap'></input>
            <input className='h-2 bg-white border-2 border-gray-400 p-4 xl:p-8 rounded-lg mt-2 ' type='email' placeholder='Email'></input>
            <input className='h-2 bg-white border-2 border-gray-400 p-4 xl:p-8 rounded-lg mt-2' type='tel' placeholder='Nomor Handphone'></input>
            <input className='h-2 bg-white border-2 border-gray-400 p-4 xl:p-8 rounded-lg mt-2 ' type='text' placeholder='Password'></input>
            <Link className='bg-[#1B7996] p-2 xl:p-4 mt-2 hover:bg-slate-300 rounded-lg text-white hover:text-black text-center' href={'/'}><button className='text-xl'>Daftar</button></Link>
          </div>
        </div>
      </div>
    </>

  )
}

export default Register