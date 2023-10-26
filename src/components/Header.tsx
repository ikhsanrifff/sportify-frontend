"use client";
import Link from 'next/link'
import Image from 'next/image'
import React, { useState } from 'react'
import { Spin as Hamburger } from 'hamburger-react'

const Header = () => {

    const [isOpen, setOpen] = useState(false)




    return (
        <header className='max-w-screen-2xl h-max xl:h-36 overflow-hidden bg-white mx-auto shadow-xl mb-1'>
            <nav className='flex p-2 xl:p-6 justify-between'>
                <div className='m-2'>
                    <Image alt='logo' className='m-6' width={40} height={40} src='/logo-neuron-sportify.svg' />
                </div>

                <div className='p-0 xl:p-5 w-0 xl:w-max h-0 xl:h-max text-lg invisible lg:visible justify-center'>
                    <ul className='flex xl:flex-row flex-col right-0 p-3'>
                        <li><Link className='p-3 rounded-lg' href={'/home'}>Home</Link></li>
                        <li><Link className='p-3 rounded-lg' href={'/booking'}>Partnership</Link></li>
                        <li><Link className='p-3 rounded-lg' href={'/venue'}>About</Link></li>
                        <li><Link className='p-3 rounded-lg' href={'/booking'}>Sewa Lapangan</Link></li>
                    </ul>
                </div>


                <div className={`${isOpen ? 'flex flex-col  items-center bg-white' : 'hidden'}`}>
                    <div className='p-0 xl:p-5 text-lg justify-center content-start'>
                        <ul className='flex xl:flex-row w-40 flex-col p-3'>
                            <li><Link className='p-3 text-sm' href={'/home'}>Home</Link></li>
                            <div className='w-[120px] h-[2px] bg-slate-400 '></div>
                            <li><Link className='p-3 text-sm' href={'/booking'}>Partnership</Link></li>
                            <div className='w-[120px] h-[2px] bg-slate-400 '></div>
                            <li><Link className='p-3 text-sm' href={'/venue'}>About</Link></li>
                            <div className='w-[120px] h-[2px] bg-slate-400 '></div>
                            <li><Link className='p-3 text-sm' href={'/booking'}>Sewa Lapangan</Link></li>
                            <div className='w-[120px] h-[2px] bg-slate-400 '></div>
                            <li><Link className='p-3 text-sm ' href={'/keranjang'}>Keranjang</Link></li>
                            <div className='w-[120px] h-[2px] bg-slate-400 '></div>
                            <li className='p-3'><button><Link className='text-sm p-3 ' href={'/login'}>Masuk</Link></button></li>
                            <li className='p-3'><button><Link className='bg-[#1B7996] p-4 hover:bg-slate-300 rounded-lg text-sm text-white' href={'/register'}>Daftar</Link></button></li>
                        </ul>
                    </div>
                </div>


                <div className='flex'>
                    <div className='bg-white visible lg:invisible h-max w-max m-6 items-center' >
                        <Hamburger toggled={isOpen} toggle={setOpen} easing='ease-in' rounded
                            direction='left' size={48} color="#000000" hideOutline={false} />
                    </div>
                </div>
                <div className='p-0 xl:p-5 w-0 xl:w-max h-0 xl:h-max items-end gap-6 invisible lg:visible'>
                    <ul className='flex xl:flex-row text-lg flex-col gap-8'>
                        <li className='p-3 '><Link href={'/keranjang'}><Image className='' src={'/keranjang.png'} alt='keranjang' width={25} height={25}></Image></Link></li>
                        <div className='w-[2px] h-[32px] bg-slate-400 '></div>
                        <li className='p-3'><button><Link className='rounded-lg p-3 ' href={'/login'}>Masuk</Link></button></li>
                        <li className='p-3'><button><Link className='bg-[#1B7996] p-4 hover:bg-slate-300 rounded-lg text-white' href={'/register'}>Daftar</Link></button></li>
                    </ul>
                </div>
            </nav>
        </header>

    )
}

export default Header