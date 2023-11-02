import Image from 'next/image'
import Link from 'next/link'


export default function Home() {
  return (
    <div className='max-w-screen-2xl mx-auto'>
      <div className="flex max-w-screen-2xl h-max shadow-xl justify-between  bg-gradient-to-r from-[#1B7996] via-[#569AB7] to-[#9CC5D0]">
        <div className='m-16'>
          <h1 className="font-semibold text-white text-[75px] font-sans my-10 xl:text-[70px]">
            Neuron Sportify
          </h1>
          <div className='my-10'>
            <p className="text-sm xl:text-[30px] text-white font-sans">
              Jadikan Olahragamu semakin
            </p>
            <p className="text-sm xl:text-[30px] text-white font-sans my-2">
              mudah dan menyenangkan!
            </p>
          </div>
        </div>
        <div className='w-3/6 h-6/6 -mr-2 bg-no-repeat bg-cover bg-[url("/img-ring-basket.svg")]'>
        </div>
      </div>

      <div className='max-w-screen-2xl -m-14 gap-5 items-center'>
        <form className='m-auto w-min xl:w-max rounded-sm'>
          <div className='flex flex-col mt-10 xl:mt-0 xl:flex-row justify-center bg-white p-6 rounded-xl shadow-xl gap-10 xl:gap-28'>
            <div className='rounded-lg flex bg-white'>
              <div className='bg-[#1B7996] w-[66px] h-[66px] p-4 rounded-lg'>
                <img className='m-auto' src='/v-lokasi.png'></img>
              </div>
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
              <div className='bg-[#1B7996] w-[66px] h-[66px] p-2 rounded-lg'>
                <img className='mx-2 mt-3' src='/v-caraga.png'></img>
              </div>
              <div className='p-3'>
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

        <div className='h-max flex justify-between'>
          <div className='flex-row p-2 xl:p-10 font-normal'>
            <h1 className="text-xl xl:text-[65px] my-6 font-sans font-semibold">
              Kelola venue lebih
              <div className=''>
                <p className=' text-lg xl:text-[65px] my-6 text-[#45A8AE] font-sans font-semibold'>praktis&nbsp;</p>
                <p className=' text-lg xl:text-[65px] my-6 text-black font-sans font-semibold'>dan&nbsp;</p>
                <p className=' text-lg xl:text-[65px] my-6 text-[#45A8AE] font-sans font-semibold'>menguntungkan.</p>
              </div>
            </h1>
            <p className="text-sm xl:text-[28px] my-8 font-sans font-normal">
              Daftarkan venue Anda Sekarang!
            </p>
            <button className="p-2 xl:p-4 text-sm font-normal xl:text-[22px] bg-[#1B7996] rounded-xl hover:bg-blue-100 text-white hover:text-blue-300">
              <Link href={'/venue'}>Daftarkan Venue</Link>
            </button>
          </div>
          <div className='flex m-6 gap-6 flex-row h-7/12 w-4/12'>
            <div className='w-6/12'>
              <div className='h-4/5  m-2 rounded-lg bg-no-repeat bg-[url("/gm-bola.png")]'></div>
              <div className='h-full m-2 rounded-lg w-full bg-no-repeat bg-[url("/gm-bultang.png")]'></div>
            </div>
            <div className='w-6/12'>
              <div className='h-3/5 m-2 rounded-lg bg-no-repeat bg-[url("/gm-basket.png")]'></div>
              <div className='h-full m-2 rounded-lg w-full bg-no-repeat bg-[url("/gm-baseball.png")]'></div>
            </div>
          </div>
        </div>

        <div className='p-3 xl:p-10'>
          <p className="my-8 text-sm xl:text-[45px] font-medium">
            Kenapa Harus Neuron Sportify?
          </p>
          <p className="font-normal text-sm xl:text-[25px]">
            Rasakan kemudahan  Booking Online Aplikasi Neuron Sportify!
          </p>
        </div>

        <div className='flex justify-between p-1 xl:p-6'>
          <div className='w-max h-max flex flex-col m-auto'>
            <div className='w-[80px] h-[80px] m-auto bg-[url("/img-kemudahan-akses.svg")]'></div>
            <p className='m-auto text-[#1B7996] text-xs xl:text-[25px] p-6'>Kemudahan Akses</p>
          </div>
          <div className='w-max h-max flex flex-col m-auto'>
            <div className='w-[90px] h-[90px] m-auto bg-[url("/img-keterejangkauan.svg")]'></div>
            <p className='m-auto text-[#1B7996] text-xs xl:text-[25px] p-6'>Keterejangkauan</p>
          </div>
          <div className='w-max h-max flex flex-col m-auto'>
            <div className='w-[80px] h-[80px] m-auto bg-[url("/img-transparansi.svg")]'></div>
            <p className='m-auto text-[#1B7996] text-xs xl:text-[25px] p-6'>Tranparansi</p>
          </div>
          <div className='w-max h-max flex flex-col m-auto'>
            <div className='w-[90px] h-[90px] m-auto bg-[url("/img-efisiensi-akurasi.svg")]'></div>
            <p className='m-auto text-[#1B7996] text-xs xl:text-[25px] p-6'>Efisiensi & Akurasi</p>
          </div>
        </div>

        <div className='m-10'>
          <p className='font-semibold font-sans text-lg xl:text-3xl'>Rekomendasi untuk kamu!</p>
          <p className='font-medium font-sans  xl:text-xl'>Rekomendasi tempat dengan harga murah!</p>
        </div>

        <div className='max-w-screen-2xl m-auto items-center'>
          <div className='grid grid-cols-2 xl:grid-cols-4 gap-6'>

            <div className="h-max bg-white w-max border shadow-none hover:shadow-2xl rounded-xl">
              <div className="w-6/6 h-6/6">
                <div className='h-52 w-12/12 rounded-t-xl bg-cover bg-[url("/img-js-sport-hall.png")]'>
                </div>
                <div className="p-3 font-sans">
                  <p className="text-lg p-3 text-gray-500">Venue</p>
                  <p className=" font-bold text-2xl p-2">JS Sports Hall</p>
                  <p className="text-xl p-2 text-gray-500">Kab.Bandung</p>
                  <div className="flex gap-1 ml-2 m-auto">
                    <Image
                      src={"/Vectorbola-img.svg"}
                      alt={"bola"}
                      width={28}
                      height={0}
                    />
                    <p className="p-1 text-xl my-auto text-gray-500">Futsal</p>
                    <div className="w-[2px] h-[28px] m-2 bg-slate-400"></div>
                    <div className="flex gap-1">
                      <Image
                        src={"/Vectorbultang-img.svg"}
                        alt={"lapang-bola"}
                        width={28}
                        height={0}
                      />
                      <p className="p-1 text-xl m-auto text-gray-500">Badminton</p>
                    </div>
                  </div>
                  <div className="m-auto my-2 w-[260px] h-[2px] bg-slate-400"></div>
                  <div className="p-3">
                    <p className="font-sans text-lg font-normal">Mulai dari </p>
                    <p className="font-sans text-2xl font-semibold">
                      Rp.100.000,-/jam
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-max bg-white w-max border shadow-none hover:shadow-2xl rounded-xl">
              <div className="w-6/6 h-6/6">
                <div className='h-52 w-12/12 rounded-t-xl bg-cover bg-[url("/img-js-sport-hall.png")]'>
                </div>
                <div className="p-3 font-sans">
                  <p className="text-lg p-3 text-gray-500">Venue</p>
                  <p className=" font-bold text-2xl p-2">JS Sports Hall</p>
                  <p className="text-xl p-2 text-gray-500">Kab.Bandung</p>
                  <div className="flex gap-1 ml-2 m-auto">
                    <Image
                      src={"/Vectorbola-img.svg"}
                      alt={"bola"}
                      width={28}
                      height={0}
                    />
                    <p className="p-1 text-xl my-auto text-gray-500">Futsal</p>
                    <div className="w-[2px] h-[28px] m-2 bg-slate-400"></div>
                    <div className="flex gap-1">
                      <Image
                        src={"/Vectorbultang-img.svg"}
                        alt={"lapang-bola"}
                        width={28}
                        height={0}
                      />
                      <p className="p-1 text-xl m-auto text-gray-500">Badminton</p>
                    </div>
                  </div>
                  <div className="m-auto my-2 w-[260px] h-[2px] bg-slate-400"></div>
                  <div className="p-3">
                    <p className="font-sans text-lg font-normal">Mulai dari </p>
                    <p className="font-sans text-2xl font-semibold">
                      Rp.100.000,-/jam
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-max bg-white w-max border shadow-none hover:shadow-2xl rounded-xl">
              <div className="w-6/6 h-6/6">
                <div className='h-52 w-12/12 rounded-t-xl bg-cover bg-[url("/img-js-sport-hall.png")]'>
                </div>
                <div className="p-3 font-sans">
                  <p className="text-lg p-3 text-gray-500">Venue</p>
                  <p className=" font-bold text-2xl p-2">JS Sports Hall</p>
                  <p className="text-xl p-2 text-gray-500">Kab.Bandung</p>
                  <div className="flex gap-1 ml-2 m-auto">
                    <Image
                      src={"/Vectorbola-img.svg"}
                      alt={"bola"}
                      width={28}
                      height={0}
                    />
                    <p className="p-1 text-xl my-auto text-gray-500">Futsal</p>
                    <div className="w-[2px] h-[28px] m-2 bg-slate-400"></div>
                    <div className="flex gap-1">
                      <Image
                        src={"/Vectorbultang-img.svg"}
                        alt={"lapang-bola"}
                        width={28}
                        height={0}
                      />
                      <p className="p-1 text-xl m-auto text-gray-500">Badminton</p>
                    </div>
                  </div>
                  <div className="m-auto my-2 w-[260px] h-[2px] bg-slate-400"></div>
                  <div className="p-3">
                    <p className="font-sans text-lg font-normal">Mulai dari </p>
                    <p className="font-sans text-2xl font-semibold">
                      Rp.100.000,-/jam
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-max bg-white w-max border shadow-none hover:shadow-2xl rounded-xl">
              <div className="w-6/6 h-6/6">
                <div className='h-52 w-12/12 rounded-t-xl bg-cover bg-[url("/img-js-sport-hall.png")]'>
                </div>
                <div className="p-3 font-sans">
                  <p className="text-lg p-3 text-gray-500">Venue</p>
                  <p className=" font-bold text-2xl p-2">JS Sports Hall</p>
                  <p className="text-xl p-2 text-gray-500">Kab.Bandung</p>
                  <div className="flex gap-1 ml-2 m-auto">
                    <Image
                      src={"/Vectorbola-img.svg"}
                      alt={"bola"}
                      width={28}
                      height={0}
                    />
                    <p className="p-1 text-xl my-auto text-gray-500">Futsal</p>
                    <div className="w-[2px] h-[28px] m-2 bg-slate-400"></div>
                    <div className="flex gap-1">
                      <Image
                        src={"/Vectorbultang-img.svg"}
                        alt={"lapang-bola"}
                        width={28}
                        height={0}
                      />
                      <p className="p-1 text-xl m-auto text-gray-500">Badminton</p>
                    </div>
                  </div>
                  <div className="m-auto my-2 w-[260px] h-[2px] bg-slate-400"></div>
                  <div className="p-3">
                    <p className="font-sans text-lg font-normal">Mulai dari </p>
                    <p className="font-sans text-2xl font-semibold">
                      Rp.100.000,-/jam
                    </p>
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
