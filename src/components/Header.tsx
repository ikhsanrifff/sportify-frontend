import Link from 'next/link'
import Image from 'next/image'
import  React from 'react'

const Header = () => {
    return (
        <header className='max-w-screen-2xl overflow-hidden bg-white mx-auto shadow-xl mb-1'>
            <nav className='flex p-10 justify-between flex-wrap'>
                <p className='font-extrabold text-xl'>Neuron<br></br> Sportify</p>
                <div className='p-5 text-lg items-center justify-center invisible xl:visible'>
                   <ul className='flex gap-8 '>
                    <li><Link className='p-3 rounded-lg' href={'/home'}>Home</Link></li>
                    <li><Link className='p-3 rounded-lg' href={'/booking'}>Partnership</Link></li>
                    <li><Link className='p-3 rounded-lg' href={'/venue'}>About</Link></li>
                    <li><Link className='p-3 rounded-lg' href={'/booking'}>Sewa Lapangan</Link></li>
                    </ul>
                </div>
                <div className='p-5 items-end end-0'>
                    <ul className='flex gap-8'>
                    <li className='p-2'><Link href={'/keranjang'}><Image src={'/keranjang.png'} alt='keranjang' width={25} height={25}></Image></Link></li>
                    <div className='invisible xl:visible w-[2px] h-[32px] bg-slate-400'></div>
                    <li className='p-2'><button><Link className='invisible xl:visible rounded-lg p-3' href={'/login'}>Masuk</Link></button></li>
                    <li className='p-2'><button><Link className='invisible xl:visible bg-[#1B7996] p-4 hover:bg-slate-300 rounded-lg text-white' href={'/register'}>Daftar</Link></button></li>
                    </ul>
                </div>            
            </nav>
        </header>
        
    )
}

export default Header