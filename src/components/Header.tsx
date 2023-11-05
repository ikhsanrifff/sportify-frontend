"use client";
import Link from 'next/link'
import React, { useState } from 'react'
import { Spin as Hamburger } from 'hamburger-react'
import { ShoppingCartSimple } from '@phosphor-icons/react';

const Header = () => {

    const [isOpen, setOpen] = useState(false)

    return (
        <header className='max-w-screen-2xl h-max xl:h-24 overflow-hidden bg-white mx-auto border'>
            <nav className='flex max-w-screen-2xl h-max xl:h-24 p-2 xl:p-0 mx-auto justify-between'>
                <div className={`${isOpen ? 'hidden' : 'ml-8 mt-4 xl:mt-2 p-2  h-[50px] w-[50px] xl:h-[74px] xl:w-[70px] inset-0 bg-cover bg-[url("/logo-neuron-sportify.svg")]'}`}></div>


                <div className='max-w-screen-2xl flex flex-col w-max h-full xl:w-0 xl:h-0'>
                    <div className='flex max-w-screen-2xl w-full gap-6 bg-white visible lg:invisible h-max p-6 top-0 right-0' >
                        <Link className={`${isOpen ? 'hidden' : 'm-auto'}`} href={'/keranjang'}><ShoppingCartSimple width={50} height={50}/></Link>
                        <div className={`${isOpen ? 'hidden' : 'w-[1px] h-[50px] bg-slate-400'}`}></div>
                        <div className={`${isOpen ? 'm-auto' : 'hidden'}`}></div>
                        <Hamburger toggled={isOpen} toggle={setOpen} easing='ease-in' rounded
                            direction='left' size={48} color="#000000" hideOutline={false} />
                    </div>
                    <div className={`${isOpen ? 'flex flex-col w-full bg-white' : 'hidden'}`}>
                        <div className='p-0 xl:p-5 text-lg '>
                            <ul className='flex xl:flex-row w-full gap-8 flex-col p-4'>
                                <li className='text-center'><Link className='p-3 text-[35px]' href={'/home'}>Home</Link></li>
                                <div className='w-[330px] h-[1px] bg-slate-400 '></div>
                                <li className='text-center'><Link className='p-3 text-[35px]' href={'/'}>Partnership</Link></li>
                                <div className='w-[330px] h-[1px] bg-slate-400 '></div>
                                <li className='text-center'><Link className='p-3 text-[35px]' href={'/'}>About</Link></li>
                                <div className='w-[330px] h-[1px] bg-slate-400 '></div>
                                <li className='text-center'><Link className='p-3 text-[35px]' href={'/booking'}>Sewa Lapangan</Link></li>
                                <div className='w-[330px] h-[2px] bg-slate-400 '></div>
                                <li className='w-full text-center p-3 border border-[#1B7996] bg-white hover:bg-[#1B7996] rounded-lg hover:text-white text-[#1B7996]'><button><Link className='w-full h-max text-[25px] p-3 ' href={'/login'}>Masuk</Link></button></li>
                                <li className='w-full text-center p-3 bg-[#1B7996] hover:bg-slate-300 rounded-lg'><button><Link className='w-full h-max  text-[25px] text-white' href={'/register'}>Daftar</Link></button></li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                    <div className={`${isOpen ? 'hidden' : 'p-0 xl:p-6 w-0 xl:w-5/12 h-0 xl:h-24 text-lg invisible xl:visible justify-center'}`}>
                        <ul className={`${isOpen ? 'hidden' : 'flex m-3 gap-12'}`}>
                            <li><Link className='rounded-lg text-[20px] font-normal' href={'/home'}>Home</Link></li>
                            <li><Link className='rounded-lg text-[20px] font-normal' href={'/'}>Partnership</Link></li>
                            <li><Link className='rounded-lg text-[20px] font-normal' href={'/'}>About</Link></li>
                            <li><Link className='rounded-lg text-[20px] font-normal' href={'/booking'}>Sewa Lapangan</Link></li>
                        </ul>
                    </div>
                    <div className={`${isOpen ? 'hidden' : 'p-0 xl:p-6 w-0 xl:w-max h-0 xl:h-24 justify-end end-0 gap-6'}`}>
                        <ul className='flex text-lg p-2 gap-16'>
                        <li className='m-auto invisible xl:visible'><Link href={'/'}><div className='w-[36.47px] h-[31.5px] bg-no-repeat bg-cover bg-[url("/keranjanghd.svg")]'></div></Link></li>
                            <div className='w-[1px] h-[36px] bg-slate-400 my-auto invisible xl:visible'></div>
                            <li className='invisible xl:visible m-auto'><button><Link className='text-[20px] font-normal' href={'/login'}>Masuk</Link></button></li>
                            <li className='invisible xl:visible m-auto'><button><Link className='text-[20px] font-normal bg-[#1B7996] p-3 hover:bg-slate-300 rounded-lg text-white' href={'/register'}>Daftar</Link></button></li>
                        </ul>
                    </div>

            </nav>
        </header>

    )
}

export default Header