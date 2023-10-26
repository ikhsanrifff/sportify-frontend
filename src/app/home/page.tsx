import Image from 'next/image'
import Link from 'next/link'


export default function Home() {
  return (
    <div className='max-w-screen-2xl mx-auto'>
      <div className="flex max-h-max shadow-xl justify-between bg-gradient-to-r from-[#1B7996] via-[#569AB7] to-[#9CC5D0]">
        <div className='p-10 m-auto'>
          <h1 className="font-bold text-white text-xl xl:text-6xl">
            Neuron Sportify
          </h1>
          <p className="text-sm xl:text-2xl text-white font-sans">
            Jadikan Olahragamu semakin mudah dan menyenangkan!
          </p>
        </div>
        <div>
          <Image className=' col-auto' src={'/ring-basket.png'} alt='ringbasket' width={500} height={500}/>
        </div>
      </div>

      <div className='p-0 xl:p-6 gap-5 -mt-24'>
        <form className='p-5 xl:p-10 w-min xl:w-max m-auto rounded-sm'>
          <div className='flex flex-col mt-10 xl:mt-0 xl:flex-row justify-center bg-white p-8 rounded-lg shadow-xl gap-10 xl:gap-28'>
            <div className='rounded-lg flex'>
              <Image className=' bg-[#1B7996] w-max p-6 xl:p-8 rounded-lg' src={'/v-lokasi.png'} alt={'lokasi'} width={0} height={0}/>
              <div className='p-3'>
                <p className='font-semibold text-lg xl:text-xl'>Lokasi</p>
                <select className='text-sm xl:text-xl' required>
                  <option disabled selected hidden className='text-sm xl:text-xl'>Pilih Kota</option>
                  <option className='text-sm xl:text-xl'>Bandung</option>
                  <option className='text-sm xl:text-xl'>Jakarta</option>
                  <option className='text-sm xl:text-xl'>Surabaya</option>
                </select>
              </div>
            </div>
            
            <div className='rounded-lg flex'>
              <Image className=' bg-[#1B7996] w-max p-6 xl:p-8 rounded-lg' src={'/v-caraga.png'} alt={'cabang'} width={20} height={0}/>
              <div className='p-3 '>
                <p className='font-semibold text-lg xl:text-xl'>Cabang</p>
                <select className='text-sm xl:text-xl' required>
                  <option disabled selected hidden className='text-sm xl:text-xl'>Temukan cabang olahraga</option>
                  <option className='text-sm'>Badminton</option>
                  <option className='text-sm'>Sepak Bola</option>
                  <option className='text-sm'>Tenis</option>
                </select>
              </div>
            </div>
            <div className='flex'>
              <Link className='m-auto' href={'/venue'}>
                <button className='w-max bg-slate-400 text-white p-3 rounded-lg hover:bg-[#1B7996] flex text-lg gap-2 xl:gap-5'>Temukan
                  <Image className='m-auto' src={'/v-next.png'} alt={'next'} width={20} height={20}></Image></button>
              </Link>
            </div>
          </div>
        </form>
      </div>

      <div className="p-6 xl:p-14 ml-2">

        <div className='flex justify-between'>
          <div className='flex-row p-2 xl:p-10 font-normal'>
            <h1 className="text-xl xl:text-5xl font-normal">
              Kelola venue lebih
              <div className=''>
                <p className=' text-lg xl:text-5xl text-[#45A8AE] font-sans font-normal'>praktis&nbsp;</p>
                <p className=' text-lg xl:text-5xl text-black font-sans font-normal'>dan&nbsp;</p>
                <p className=' text-lg xl:text-5xl text-[#45A8AE] font-sans font-normal'>menguntungkan.</p>
              </div>
            </h1>
            <p className="text-sm xl:text-xl my-2 font-sans font-4xl">
              Daftarkan venue Anda Sekarang!
            </p>
            <button className="p-2 xl:p-4 text-sm xl:text-xl bg-[#45A8AE] rounded-xl hover:bg-blue-100 text-white hover:text-blue-300">
              <Link href={'/venue'}>Daftarkan Venue</Link>
            </button>
          </div>
          <div className='flex'>
            <div>
              <Image className='p-1' src={'/gm-bola.png'} alt={'lapang-bola'} width={150} height={100} />
              <Image className='p-1' src={'/gm-bultang.png'} alt={'lapang-bola'} width={150} height={100} />
            </div>
            <div>
              <Image className='p-1' src={'/gm-basket.png'} alt={'lapang-bola'} width={150} height={100} />
              <Image className='p-1' src={'/gm-baseball.png'} alt={'lapang-bola'} width={150} height={100} />
            </div>
          </div>
        </div>

        <div className='p-3 xl:p-10'>
          <p className="mt-10 text-sm xl:text-xl font-bold">
            Kenapa Harus Neuron Sportify?
          </p>
          <p className="font-bold text-sm xl:text-xl">
            Rasakan kemudahan  Booking Online Aplikasi Neuron Sportify!
          </p>
        </div>

        <div className='flex justify-between p-1 xl:p-6'>
          <div className='xl:w-48 xl:h-48 w-16 h-16 flex flex-col m-auto'>
            <Image src='/img-kemudahan-akses.png' alt={'akses-mudah'} className='m-auto' width={100} height={100} />
            <p className='m-auto text-[#1B7996] text-xs xl:text-lg p-3'>Kemudahan Akses</p>
          </div>
          <div className='xl:w-48 xl:h-48 w-16 h-16 flex flex-col m-auto'>
            <Image className='m-auto' src={'/img-keterjangkauan.png'} alt={'jangkauan'} width={100} height={100} />
            <p className='m-auto text-[#1B7996] text-xs xl:text-lg p-3'>Keterejangkauan</p>
          </div>
          <div className='xl:w-48 xl:h-48 w-16 h-16 flex flex-col m-auto'>
            <Image className='m-auto' src={'/img-tranparansi.png'} alt={'tranparansi'} width={100} height={100} />
            <p className='m-auto text-[#1B7996] text-xs xl:text-lg text p-3'>Tranparansi</p>
          </div>
          <div className='xl:w-48 xl:h-48 w-16 h-16 flex flex-col m-auto'>
            <Image className='m-auto' src={'/img-efisiensi-akurasi.png'} alt={'efisiensi-akurasi'} width={100} height={100} />
            <p className='m-auto text-[#1B7996] text-xs xl:text-lg p-3'>Efisiensi & Akurasi</p>
          </div>
        </div>

        <div className='m-10'>
          <p className='font-semibold font-sans text-lg xl:text-3xl'>Rekomendasi untuk kamu!</p>
          <p className='font-medium font-sans  xl:text-xl'>Rekomendasi tempat dengan harga murah!</p>
        </div>
        
        <div className='flex flex-col max-w-screen-2xl m-auto items-center'>
          <div className='flex gap-6'>

            <div className='h-max bg-white w-max invisible xl:visible shadow-xl rounded-xl'>
              <div className='w-max h-max'>
                <Image className='rounded-t-xl' src={'/img-js-sport-hall.png'} alt={'lapang-bola'} width={285} height={150} />
                <div className='p-3 font-sans'>
                  <p className='text-lg p-3'>Venue</p>
                  <p className=' font-bold text-3xl p-2'>JS Sports Hall</p>
                  <p className='text-xl p-2'>Kab.Bandung</p>
                  <div className='flex gap-1 ml-2 m-auto'>
                    <Image src={'/Vectorbola-img.svg'} alt={'bola'} width={28} height={0} />
                    <p className='p-1 text-xl my-auto'>Futsal</p>
                    <div className='w-[2px] h-[28px] m-2 bg-slate-400'></div>
                    <div className='flex gap-1'>
                      <Image src={'/Vectorbultang-img.svg'} alt={'lapang-bola'} width={28} height={0} />
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
                <Image className='rounded-t-xl' src={'/img-js-sport-hall.png'} alt={'lapang-bola'} width={285} height={150} />
                <div className='p-3 font-sans'>
                  <p className='text-lg p-3'>Venue</p>
                  <p className=' font-bold text-3xl p-2'>JS Sports Hall</p>
                  <p className='text-xl p-2'>Kab.Bandung</p>
                  <div className='flex gap-1 ml-2 m-auto'>
                    <Image src={'/Vectorbola-img.svg'} alt={'bola'} width={28} height={0} />
                    <p className='p-1 text-xl my-auto'>Futsal</p>
                    <div className='w-[2px] h-[28px] m-2 bg-slate-400'></div>
                    <div className='flex gap-1'>
                      <Image src={'/Vectorbultang-img.svg'} alt={'lapang-bola'} width={28} height={0} />
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
                <Image className='rounded-t-xl' src={'/img-js-sport-hall.png'} alt={'lapang-bola'} width={285} height={150} />
                <div className='p-3 font-sans'>
                  <p className='text-lg p-3'>Venue</p>
                  <p className=' font-bold text-3xl p-2'>JS Sports Hall</p>
                  <p className='text-xl p-2'>Kab.Bandung</p>
                  <div className='flex gap-1 ml-2 m-auto'>
                    <Image src={'/Vectorbola-img.svg'} alt={'bola'} width={28} height={0} />
                    <p className='p-1 text-xl my-auto'>Futsal</p>
                    <div className='w-[2px] h-[28px] m-2 bg-slate-400'></div>
                    <div className='flex gap-1'>
                      <Image src={'/Vectorbultang-img.svg'} alt={'lapang-bola'} width={28} height={0} />
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

            <div className='h-max bg-white w-max invisible xl:visible shadow-xl rounded-xl'>
              <div className='w-max h-max'>
                <Image className='rounded-t-xl' src={'/img-js-sport-hall.png'} alt={'lapang-bola'} width={285} height={150} />
                <div className='p-3 font-sans'>
                  <p className='text-lg p-3'>Venue</p>
                  <p className=' font-bold text-3xl p-2'>JS Sports Hall</p>
                  <p className='text-xl p-2'>Kab.Bandung</p>
                  <div className='flex gap-1 ml-2 m-auto'>
                    <Image src={'/Vectorbola-img.svg'} alt={'bola'} width={28} height={0} />
                    <p className='p-1 text-xl my-auto'>Futsal</p>
                    <div className='w-[2px] h-[28px] m-2 bg-slate-400'></div>
                    <div className='flex gap-1'>
                      <Image src={'/Vectorbultang-img.svg'} alt={'lapang-bola'} width={28} height={0} />
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
