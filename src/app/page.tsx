import React from 'react'
import Link from 'next/link'

const Register = () => {
  return (
    <div className='flex max-w-screen-2xl m-auto bg-slate-400 p-20'>
        <div className='flex flex-col m-auto bg-white w-64 p-8  rounded-lg'>
            <div className='flex font-bold'>Daftar</div>
            <p className=' text-sm'>Sudah Punya Akun?<Link className='font-bold' href={'/login'}> Masuk</Link></p>
                <div className='p-0 mt-6 items-center'>
                    <input className=' w-44 h-10 bg-slate-100 p-0 rounded-lg text-center' type='text' placeholder='Nama Lengkap'></input>
                    <input className=' w-44 h-10 bg-slate-100 p-0 rounded-lg text-center mt-2 ' type='email' placeholder='Email'></input>
                    <input className=' w-44 h-10 bg-slate-100 p-0 rounded-lg text-center mt-2' type='number' placeholder='Nomor Ponsel'></input>
                    <input className=' w-44 h-10 bg-slate-100 p-0 rounded-lg text-center mt-2 ' type='text' placeholder='Password'></input>
                    <Link href={'/'}><button className=' w-44 h-10 bg-gray-400  p-0 mt-2 hover:bg-slate-300 rounded-lg text-white hover:text-black'>Masuk</button></Link>
                </div>
        </div>
    </div>
  )
}

export default Register