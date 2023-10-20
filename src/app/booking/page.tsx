import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Style } from 'util'
import { SearchBar } from '@/components'
import { FunnelSimple } from '@phosphor-icons/react/dist/ssr/FunnelSimple'

const Booking = () => {
  return (
    <div className='flex flex-col m-auto max-w-screen-2xl'>
        <div className='flex flex-col max-w-screen-2xl p-10' style={{ 
          backgroundImage: `url("/bg-booking.png")`}}>
          <p className=' m-auto text-3xl text-gray-200 font-bold'>Booking Lapangan Online</p>
          <Link className=' flex m-auto w-auto p-2' href={'/venue'}><button className='flex bg-yellow-400 p-3 gap-4 rounded-md'>Booking Lapangan<Image className=' m-auto' src={'/panahbooking.png'} alt='panah' width={20} height={20}></Image></button></Link>
        </div>
      <div className=' max-w-screen p-6 bg-white'>
          <p className='p-6 text-center text-2xl font-bold'>CABANG OLAHRAGA</p>
            <div className='flex gap-10 items-center justify-between'>
                <div>
                  {'<-'}
                </div>
                <div className=' w-min bg-black p-20 text-white'>
                  bagian cabang
                </div>
                <div className=' w-min bg-black p-20 text-white'>
                  bagian cabang
                </div>
                <div className=' w-min bg-black p-20 text-white'>
                  bagian cabang
                </div>
                <div>
                  {'->'}
                </div>
            </div>
          <div className='flex flex-col p-6 max-w-screen-2xl items-center'>
            <div className='flex gap-2'>
              <input type="radio" name="slider"/>
              <input type="radio" name="slider"/>
              <input type="radio" name="slider"/>
            </div>
          </div>
            
              
      
      <div className='flex flex-col max-w-screen-2xl bg-black'>
          <h3 className='text-white text-4xl p-6'>Cari Venue</h3>
        <div className='flex max-w-screen-2xl p-10 h-52'>
            <div className='gap-5 p-10 items-center'>
              <div className=' items-center'>
                <SearchBar />
              </div>
          </div>
          <div className=' flex gap-3 items-center'>
              <button className='bg-white p-3 rounded-xl font-extrabold text-2xl hover:bg-black hover:text-white' name='searchbar'>
              <FunnelSimple size={35} color="#000000"  />
              </button>
              <button className='bg-white p-3 rounded-xl font-extrabold hover:bg-black hover:text-white'>Cari Venue</button>
              </div>
        </div>
      </div>
      <div className='flex flex-col max-w-screen-2xl m-auto p-16'>
        <p className='text-3xl font-semibold p-10'>Available 4 venue</p>
        <div className='flex gap-10 max-w-screen-2xl items-center m-auto'>
        <div className='h-max bg-white w-max shadow-xl rounded-xl'>
                <div className='w-max h-max'>
                  <Image className='rounded-t-xl' src={'/img-js-sport-hall.png'} alt={'lapang-bola'} width={285} height={150}/>
                  <div className='p-3 font-sans'>
                    <p className='text-lg p-3'>Venue</p>
                  <p className=' font-bold text-3xl p-2'>JS Sports Hall</p>
                  <p className='text-xl p-2'>Kab.Bandung</p>
                  <div className='flex gap-1 ml-2 m-auto'>
                  <Image src={'/Vectorbola-img.svg'} alt={'bola'} width={28} height={0}/>
                    <p className='p-1 text-xl my-auto'>Futsal</p>
                    <div className='w-[2px] h-[28px] m-2 bg-slate-400'></div>
                    <div className='flex gap-1'>
                    <Image src={'/Vectorbultang-img.svg'} alt={'lapang-bola'} width={28} height={0}/>
                      <p className='p-1 text-xl m-auto'>Badminton</p> 
                    </div>
                  </div>
                    <div className='m-auto my-2 w-[260px] h-[2px] bg-slate-400'></div>
                      <div className='p-3'>
                        <p className='font-sans text-xl font-normal'>Mulai dari </p>
                        <p className='font-sans text-2xl font-semibold'>Rp.100.000,-/jam</p>
                      </div>
                  </div>
                </div>
              </div>
              <div className='h-max bg-white w-max shadow-xl rounded-xl'>
                <div className='w-max h-max'>
                  <Image className='rounded-t-xl' src={'/img-js-sport-hall.png'} alt={'lapang-bola'} width={285} height={150}/>
                  <div className='p-3 font-sans'>
                    <p className='text-lg p-3'>Venue</p>
                  <p className=' font-bold text-3xl p-2'>JS Sports Hall</p>
                  <p className='text-xl p-2'>Kab.Bandung</p>
                  <div className='flex gap-1 ml-2 m-auto'>
                  <Image src={'/Vectorbola-img.svg'} alt={'bola'} width={28} height={0}/>
                    <p className='p-1 text-xl my-auto'>Futsal</p>
                    <div className='w-[2px] h-[28px] m-2 bg-slate-400'></div>
                    <div className='flex gap-1'>
                    <Image src={'/Vectorbultang-img.svg'} alt={'lapang-bola'} width={28} height={0}/>
                      <p className='p-1 text-xl m-auto'>Badminton</p> 
                    </div>
                  </div>
                    <div className='m-auto my-2 w-[260px] h-[2px] bg-slate-400'></div>
                      <div className='p-3'>
                        <p className='font-sans text-xl font-normal'>Mulai dari </p>
                        <p className='font-sans text-2xl font-semibold'>Rp.100.000,-/jam</p>
                      </div>
                  </div>
                </div>
              </div>
              <div className='h-max bg-white w-max shadow-xl rounded-xl '>
                <div className='w-max h-max'>
                  <Image className='rounded-t-xl' src={'/img-js-sport-hall.png'} alt={'lapang-bola'} width={285} height={150}/>
                  <div className='p-3 font-sans'>
                    <p className='text-lg p-3'>Venue</p>
                  <p className=' font-bold text-3xl p-2'>JS Sports Hall</p>
                  <p className='text-xl p-2'>Kab.Bandung</p>
                  <div className='flex gap-1 ml-2 m-auto'>
                  <Image src={'/Vectorbola-img.svg'} alt={'bola'} width={28} height={0}/>
                    <p className='p-1 text-xl my-auto'>Futsal</p>
                    <div className='w-[2px] h-[28px] m-2 bg-slate-400'></div>
                    <div className='flex gap-1'>
                    <Image src={'/Vectorbultang-img.svg'} alt={'lapang-bola'} width={28} height={0}/>
                      <p className='p-1 text-xl m-auto'>Badminton</p> 
                    </div>
                  </div>
                    <div className='m-auto my-2 w-[260px] h-[2px] bg-slate-400'></div>
                      <div className='p-3'>
                        <p className='font-sans text-xl font-normal'>Mulai dari </p>
                        <p className='font-sans text-2xl font-semibold'>Rp.100.000,-/jam</p>
                      </div>
                  </div>
                </div>
              </div>
              <div className='h-max bg-white w-max shadow-xl rounded-xl '>
                <div className='w-max h-max'>
                  <Image className='rounded-t-xl' src={'/img-js-sport-hall.png'} alt={'lapang-bola'} width={285} height={150}/>
                  <div className='p-3 font-sans'>
                    <p className='text-lg p-3'>Venue</p>
                  <p className=' font-bold text-3xl p-2'>JS Sports Hall</p>
                  <p className='text-xl p-2'>Kab.Bandung</p>
                  <div className='flex gap-1 ml-2 m-auto'>
                  <Image src={'/Vectorbola-img.svg'} alt={'bola'} width={28} height={0}/>
                    <p className='p-1 text-xl my-auto'>Futsal</p>
                    <div className='w-[2px] h-[28px] m-2 bg-slate-400'></div>
                    <div className='flex gap-1'>
                    <Image src={'/Vectorbultang-img.svg'} alt={'lapang-bola'} width={28} height={0}/>
                      <p className='p-1 text-xl m-auto'>Badminton</p> 
                    </div>
                  </div>
                    <div className='m-auto my-2 w-[260px] h-[2px] bg-slate-400'></div>
                      <div className='p-3'>
                        <p className='font-sans text-xl font-normal'>Mulai dari </p>
                        <p className='font-sans text-2xl font-semibold'>Rp.100.000,-/jam</p>
                      </div>
                  </div>
                </div>
              </div>
        </div>
      
      </div>
    </div>
  </div>
  )
}

export default Booking