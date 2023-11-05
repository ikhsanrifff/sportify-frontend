import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Venue = () => {
  return (
    <div className='flex max-w-screen-2xl m-auto bg-white'>
      <div className='p-10'>
        <p className=' font-sans font-semibold text-5xl'>JS Sport Hall</p>
        <div className='flex flex-row p-6'>
          <Image className=' mr-2' src={'/v-lokasi.png'} alt={'lokasi'} width={20} height={0}></Image>
          <p>Kabupaten Bandung, Jawa Barat</p>
          <div className='mx-2 w-[2px] h-[24px] bg-slate-400'></div>
          <Image className=' mx-2' src={'/Vectorbola-img.svg'} alt={'bola'} width={20} height={0} />
          <p>Futsal</p>
          <Image className=' mx-2' src={'/Vectorbultang-img.svg'} alt={'bultang'} width={20} height={0} />
          <p>Badminton</p>
        </div>

        <div className='flex p-6'>
          <div className='flex'>
            <Image src={'/lapangan-futsal.png'} alt={'bola'} width={200} height={100} />
            <div className='grid grid-cols-2'>
              <Image src={'/futsal.png'} alt={'bola'} width={200} height={100} />
              <Image src={'/futsal2.png'} alt={'bola'} width={200} height={100} />
              <Image src={'/futsal3.png'} alt={'bola'} width={200} height={100} />
              <Image src={'/lapangan-futsal2.png'} alt={'bola'} width={200} height={100} />
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default Venue