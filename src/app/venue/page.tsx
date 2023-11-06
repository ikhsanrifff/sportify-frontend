import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Venue = () => {
  return (
    <div className='flex max-w-screen-2xl m-auto bg-white'>
      <div className='w-full'>
        <div className='w-full h-[50px] border'>
          <ul className='flex flex-row gap-4 w-full m-3'>
            <Link href={'/home'} className='hover:underline text-[18px] font-normal'>Home</Link>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#00000" viewBox="0 0 256 256"><path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path></svg>
            <Link href={'/booking'} className='hover:underline text-[18px] font-normal'>Sewa Lapangan</Link>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#00000" viewBox="0 0 256 256"><path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path></svg>
            <Link href={'/venue'} className='hover:underline text-[18px] font-normal'>JS Sport Hall</Link>
          </ul>
        </div>
        <div className='p-10'>
          <p className=' font-sans font-semibold text-[48px]'>JS Sport Hall</p>
          <div className='flex flex-row'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#00000" viewBox="0 0 256 256"><path d="M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z"></path></svg>
            <p>Kabupaten Bandung, Jawa Barat</p>
            <div className='mx-2 w-[2px] h-[24px] bg-slate-400'></div>
            <img className='mx-2' src={'/Vectorbola-img.svg'} alt={'bola'} width={16} height={16} />
            <p>Futsal</p>
            <img className='mx-2' src={'/Vectorbultang-img.svg'} alt={'bultang'} width={16} height={16} />
            <p>Badminton</p>
          </div>

          <div className='flex p-6'>
            <div className='flex gap-1'>
              <img src={'/dv-lapangan.svg'} alt={'lapang'} width={300} height={100} />
              <div className='grid grid-cols-2 gap-1'>
                <img src={'/dv-futsal.svg'} alt={'futsal'} width={200} height={100} />
                <img src={'/dv-futsal2.svg'} alt={'futsal2'} width={200} height={100} />
                <img src={'/dv-futsal3.svg'} alt={'futsal3'} width={200} height={100} />
                <div className='bg-cover brightness-50'>
                  <img src={'/dv-lapangan2.svg'} alt={'lapang2'} width={200} height={100} />
                </div>

              </div>
            </div>
            <div className='w-[350px] p-4'>
              <div className='flex flex-col w-[350px] h-[205px] p-6 border rounded-[10px]'>
                <p className='w-full text-[20px] font-medium'>Mulai dari</p>
                <p className='w-full text-[26px] font-semibold'>Rp.100.000,-/jam</p>
                <Link className='w-[305] h-[51px] text-[18px] mt-6 bg-[#1B7996] p-3 text-white rounded-[10px] text-center' href={'/'}>Cek Ketersediaan</Link>
              </div>
            </div>
          </div>
        </div>

        <div className='p-6'>
          <div className='border-b p-6'>
            <p className='text-[35px] font-semibold'>Detail</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Venue