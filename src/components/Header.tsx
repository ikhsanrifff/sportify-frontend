"use client";
import Link from 'next/link'
import Image from 'next/image'
import React, { useState } from 'react'
import { Spin as Hamburger } from 'hamburger-react'

const Header = () => {

    const [isOpen, setOpen] = useState(false)

    return (
        <header className='max-w-screen-2xl h-max xl:h-24 overflow-hidden bg-white mx-auto border'>
            <nav className='flex max-w-screen h-max xl:h-24 p-2 xl:p-0 mx-auto justify-between'>
                <div className='ml-8 mt-2 p-2 h-[74px] w-[70px] inset-0 bg-cover bg-[url("/logo-neuron-sportify.svg")]'></div>

                <div></div>

                <div className='p-0 xl:p-6 w-0 xl:w-1/2 h-max xl:h-24 text-lg invisible xl:visible justify-center'>
                    <ul className='flex m-3 gap-16'>
                        <li><Link className='rounded-lg text-[20px] font-normal' href={'/home'}>Home</Link></li>
                        <li><Link className='rounded-lg text-[20px] font-normal' href={'/booking'}>Partnership</Link></li>
                        <li><Link className='rounded-lg text-[20px] font-normal' href={'/venue'}>About</Link></li>
                        <li><Link className='rounded-lg text-[20px] font-normal' href={'/booking'}>Sewa Lapangan</Link></li>
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
                            <div className='w-[120px] h-[2px] m-6 bg-slate-400 '></div>
                            <li className='p-3'><button><Link className='bg-[#1B7996] p-4 hover:bg-slate-300 rounded-lg text-sm text-white' href={'/register'}>Daftar</Link></button></li>
                        </ul>
                    </div>
                </div>


                <div className='flex xl:w-0 w-max xl:h-0 h-max'>
                    <div className='bg-white visible md:invisible h-max w-max m-6 items-center' >
                        <Hamburger toggled={isOpen} toggle={setOpen} easing='ease-in' rounded
                            direction='left' size={48} color="#000000" hideOutline={false} />
                    </div>
                </div>
                <div className='p-0 xl:p-6 w-0 xl:w-max h-max xl:h-24 justify-end end-0 gap-6 invisible lg:visible'>
                    <ul className='flex xl:flex-row text-lg flex-col p-2 gap-16'>
                        <li className='m-auto'><Link href={'/keranjang'}><div className='w-9 h-[30px] bg-no-repeat bg-cover bg-[url("/keranjanghd.svg")]'></div></Link></li>
                        <div className='w-[1px] h-[36px] bg-slate-400 '></div>
                        <li className='m-auto'><button><Link className='text-[20px] font-normal' href={'/login'}>Masuk</Link></button></li>
                        <li className='m-auto'><button><Link className='text-[20px] font-normal bg-[#1B7996] p-3 hover:bg-slate-300 rounded-lg text-white' href={'/register'}>Daftar</Link></button></li>
                    </ul>
                </div>
            </nav>
        </header>

    )
}

export default Header