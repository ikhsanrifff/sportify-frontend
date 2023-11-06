import React from 'react'
import Link from 'next/link'

const Register = () => {
  return (
    <>
      <div className='flex max-w-screen-2xl mx-auto h-screen bg-white'>
        <div className='max-w-screen-2xl w-0 xl:w-1/2  brightness-50 bg-cover bg-no-repeat bg-none xl:bg-[url("/bg-register.svg")]'>
        </div>
        <div className='flex flex-col w-full xl:w-3/6 bg-white p-0 xl:p-8 rounded-lg'>
          <p className='font-medium text-[35px] xl:text-[45px] text-center'>Join Neuron Sportify</p>
          <p className='text-[22px] xl:text-xl text-center m-4 xl:m-2'>Sudah Punya Akun?<Link className='font-bold underline' href={'/login'}> Masuk</Link></p>
          <div className='w-6/6 xl:w-4/6 m-0 xl:mx-auto mt-6 gap-4 p-6 xl:p-0 grid'>
            <input className='h-2 bg-white border border-gray-400 p-7 rounded-lg text-[20px] leading-6 font-normal' id='nama' type='text'  placeholder='Nama Lengkap'></input>
            <input className='h-2 bg-white border border-gray-400 p-7 rounded-lg text-[20px] font-normal mt-2 ' id='email' type='email' placeholder='Email'></input>
            <input className='h-2 bg-white border border-gray-400 p-7 rounded-lg text-[20px] font-normal mt-2' id='notelp' type='number' placeholder='Nomor Handphone'></input>
            <input className='h-2 bg-white border border-gray-400 p-7 rounded-lg text-[20px] font-normal mt-2 ' id='password' type='text' placeholder='Password'></input>
            <Link className='bg-[#1B7996] p-2 xl:p-4 mt-2 hover:bg-slate-300 rounded-lg hover:text-[#1B7996] text-[25px] text-white text-center font-medium' href={'/home'}><button className='text-[25px]'>Daftar</button></Link>
          </div>
        </div>
      </div>
    </>

  )
}

export default Register