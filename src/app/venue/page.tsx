"use client";
import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import Hamburger from 'hamburger-react'
import MyModal from '@/components/Model';

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
          <div className=''>
            <p className='font-sans font-semibold text-[48px]'>JS Sport Hall</p>
            <div className='flex flex-row'>
              <svg className='mr-2' xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#00000" viewBox="0 0 256 256"><path d="M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z"></path></svg>
              <p>Kabupaten Bandung, Jawa Barat</p>
              <div className='mx-2 w-[2px] h-[24px] bg-slate-400'></div>
              <div className='w-[22px] h-[22px] mx-2 bg-cover bg-no-repeat bg-[url("/Vectorbola-img.svg")]'></div>
              <p>Futsal</p>
              <div className='w-[22px] h-[22px] mx-2 bg-cover bg-no-repeat bg-[url("/Vectorbultang-img.svg")]'></div>
              <p>Badminton</p>
            </div>

            <div className='flex p-6 w-full'>
              <div className='flex w-8/12 gap-1'>
                <div className='w-[295px] h-[413px] bg-cover bg-no-repeat bg-[url("/dv-lapangan.svg")]'></div>
                <div className='grid grid-cols-2 gap-1'>
                  <div className='w-[200px] h-[205px] bg-cover bg-no-repeat bg-[url("/dv-futsal.svg")]'></div>
                  <div className='w-[200px] h-[205px] bg-cover bg-no-repeat bg-[url("/dv-futsal2.svg")]'></div>
                  <div className='w-[200px] h-[205px] bg-cover bg-no-repeat bg-[url("/dv-futsal3.svg")]'></div>
                  <div className='bg-cover brightness-50'>
                    <div className='w-[200px] h-[205px] bg-cover bg-no-repeat bg-[url("/dv-lapangan2.svg")]'></div>
                  </div>

                </div>
              </div>
              <div className='w-[350px] p-4 bg-white'>
                <div className='flex flex-col w-[350px] h-[205px] p-6 border rounded-[10px]'>
                  <p className='w-full text-[20px] font-medium'>Mulai dari</p>
                  <p className='w-full text-[26px] font-semibold'>Rp.100.000,-/jam</p>
                  <Link className='w-[305] h-[51px] text-[18px] mt-6 hover:bg-slate-400 bg-[#1B7996] p-3 text-white rounded-[10px] text-center' href={'/'}>Cek Ketersediaan</Link>
                </div>
              </div>

            </div>
          </div>

          <div className='w-full'>
            <div className='border-b p-6'>
              <p className='text-[35px] font-semibold'>Detail</p>
            </div>
            <div className='w-full flex flex-row mt-6'>
              <div className='w-1/2'>
                <img className='' width={527} height={396} src={'/img-dv-map.svg'}></img>
              </div>

              <div className='flex flex-col w-1/2 m-auto'>
                <p className='text-[25px] font-semibold'>Alamat</p>
                <p className='w-[310px] mt-4 text-[20px]'>Kompleks Graha Puspa Jl. Sersan Bajuri KM 4,5 Kec.Pangpong, Kab.Bandung Jawa Barat</p>
                <p className='text-[25px] my-4 font-semibold'>Fasilitas</p>
                <div className=''>
                  <ul className='grid grid-cols-2 text-[20px]'>
                    <div className='flex flex-row'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#00000" viewBox="0 0 256 256"><path d="M72,88V40a8,8,0,0,1,16,0V88a8,8,0,0,1-16,0ZM216,40V224a8,8,0,0,1-16,0V176H152a8,8,0,0,1-8-8,268.75,268.75,0,0,1,7.22-56.88c9.78-40.49,28.32-67.63,53.63-78.47A8,8,0,0,1,216,40ZM200,53.9c-32.17,24.57-38.47,84.42-39.7,106.1H200ZM119.89,38.69a8,8,0,1,0-15.78,2.63L112,88.63a32,32,0,0,1-64,0l7.88-47.31a8,8,0,1,0-15.78-2.63l-8,48A8.17,8.17,0,0,0,32,88a48.07,48.07,0,0,0,40,47.32V224a8,8,0,0,0,16,0V135.32A48.07,48.07,0,0,0,128,88a8.17,8.17,0,0,0-.11-1.31Z"></path></svg>
                      <p className='mx-4'>Cafe & Resto</p>
                    </div>
                    <div className='flex flex-row'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 256 256"><path d="M80,56V24a8,8,0,0,1,16,0V56a8,8,0,0,1-16,0Zm40,8a8,8,0,0,0,8-8V24a8,8,0,0,0-16,0V56A8,8,0,0,0,120,64Zm32,0a8,8,0,0,0,8-8V24a8,8,0,0,0-16,0V56A8,8,0,0,0,152,64Zm96,56v8a40,40,0,0,1-37.51,39.91,96.59,96.59,0,0,1-27,40.09H208a8,8,0,0,1,0,16H32a8,8,0,0,1,0-16H56.54A96.3,96.3,0,0,1,24,136V88a8,8,0,0,1,8-8H208A40,40,0,0,1,248,120ZM200,96H40v40a80.27,80.27,0,0,0,45.12,72h69.76A80.27,80.27,0,0,0,200,136Zm32,24a24,24,0,0,0-16-22.62V136a95.78,95.78,0,0,1-1.2,15A24,24,0,0,0,232,128Z"></path></svg>
                      <p className='mx-4'>Jual Minuman</p>
                    </div>
                    <div className='flex flex-row'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 256 256"><path d="M64,236a12,12,0,1,1-12-12A12,12,0,0,1,64,236Zm20-44a12,12,0,1,0,12,12A12,12,0,0,0,84,192Zm-64,0a12,12,0,1,0,12,12A12,12,0,0,0,20,192Zm32-32a12,12,0,1,0,12,12A12,12,0,0,0,52,160ZM256,40a8,8,0,0,1-8,8H219.31L191.46,75.86,169.8,202.65a16,16,0,0,1-27.09,8.66l-98-98a16,16,0,0,1,8.69-27.1L180.14,64.54,208,36.69A15.86,15.86,0,0,1,219.31,32H248A8,8,0,0,1,256,40ZM174.21,81.79,56,102l98,98Z"></path></svg>
                      <p className='mx-4'>Hot Shower</p>
                    </div>
                    <div className='flex flex-row'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 256 256"><path d="M224,128a23.84,23.84,0,0,0-8,1.38V128c0-41.78-31.07-62.46-53.76-77.56C148.16,41.06,136,33,136,24a8,8,0,0,0-16,0c0,9-12.16,17.06-26.24,26.44C71.07,65.54,40,86.22,40,128v1.38A24,24,0,0,0,8,152v56a8,8,0,0,0,8,8H80a8,8,0,0,0,8-8V176a8,8,0,0,1,16,0v32a8,8,0,0,0,8,8h32a8,8,0,0,0,8-8V176a8,8,0,0,1,16,0v32a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V152A24,24,0,0,0,224,128ZM102.63,63.76c9.67-6.44,19-12.68,25.37-20,6.34,7.35,15.7,13.59,25.37,20,20,13.32,42.48,28.29,46.11,56.24h-143C60.15,92.05,82.6,77.08,102.63,63.76ZM24,152a8,8,0,0,1,16,0v48H24Zm136,0a24,24,0,0,0-24,24v24H120V176a24,24,0,0,0-48,0v24H56V136H200v64H184V176A24,24,0,0,0,160,152Zm72,48H216V152a8,8,0,0,1,16,0Z"></path></svg>
                      <p className='mx-4'>Musholla</p>
                    </div>
                    <div className='flex flex-row'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 256 256"><path d="M224,104h-8.37a88,88,0,0,0-175.26,0H32a8,8,0,0,0-8,8,104.35,104.35,0,0,0,56,92.28V208a16,16,0,0,0,16,16h64a16,16,0,0,0,16-16v-3.72A104.35,104.35,0,0,0,232,112,8,8,0,0,0,224,104Zm-24.46,0H148.12a71.84,71.84,0,0,1,41.27-29.57A71.45,71.45,0,0,1,199.54,104ZM173.48,56.23q2.75,2.25,5.27,4.75a87.92,87.92,0,0,0-49.15,43H100.1A72.26,72.26,0,0,1,168,56C169.83,56,171.66,56.09,173.48,56.23ZM128,40a71.87,71.87,0,0,1,19,2.57A88.36,88.36,0,0,0,83.33,104H56.46A72.08,72.08,0,0,1,128,40Zm36.66,152A8,8,0,0,0,160,199.3V208H96v-8.7A8,8,0,0,0,91.34,192a88.29,88.29,0,0,1-51-72H215.63A88.29,88.29,0,0,1,164.66,192Z"></path></svg>
                      <p className='mx-4'>Jual Makanan Ringan</p>
                    </div>
                    <div className='flex flex-row'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 256 256"><path d="M240,112H229.2L201.42,49.5A16,16,0,0,0,186.8,40H69.2a16,16,0,0,0-14.62,9.5L26.8,112H16a8,8,0,0,0,0,16h8v80a16,16,0,0,0,16,16H64a16,16,0,0,0,16-16V192h96v16a16,16,0,0,0,16,16h24a16,16,0,0,0,16-16V128h8a8,8,0,0,0,0-16ZM69.2,56H186.8l24.89,56H44.31ZM64,208H40V192H64Zm128,0V192h24v16Zm24-32H40V128H216ZM56,152a8,8,0,0,1,8-8H80a8,8,0,0,1,0,16H64A8,8,0,0,1,56,152Zm112,0a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H176A8,8,0,0,1,168,152Z"></path></svg>
                      <p className='mx-4'>Parkir Mobil</p>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className='w-full'>
            <div className='border-b p-6'>
              <p className='text-[35px] font-semibold'>Pilih Lapangan</p>
            </div>
            <div className='w-full flex flex-row mt-6'>
              <div className='w-[1075px] h-[115px] mx-auto bg-white rounded-lg border shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] p-6 flex gap-14 items-center justify-between'>
                <div className='flex items-center gap-12'>

                  <div className='flex flex-row gap-6 items-center'>
                    <div className='p-1'>
                      <p className='text-[20px] text-[#7C7C7C]'>Minggu</p>
                      <p className='text-[25px] text-[#7C7C7C] font-semibold'>1 Okt</p>
                    </div>
                    <div className='p-1'>
                      <p className='text-[20px] text-[#7C7C7C]'>Senin</p>
                      <p className='text-[25px] text-[#7C7C7C] font-semibold'>2 Okt</p>
                    </div>
                    <div className='p-1'>
                      <p className='text-[20px] text-[#7C7C7C]'>Selasa</p>
                      <p className='text-[25px] text-[#7C7C7C] font-semibold'>3 Okt</p>
                    </div>
                    <div className='p-1'>
                      <p className='text-[20px] text-[#7C7C7C]'>Rabu</p>
                      <p className='text-[25px] text-[#7C7C7C] font-semibold'>4 Okt</p>
                    </div>
                    <div className='p-1'>
                      <p className='text-[20px] text-[#7C7C7C]'>Kamis</p>
                      <p className='text-[25px] text-[#7C7C7C] font-semibold'>5 Okt</p>
                    </div>
                    <div className='bg-[#1B7996] p-1 rounded-[5px]'>
                      <p className='text-[20px] text-[#ffffff]'>Jum'at</p>
                      <p className='text-[25px] text-[#ffffff] font-semibold'>6 Okt</p>
                    </div>
                    <div className='p-1'>
                      <p className='text-[20px] text-[#7C7C7C]'>Senin</p>
                      <p className='text-[25px] text-[#7C7C7C] font-semibold'>7 Okt</p>
                    </div>
                    <div className='w-[2px] h-[40px] bg-[#7C7C7C70]'></div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" viewBox="0 0 256 256"><path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-96-88v64a8,8,0,0,1-16,0V132.94l-4.42,2.22a8,8,0,0,1-7.16-14.32l16-8A8,8,0,0,1,112,120Zm59.16,30.45L152,176h16a8,8,0,0,1,0,16H136a8,8,0,0,1-6.4-12.8l28.78-38.37A8,8,0,1,0,145.07,132a8,8,0,1,1-13.85-8A24,24,0,0,1,176,136,23.76,23.76,0,0,1,171.16,150.45Z"></path></svg>
                    <button className='w-[123px] h-[44px] bg-white shadow-lg border hover:bg-black'>Filter waktu</button>
                    <select className='w-[110px] h-[44px] bg-white shadow-lg p-1 border'>
                      <option hidden className='text-center '>Cabor</option>
                      <option value="">Badminton</option>
                      <option value="">Sepak bola</option>
                      <option value="">Tenis</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="join">
              <input className="join-item btn hover:bg-[#1B7996]" type="radio" name="options" aria-label='1 Okt'></input>
              <input className="join-item btn" type="radio" name="options" aria-label="2 Okt" />
              <input className="join-item btn" type="radio" name="options" aria-label="3 Okt" />
            </div> */}
            <div className='w-full h-1/2 mt-6'>
              <div className='flex flex-row p-10 w-full h-max border-b'>
                <div className='w-[450px] h-[275px] mx-auto bg-cover bg-no-repeat bg-[url("/pl-futsal.svg")]'></div>
                <div className='w-[2px] h-[600px] mx-auto bg-[#7C7C7C70]'></div>
                <div className='flex flex-col w-1/2 mx-auto'>
                  <div className='flex my-6'>
                    <div className='w-[22px] h-[22px] mr-2 bg-cover bg-no-repeat bg-[url("/Vectorbola-img.svg")]'></div>
                    <p className='text-[18px]'>Futsal</p>
                  </div>
                  <p className='text-[35px] font-semibold'>JS Sport Hall Futsal</p>
                  <p className='mt-4 text-[25px]'>Lapangan Futsal Interlock Standar Internasional</p>
                  <p className='my-4 text-[25px]'>Futsal-Interlock-Indoor</p>

                  <details className="dropdown h-max ">
                    <summary className="m-1 btn text-white bg-[#1B7996]">4 Jadwal Tersedia
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm45.66-109.66a8,8,0,0,1,0,11.32l-40,40a8,8,0,0,1-11.32,0l-40-40a8,8,0,0,1,11.32-11.32L128,140.69l34.34-34.35A8,8,0,0,1,173.66,106.34Z"></path></svg>
                    </summary>
                    <ul className="p-2 bg-white grid grid-cols-3 gap-6 w-full dropdown-content z-[1]">
                      <div className='w-[160px] h-[75px] bg-white border rounded-[10px] p-2'>
                        <p className='text-[20px] text-[#000000] text-center font-semibold'>13:00 - 14:00</p>
                        <p className='text-[15px] text-[#000000] text-center font-normal'>Rp.125.000</p>
                      </div>
                      <div className='w-[160px] h-[75px] bg-white border rounded-[10px] p-2'>
                        <p className='text-[20px] text-[#000000] text-center font-semibold'>13:00 - 14:00</p>
                        <p className='text-[15px] text-[#000000] text-center font-normal'>Rp.125.000</p>
                      </div>
                      <div className='w-[160px] h-[75px] bg-white border rounded-[10px] p-2'>
                        <p className='text-[20px] text-[#000000] text-center font-semibold'>13:00 - 14:00</p>
                        <p className='text-[15px] text-[#000000] text-center font-normal'>Rp.125.000</p>
                      </div>
                      <div className='w-[160px] h-[75px] bg-white border rounded-[10px] p-2'>
                        <p className='text-[20px] text-[#000000] text-center font-semibold'>13:00 - 14:00</p>
                        <p className='text-[15px] text-[#000000] text-center font-normal'>Rp.125.000</p>
                      </div>
                      <div className='w-[160px] h-[75px] bg-white border rounded-[10px] p-2'>
                        <p className='text-[20px] text-[#000000] text-center font-semibold'>13:00 - 14:00</p>
                        <p className='text-[15px] text-[#000000] text-center font-normal'>Rp.125.000</p>
                      </div>
                      <div className='w-[160px] h-[75px] bg-white border rounded-[10px] p-2'>
                        <p className='text-[20px] text-[#000000] text-center font-semibold'>13:00 - 14:00</p>
                        <p className='text-[15px] text-[#000000] text-center font-normal'>Rp.125.000</p>
                      </div>
                      <MyModal />
                    </ul>
                  </details>
                </div>
              </div>

              <div className='flex flex-row p-10'>
                <div className='w-[450px] h-[275px] mx-auto bg-cover bg-no-repeat bg-[url("/pl-badminton.svg")]'></div>
                <div className='w-[2px] h-[600px] mx-auto bg-[#7C7C7C70]'></div>
                <div className='flex flex-col w-1/2 mx-auto'>
                  <div className='flex my-6'>
                    <div className='w-[22px] h-[22px] mr-2 bg-cover bg-no-repeat bg-[url("/Vectorbola-img.svg")]'></div>
                    <p className='text-[18px]'>Badminton</p>
                  </div>
                  <p className='text-[35px] font-semibold'>JS Sport Hall Futsal</p>
                  <p className='mt-4 text-[25px]'>Lapangan Bulutangkis Standar Internasional</p>
                  <p className='my-4 text-[25px]'>Badminton-Vinly-Indoor</p>

                  <details className="dropdown">
                    <summary className="m-1 btn text-white bg-[#1B7996]">4 Jadwal Tersedia
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm45.66-109.66a8,8,0,0,1,0,11.32l-40,40a8,8,0,0,1-11.32,0l-40-40a8,8,0,0,1,11.32-11.32L128,140.69l34.34-34.35A8,8,0,0,1,173.66,106.34Z"></path></svg>
                    </summary>
                    <ul className="p-2 grid grid-cols-3 gap-6 w-full dropdown-content z-[1]">
                      <div className='w-[160px] h-[75px] bg-white border rounded-[10px] p-2'>
                        <p className='text-[20px] text-[#000000] text-center font-semibold'>13:00 - 14:00</p>
                        <p className='text-[15px] text-[#000000] text-center font-normal'>Rp.125.000</p>
                      </div>
                      <div className='w-[160px] h-[75px] bg-white border rounded-[10px] p-2'>
                        <p className='text-[20px] text-[#000000] text-center font-semibold'>13:00 - 14:00</p>
                        <p className='text-[15px] text-[#000000] text-center font-normal'>Rp.125.000</p>
                      </div>
                      <div className='w-[160px] h-[75px] bg-white border rounded-[10px] p-2'>
                        <p className='text-[20px] text-[#000000] text-center font-semibold'>13:00 - 14:00</p>
                        <p className='text-[15px] text-[#000000] text-center font-normal'>Rp.125.000</p>
                      </div>
                      <div className='w-[160px] h-[75px] bg-white border rounded-[10px] p-2'>
                        <p className='text-[20px] text-[#000000] text-center font-semibold'>13:00 - 14:00</p>
                        <p className='text-[15px] text-[#000000] text-center font-normal'>Rp.125.000</p>
                      </div>
                      <div className='w-[160px] h-[75px] bg-white border rounded-[10px] p-2'>
                        <p className='text-[20px] text-[#000000] text-center font-semibold'>13:00 - 14:00</p>
                        <p className='text-[15px] text-[#000000] text-center font-normal'>Rp.125.000</p>
                      </div>
                      <div className='w-[160px] h-[75px] bg-white border rounded-[10px] p-2'>
                        <p className='text-[20px] text-[#000000] text-center font-semibold'>13:00 - 14:00</p>
                        <p className='text-[15px] text-[#000000] text-center font-normal'>Rp.125.000</p>
                      </div>
                      <MyModal />

                    </ul>
                  </details>
                </div>
              </div>

            </div>


          </div>

        </div>
      </div>
    </div>
  )
}

export default Venue