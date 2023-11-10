import React from 'react'
import Link from 'next/link'

const page = () => {
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
          
        </div>
      </div>
  )
}

export default page