import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { FunnelSimple } from '@phosphor-icons/react/dist/ssr/FunnelSimple'

const Header = () => {
    return (
        <header className='max-w-screen-2xl h-36 xl:h-36 overflow-hidden bg-white mx-auto shadow-xl mb-1'>
            <nav className='flex p-12 xl:p-10 justify-between flex-wrap'>
                <img className=' w-16 h-16 m-2' src='/logo-neuron-sportify.svg'></img>
                <div className='bg-gray-400 xl:invisible visible h-10 w-10 m-6'>
                    <FunnelSimple width={32} height={32} size={32} color="#000000" className='m-auto' />
                </div>

                <div className='p-5 text-lg items-center justify-center invisible xl:visible'>
                    <ul className='flex gap-8 '>
                        <li><Link className='p-3 rounded-lg' href={'/home'}>Home</Link></li>
                        <li><Link className='p-3 rounded-lg' href={'/booking'}>Partnership</Link></li>
                        <li><Link className='p-3 rounded-lg' href={'/venue'}>About</Link></li>
                        <li><Link className='p-3 rounded-lg' href={'/booking'}>Sewa Lapangan</Link></li>
                    </ul>
                </div>

                <div className='p-5 items-end'>
                    <ul className='flex gap-8'>
                        <li className='p-3 invisible xl:visible'><Link href={'/keranjang'}><Image className='invisible xl:visible' src={'/keranjang.png'} alt='keranjang' width={25} height={25}></Image></Link></li>
                        <div className='invisible xl:visible w-[2px] h-[32px] bg-slate-400'></div>
                        <li className='p-3'><button><Link className='invisible xl:visible rounded-lg p-3' href={'/login'}>Masuk</Link></button></li>
                        <li className='p-3'><button><Link className='invisible xl:visible bg-[#1B7996] p-4 hover:bg-slate-300 rounded-lg text-white' href={'/register'}>Daftar</Link></button></li>
                    </ul>
                </div>
            </nav>
        </header>

    )
}

export default Header