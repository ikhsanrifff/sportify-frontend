import Image from 'next/image'
import { Description, Footer,Header } from '../../components'
import Venue from '../../components/Venue'
import Link from 'next/link'
import { Style } from 'util'
import { MapPin } from '@phosphor-icons/react/dist/ssr'


export default function Home() {
  return (
    <div className='max-w-screen-2xl mx-auto'>
      <div className="flex max-h-max shadow-xl justify-between bg-gradient-to-r from-[#1B7996] via-[#569AB7] to-[#9CC5D0]">
        <div className='p-10 m-auto'>
          <h1 className="font-bold text-white text-6xl">
            Neuron Sportify 
          </h1>
            <p className="text-2xl text-white font-sans">
              Jadikan Olahragamu semakin mudah dan menyenangkan!
            </p>
        </div>
        <div>
            <Image className=' col-auto' src={'/ring-basket.png'} alt='ringbasket' width={500} height={500}></Image>
        </div>
      </div>
      <div className='flex p-6 gap-5 -mt-24 justify-center'>
        <form className='p-10 w-max rounded-sm'>
          <div className=' flex bg-white p-8 rounded-lg shadow-xl gap-10 xl:gap-28'>
            <div className='rounded-lg flex'>
            <Image className=' bg-[#1B7996] w-max p-8 rounded-lg' src={'/v-lokasi.png'} alt={'lokasi'} width={60} height={60}></Image>
              <div className='p-3'>
                <p className='font-semibold text-xl'>Lokasi</p>
                <select required>
                  <option disabled selected hidden>Pilih Kota</option>
                  <option>Bandung</option>
                  <option>Jakarta</option>
                  <option>Surabaya</option>
                </select>
              </div>
            </div>
            <div className='rounded-lg flex'>
              <Image className=' bg-[#1B7996] w-max p-8 rounded-lg' src={'/v-caraga.png'} alt={'cabang'} width={65} height={65}></Image>
              <div className='p-3 '>
                <p className='font-semibold text-xl'>Cabang</p>
                <select required>
                  <option disabled selected hidden>Temukan cabang olahraga</option>
                  <option>Badminton</option>
                  <option>Sepak Bola</option>
                  <option>Tenis</option>
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
        <div className="p-14 ml-2">
            <div className='flex justify-between'>
              <div className='flex-row p-10 font-normal'>
                <h1 className="text-xl xl:text-5xl font-normal">
                   Kelola venue lebih
                   <div className=''>
                    <p className=' text-xl xl:text-5xl text-[#45A8AE] font-sans font-normal'>praktis&nbsp;</p>
                    <p className=' text-xl xl:text-5xl text-black font-sans font-normal'>dan&nbsp;</p>
                    <p className=' text-xl xl:text-5xl text-[#45A8AE] font-sans font-normal'>menguntungkan.</p>
                    </div>
                </h1>
                <p className="text-xl my-2 font-sans font-4xl">
                    Daftarkan venue Anda Sekarang!
                </p>
                <button className=" p-3 bg-[#45A8AE] rounded-xl hover:bg-blue-100 text-white hover:text-blue-300">
                    <Link href={'/venue'}>Daftarkan Venue</Link>
                </button>
              </div>
              <div className='flex'>
                <div>
                  <Image className='p-1' src={'/gm-bola.png'} alt={'lapang-bola'} width={150} height={100}/>
                  <Image className='p-1' src={'/gm-bultang.png'} alt={'lapang-bola'} width={150} height={100}/>
                </div>
                <div>
                  <Image className='p-1' src={'/gm-basket.png'} alt={'lapang-bola'} width={150} height={100}/>
                  <Image className='p-1' src={'/gm-baseball.png'} alt={'lapang-bola'} width={150} height={100}/>
                </div>
              </div>
            </div>
            <div className='p-10'>
                <p className="mt-10 text-xl font-bold">
                    Kenapa Harus Neuron Sportify?
                </p>
                <p className="font-bold text-xl">
                    Rasakan kemudahan  Booking Online Aplikasi Neuron Sportify!
                </p>
            </div>
            <div className='flex justify-between p-6'>
              <div className='flex flex-col m-auto'>
                <Image className='m-auto' src={'/img-kemudahan-akses.png'} alt={'mudah'} width={100} height={100}/>
                <p className='m-auto text-[#1B7996] p-3'>Kemudahan Akses</p>
              </div>
              <div className='flex flex-col m-auto'>
                <Image className='m-auto' src={'/img-keterjangkauan.png'} alt={'mudah'} width={100} height={100}/>
                <p className='m-auto text-[#1B7996] p-3'>Keterejangkauan</p>
              </div>
              <div className='flex flex-col m-auto'>
                <Image className='m-auto' src={'/img-tranparansi.png'} alt={'mudah'} width={100} height={100}/>
                <p className='m-auto text-[#1B7996] p-3'>Tranparansi</p>
              </div>
              <div className='flex flex-col m-auto'>
                <Image className='m-auto' src={'/img-efisiensi-akurasi.png'} alt={'mudah'} width={100} height={100}/>
                <p className='m-auto text-[#1B7996] p-3'>Efisiensi & Akurasi</p>
              </div>    
            </div>
            <div className='p-10'>
              <p className='font-semibold font-sans text-3xl'>Rekomendasi untuk kamu!</p>
              <p className='font-medium font-sans text-xl'>Rekomendasi tempat dengan harga murah!</p>
            </div>
            <div className='flex flex-col max-w-screen-2xl m-auto items-center'>
              <div className='flex gap-6'>
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
              </div>
              
              
            </div>
        </div>
    </div>
  )
}
