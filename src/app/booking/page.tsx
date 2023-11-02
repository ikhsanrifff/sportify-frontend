"use client";
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FunnelSimple } from '@phosphor-icons/react/dist/ssr/FunnelSimple'
import { useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight } from '@phosphor-icons/react'

const Booking = () => {
  const CAROUSEL_DATA = [
    {
      text: "First",
      contents: [
        {
          name: "Sepakbola",
          className: "bg-[url('/bola.jpeg')]",
        },
        {
          name: "Badminton",
          className: "bg-[url('/badminton.jpeg')]",
        },
        {
          name: "Basket",
          className: "bg-[url('/basket.jpeg')]",
        },
      ],
    },
    {
      text: "Second",
      contents: [
        {
          name: "Sepakbola",
          className: "bg-[url('/bola.jpeg')]",
        },
        {

          name: "Badminton",
          className: "bg-[url('/badminton.jpeg')]",
        },
        {
          name: "Basket",
          className: "bg-[url('/basket.jpeg')]",
        },
      ],
    },
    {
      text: "Third",
      contents: [
        {
          name: "Sepakbola",
          className: "bg-[url('/bola.jpeg')]",
        },
        {
          name: "Badminton",
          className: "bg-[url('/badminton.jpeg')]",
        },
        {
          name: "Basket",
          className: "bg-[url('/basket.jpeg')]",
        },
      ],
    },
  ];

  const [carouselIndex, setCarouselIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCarouselIndex(carouselIndex === 2 ? 0 : carouselIndex + 1);
    }, 5000);

    return () => {
      clearInterval(id);
    };
  }, [carouselIndex]);

  
  return (
    <>
      <div className="mx-auto max-w-screen-2xl">
        <div className="w-full h-4/6">
          <div className='w-full absolute bg-cover h-[299px] brightness-75 bg-[url("/bg-booking.svg")]'></div>
          <p className="p-24 text-3xl xl:text-[40px] text-white font-bold text-center backdrop-brightness-100">
            BOOKING LAPANGAN ONLINE
          </p><Link className=" flex -m-14 w-auto" href={"/venue"}>
            <button className="flex bg-[#E8F703] backdrop-brightness-100 m-auto hover:bg-black text-black hover:text-[#E8F703] p-4 gap-4 rounded-md text-[19px] font-semibold">
              Booking Lapangan
              <Link className='m-auto' href={'/venue'}>
                <ArrowRight
                  size={32}
                  weight="bold"
                  className="m-auto"
                />
              </Link>
            </button>
          </Link>
        </div>



        <div className=" max-w-screen bg-white">
          <p className=" mt-48 text-center text-lg xl:text-[30px] font-medium">CABANG OLAHRAGA</p>
          <div className="relative mt-16">
            <button
              onClick={() =>
                setCarouselIndex(carouselIndex === 0 ? 2 : carouselIndex - 1)
              }
              className="absolute top-1/2 left-2 xl:left-5"
            >
              <ArrowLeft
                size={32}
                weight="bold"
                className="bg-white w-12 h-12 rounded-full p-2 shadow-sm hover:shadow-xl border border-[#7c7c7c50]"
              />
            </button>
            <button
              onClick={() =>
                setCarouselIndex(carouselIndex === 2 ? 0 : carouselIndex + 1)
              }
              className="absolute top-1/2 right-2 xl:right-5"
            >
              <ArrowRight
                size={32}
                weight="bold"
                className="bg-white w-12 h-12 rounded-full p-2 shadow-sm hover:shadow-xl border border-[#7c7c7c50]"
              />
            </button>
            <div className="px-32 h-[13rem] w-10/12 mx-auto flex items-center relative overflow-hidden">
              {CAROUSEL_DATA.map((data, index) => {
                let className = "translate-x-full opacity-0";

                if (index === carouselIndex) {
                  className = "translate-x-0 opacity-100";
                }
                if (
                  index === carouselIndex - 1 ||
                  (index === 2 && carouselIndex === 0)
                ) {
                  className = "-translate-x-full opacity-0";
                }

                
                return (
                  <div
                    key={data.text}
                    className={`absolute inset-0 ${className} grid grid-cols-3 gap-16 duration-300 ease-linear`}
                  >
                    {data.contents.map((content) => (
                      <div
                        className={`${content.className} bg-cover bg-no-repeat relative flex items-center justify-center text-white text-xl`}
                        key={content.name}
                      >
                        <div className="absolute inset-0 bg-black/50"></div>
                        <span className="z-10 text-[30px]">{content.name}</span>
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex justify-center gap-3 p-6 my-8">
            <button
              onClick={() => setCarouselIndex(0)}
              className={`w-3 h-3 rounded-full ${carouselIndex === 0 ? "bg-[#1B7996]" : "bg-[#7c7c7c50]"
                }`}
            ></button>
            <button
              onClick={() => setCarouselIndex(1)}
              className={`w-3 h-3 rounded-full ${carouselIndex === 1 ? "bg-[#1B7996]" : "bg-[#7c7c7c50]"
                }`}
            ></button>
            <button
              onClick={() => setCarouselIndex(2)}
              className={`w-3 h-3 rounded-full ${carouselIndex === 2 ? "bg-[#1B7996]" : "bg-[#7c7c7c50]"
                }`}
            ></button>
          </div>
        </div>

        <div className='flex flex-col p-10 max-w-screen-2xl bg-[#1B7996]'>
          <div className="flex-row gap-6 mx-16 max-w-screen-2x">
            <h3 className="text-white p-6 text-4xl font-semibold">CARI VENUE</h3>
            <div className="flex gap-6 max-w-screen-2xl">
              <div className="gap-5 my-auto items-center">
                <div className="flex p-6 gap-4 items-center">
                  <input className='rounded-lg p-4 w-max h-max text-lg' placeholder='Nama Venue'></input>
                  <input className='rounded-lg p-4 w-max h-max text-lg' placeholder='Pilih Kota'></input>
                  <input className='rounded-lg p-4 w-max h-max text-lg' placeholder='Pilih Cabor'></input>
                </div>
              </div>
              <div className=" flex gap-3 items-center">
                <button
                  className="bg-white p-2 rounded-xl font-extrabold text-2xl hover:bg-black hover:text-white"
                  name="searchbar"
                >
                  <FunnelSimple size={35} color="#000000" />
                </button>
                <button className="bg-white p-3 rounded-xl font-extrabold hover:bg-black hover:text-white">
                  Cari Venue
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col max-w-screen-2xl m-auto p-16">
          <p className="text-[25px] font-semibold my-6">Available 12 venue</p>
          <div className="grid grid-cols-4 gap-6 max-w-screen-2xl m-auto">
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
          <div className='flex my-6 justify-between'>
            <p className='text-xl font-semibold'>Showing 1 to 100 of 180 Entries</p>
            <div>
              <div className='gap-3 w-max h-max'>
                <ul className='flex flex-row gap-6'>
                    <li className=' bg-[#144959] w-[40px] h-[40px] border rounded-full font-sans text-[20px] text-white text-center'>1</li>
                    <li className='bg-white w-[40px] h-[40px] border rounded-full font-sans text-[20px] text-center'>2</li>
                    <li className='bg-white w-[40px] h-[40px] border rounded-full font-sans text-[20px] text-center'>3</li>
                    <li className='bg-white w-[60px] h-[40px] border rounded-full font-sans text-[20px] text-center'>more</li>
                </ul>

              </div>
            </div>
          </div>
        </div>
      </div>

    </>

  );
};

export default Booking;
