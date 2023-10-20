import Link from 'next/link'
import React from 'react'

const Login = () => {
  return (
    <div className='flex max-w-screen-2xl m-auto bg-slate-400 p-20'>
        <div className='flex flex-col m-auto bg-white w-64 h-max p-8  rounded-lg'>
            <div className='flex font-bold'>Masuk</div>
            <p className=' text-sm'>Belum Punya Akun?<Link className=' font-bold' href={'/register'}> Daftar</Link></p>
                <div className='p-0 mt-6 items-center'>
                    <input className=' w-44 h-10 bg-white  p-0 rounded-lg text-center' type='email' placeholder='Nomor Ponsel/Email'></input>
                    <input className=' w-44 h-10 bg-white  p-0 rounded-lg text-center mt-2 ' type='Password' placeholder='Password'></input>
                    <Link href={'/register'}><button className=' w-44 h-10 bg-gray-400  p-0 mt-2 hover:bg-slate-300 rounded-lg text-white hover:text-black'>Masuk</button></Link>
                    <p className='p-2 text-sm font-semibold'>Lupa kata sandi?</p>
                </div>
        </div>
    </div>
  )
}

export default Login