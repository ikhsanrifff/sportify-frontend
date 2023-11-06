"use client"

import { ArrowLeft } from '@phosphor-icons/react'
import { ArrowRight } from '@phosphor-icons/react'
import React, { useRef } from 'react'
import Link from 'next/link'

function Rec() {
    const sliderRef = useRef<HTMLDivElement>(null)

    return (
        <div className='px-36 py-36 max-w-screen-2xl mx-auto'>
            <div className='flex justify-between items-center '>
                <div>
                    <h1 className='text-[2.5rem] font-semibold'>Rekomendasi untuk kamu!</h1>
                    <p className='text-[1.5rem] py-4'>Rekomendasi tempat dengan harga murah!</p>
                </div>
                <div className='flex gap-3'>
                    <button onClick={() => {
                        sliderRef.current!.scrollLeft = sliderRef.current!.scrollLeft - 250
                    }} >
                        <ArrowLeft size={32} />
                    </button>
                    <button onClick={() => {
                        sliderRef.current!.scrollLeft = sliderRef.current!.scrollLeft + 250
                    }}>
                        <ArrowRight size={32} />
                    </button>
                </div>
            </div>

            <div ref={sliderRef} className='flex py-10 gap-4 overflow-x-auto scroll-smooth'>
            <Link href={'/venue'}>
              <div className=" w-[18.5rem] flex-none shadow-md hover:shadow-xl rounded-b-lg">
                <img src='/Lapang6.jpg' alt='Lapang4' width={500} height={500} className='h-56 rounded-t-lg ' />
                <div className='p-6 space-y-4'>
                  <p className=' text-gray-500'>Venue</p>

                  <div>
                    <p className='text-[20px] font-medium'>JS Sports Hall</p>
                    <p className=' text-gray-400'>Kab. Bandung</p>
                  </div>

                  <div className='flex gap-3 items-center'>
                    <div className='flex items-center gap-2'>
                      <img src="/ball.svg" alt="ball" width={16} height={16} />
                      <span className=' text-gray-500'>Futsal</span>
                    </div>
                    <div className='w-[1px] h-4 bg-slate-600 '></div>
                    <div className='flex items-center gap-2'>
                      <img src="/kok.svg" alt="kok" width={16} height={16} />
                      <span className=' text-gray-500'>Badminton</span>
                    </div>
                  </div>
                  <hr className='border border-[#7c7c7c]' />
                  <div>
                    <p>Mulai dari</p>
                    <h2>Rp. 100,000,-/jam</h2>
                  </div>
                </div>
              </div>
            </Link>

            <Link href={'/venue'}>
              <div className=" w-[18.5rem] flex-none shadow-md hover:shadow-xl rounded-b-lg">
                <img src='/Lapang6.jpg' alt='Lapang4' width={500} height={500} className='h-56 rounded-t-lg ' />
                <div className='p-6 space-y-4'>
                  <p className=' text-gray-500'>Venue</p>

                  <div>
                    <p className='text-[20px] font-medium'>JS Sports Hall</p>
                    <p className=' text-gray-400'>Kab. Bandung</p>
                  </div>

                  <div className='flex gap-3 items-center'>
                    <div className='flex items-center gap-2'>
                      <img src="/ball.svg" alt="ball" width={16} height={16} />
                      <span className=' text-gray-500'>Futsal</span>
                    </div>
                    <div className='w-[1px] h-4 bg-slate-600 '></div>
                    <div className='flex items-center gap-2'>
                      <img src="/kok.svg" alt="kok" width={16} height={16} />
                      <span className=' text-gray-500'>Badminton</span>
                    </div>
                  </div>
                  <hr className='border border-[#7c7c7c]' />
                  <div>
                    <p>Mulai dari</p>
                    <h2>Rp. 100,000,-/jam</h2>
                  </div>
                </div>
              </div>
            </Link>

            <Link href={'/venue'}>
              <div className=" w-[18.5rem] flex-none shadow-md hover:shadow-xl rounded-b-lg">
                <img src='/Lapang6.jpg' alt='Lapang4' width={500} height={500} className='h-56 rounded-t-lg ' />
                <div className='p-6 space-y-4'>
                  <p className=' text-gray-500'>Venue</p>

                  <div>
                    <p className='text-[20px] font-medium'>JS Sports Hall</p>
                    <p className=' text-gray-400'>Kab. Bandung</p>
                  </div>

                  <div className='flex gap-3 items-center'>
                    <div className='flex items-center gap-2'>
                      <img src="/ball.svg" alt="ball" width={16} height={16} />
                      <span className=' text-gray-500'>Futsal</span>
                    </div>
                    <div className='w-[1px] h-4 bg-slate-600 '></div>
                    <div className='flex items-center gap-2'>
                      <img src="/kok.svg" alt="kok" width={16} height={16} />
                      <span className=' text-gray-500'>Badminton</span>
                    </div>
                  </div>
                  <hr className='border border-[#7c7c7c]' />
                  <div>
                    <p>Mulai dari</p>
                    <h2>Rp. 100,000,-/jam</h2>
                  </div>
                </div>
              </div>
            </Link>

            <Link href={'/venue'}>
              <div className=" w-[18.5rem] flex-none shadow-md hover:shadow-xl rounded-b-lg">
                <img src='/Lapang6.jpg' alt='Lapang4' width={500} height={500} className='h-56 rounded-t-lg ' />
                <div className='p-6 space-y-4'>
                  <p className=' text-gray-500'>Venue</p>

                  <div>
                    <p className='text-[20px] font-medium'>JS Sports Hall</p>
                    <p className=' text-gray-400'>Kab. Bandung</p>
                  </div>

                  <div className='flex gap-3 items-center'>
                    <div className='flex items-center gap-2'>
                      <img src="/ball.svg" alt="ball" width={16} height={16} />
                      <span className=' text-gray-500'>Futsal</span>
                    </div>
                    <div className='w-[1px] h-4 bg-slate-600 '></div>
                    <div className='flex items-center gap-2'>
                      <img src="/kok.svg" alt="kok" width={16} height={16} />
                      <span className=' text-gray-500'>Badminton</span>
                    </div>
                  </div>
                  <hr className='border border-[#7c7c7c]' />
                  <div>
                    <p>Mulai dari</p>
                    <h2>Rp. 100,000,-/jam</h2>
                  </div>
                </div>
              </div>
            </Link>

            <Link href={'/venue'}>
              <div className=" w-[18.5rem] flex-none shadow-md hover:shadow-xl rounded-b-lg">
                <img src='/Lapang6.jpg' alt='Lapang4' width={500} height={500} className='h-56 rounded-t-lg ' />
                <div className='p-6 space-y-4'>
                  <p className=' text-gray-500'>Venue</p>

                  <div>
                    <p className='text-[20px] font-medium'>JS Sports Hall</p>
                    <p className=' text-gray-400'>Kab. Bandung</p>
                  </div>

                  <div className='flex gap-3 items-center'>
                    <div className='flex items-center gap-2'>
                      <img src="/ball.svg" alt="ball" width={16} height={16} />
                      <span className=' text-gray-500'>Futsal</span>
                    </div>
                    <div className='w-[1px] h-4 bg-slate-600 '></div>
                    <div className='flex items-center gap-2'>
                      <img src="/kok.svg" alt="kok" width={16} height={16} />
                      <span className=' text-gray-500'>Badminton</span>
                    </div>
                  </div>
                  <hr className='border border-[#7c7c7c]' />
                  <div>
                    <p>Mulai dari</p>
                    <h2>Rp. 100,000,-/jam</h2>
                  </div>
                </div>
              </div>
            </Link>

            <Link href={'/venue'}>
              <div className=" w-[18.5rem] flex-none shadow-md hover:shadow-xl rounded-b-lg">
                <img src='/Lapang6.jpg' alt='Lapang4' width={500} height={500} className='h-56 rounded-t-lg ' />
                <div className='p-6 space-y-4'>
                  <p className=' text-gray-500'>Venue</p>

                  <div>
                    <p className='text-[20px] font-medium'>JS Sports Hall</p>
                    <p className=' text-gray-400'>Kab. Bandung</p>
                  </div>

                  <div className='flex gap-3 items-center'>
                    <div className='flex items-center gap-2'>
                      <img src="/ball.svg" alt="ball" width={16} height={16} />
                      <span className=' text-gray-500'>Futsal</span>
                    </div>
                    <div className='w-[1px] h-4 bg-slate-600 '></div>
                    <div className='flex items-center gap-2'>
                      <img src="/kok.svg" alt="kok" width={16} height={16} />
                      <span className=' text-gray-500'>Badminton</span>
                    </div>
                  </div>
                  <hr className='border border-[#7c7c7c]' />
                  <div>
                    <p>Mulai dari</p>
                    <h2>Rp. 100,000,-/jam</h2>
                  </div>
                </div>
              </div>
            </Link>

            <Link href={'/venue'}>
              <div className=" w-[18.5rem] flex-none shadow-md hover:shadow-xl rounded-b-lg">
                <img src='/Lapang6.jpg' alt='Lapang4' width={500} height={500} className='h-56 rounded-t-lg ' />
                <div className='p-6 space-y-4'>
                  <p className=' text-gray-500'>Venue</p>

                  <div>
                    <p className='text-[20px] font-medium'>JS Sports Hall</p>
                    <p className=' text-gray-400'>Kab. Bandung</p>
                  </div>

                  <div className='flex gap-3 items-center'>
                    <div className='flex items-center gap-2'>
                      <img src="/ball.svg" alt="ball" width={16} height={16} />
                      <span className=' text-gray-500'>Futsal</span>
                    </div>
                    <div className='w-[1px] h-4 bg-slate-600 '></div>
                    <div className='flex items-center gap-2'>
                      <img src="/kok.svg" alt="kok" width={16} height={16} />
                      <span className=' text-gray-500'>Badminton</span>
                    </div>
                  </div>
                  <hr className='border border-[#7c7c7c]' />
                  <div>
                    <p>Mulai dari</p>
                    <h2>Rp. 100,000,-/jam</h2>
                  </div>
                </div>
              </div>
            </Link>
            
            </div>
        </div>
    )
}

export default Rec