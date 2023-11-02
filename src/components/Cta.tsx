import React from 'react'

function Cta() {
  return (
    <div>
      <div className='flex max-w-screen-2xl mx-auto px-36 py-36 justify-between'>
        <div>
          <h1 className='text-[3.5rem] font-semibold'>Kelola Vanue Lebih <br /> <span className='text-[#1B7996]'>praktis</span>  dan <br /> <span className='text-[#1B7996]'> menguntungkan</span></h1>
          <p className='text-[1.5rem] py-4'>Daftarkan vanue anda sekarang!</p>
          <button className='text-white rounded-lg px-6 py-4   bg-[#1B7996]'>Daftarkan Vanue</button>
        </div>
        <div className='flex gap-4 '>
          <div>
            <div className="w-[13rem] h-[16rem] mb-4 bg-[url('/Lapang1.jpg')] bg-cover bg-center rounded-[0.625rem]">
            </div>
            <div className="w-[13rem] h-[13rem] bg-[url('/Lapang3.jpg')] bg-cover bg-center rounded-[0.625rem]">
            </div>
          </div>
          <div>
            <div className="w-[13rem] h-[13rem] mb-4 bg-[url('/Lapang2.jpg')] bg-cover bg-center rounded-[0.625rem]">
            </div>
            <div className="w-[13rem] h-[16rem] bg-[url('/Lapang4.jpg')] bg-cover bg-center rounded-[0.625rem]">
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cta


{/* <div className='flex flex-row h-6/12 w-4/12'>
            <div className='w-6/12'>
              <div className=' h-4/5  m-2 rounded-lg bg-no-repeat bg-[url("/gm-bola.png")]'></div>
              <div className='h-full m-2 rounded-lg w-full bg-no-repeat bg-[url("/gm-bultang.png")]'></div>
            </div>
            <div className='w-6/12'>
              <div className='h-3/5 m-2 rounded-lg bg-no-repeat bg-[url("/gm-basket.png")]'></div>
              <div className='h-full m-2 rounded-lg w-full bg-no-repeat bg-[url("/gm-baseball.png")]'></div>
            </div>
          </div> */}