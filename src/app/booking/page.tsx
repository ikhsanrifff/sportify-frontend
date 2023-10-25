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
          name: "Badminton",
          className: "bg-[url('/badminton.jpeg')]",
        },
        {
          name: "Sepakbola",
          className: "bg-[url('/bola.jpeg')]",
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
          name: "Basket",
          className: "bg-[url('/basket.jpeg')]",
        },
        {
          name: "Sepakbola",
          className: "bg-[url('/bola.jpeg')]",
        },
        {
          name: "Badminton",
          className: "bg-[url('/badminton.jpeg')]",
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
      <div className="flex flex-col m-auto max-w-screen-2xl">
        <div className="flex flex-col max-w-screen-2xl p-10 h-80 bg-cover bg-no-repeat bg-[url('/bg-booking.png')]">
          <p className=" m-auto text-3xl xl:text-5xl text-gray-200 font-bold">
            Booking Lapangan Online
          </p>
          <Link className=" flex m-auto w-auto p-3" href={"/venue"}>
            <button className="flex bg-yellow-400 p-3 gap-4 rounded-md">
              Booking Lapangan
              <Image
                className=" m-auto"
                src={"/panahbooking.png"}
                alt="panah"
                width={20}
                height={20}
              ></Image>
            </button>
          </Link>
        </div>

        <div className=" max-w-screen bg-white">
          <p className="m-6 text-center text-2xl font-bold">CABANG OLAHRAGA</p>
          <div className="relative m-8">
            <button
              onClick={() =>
                setCarouselIndex(carouselIndex === 0 ? 2 : carouselIndex - 1)
              }
              className="absolute top-1/2 left-20"
            >
              <ArrowLeft
                size={32}
                weight="bold"
                className="bg-white w-12 h-12 rounded-full p-2 shadow border border-[#7c7c7c50]"
              />
            </button>
            <button
              onClick={() =>
                setCarouselIndex(carouselIndex === 2 ? 0 : carouselIndex + 1)
              }
              className="absolute top-1/2 right-20"
            >
              <ArrowRight
                size={32}
                weight="bold"
                className="bg-white w-12 h-12 rounded-full p-2 shadow border border-[#7c7c7c50]"
              />
            </button>
            <div className="px-32 h-[16rem] w-3/4 mx-auto flex items-center relative overflow-hidden">
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
                    className={`absolute inset-0 ${className} grid grid-cols-3 gap-8 duration-300 ease-linear`}
                  >
                    {data.contents.map((content) => (
                      <div
                        className={`${content.className} bg-cover bg-no-repeat relative flex items-center justify-center text-white text-xl`}
                        key={content.name}
                      >
                        <div className="absolute inset-0 bg-black/75"></div>
                        <span className="z-10">{content.name}</span>
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

        <div className='flex flex-col p-16 max-w-screen-2xl bg-[#1B7996]'>
          <div className="flex-row gap-6 my-4 max-w-screen-2x">
            <h3 className="text-white p-6 text-4xl">Cari Venue</h3>
            <div className="flex gap-6 max-w-screen-2xl h-52">
              <div className="gap-5 my-auto items-center">
                <div className="flex p-6 gap-4 items-center">
                  <input className='rounded-lg p-3 w-max h-max' placeholder='Nama Venue'></input>
                  <input className='rounded-lg p-3 w-max h-max' placeholder='Pilih Kota'></input>
                  <input className='rounded-lg p-3 w-max h-max' placeholder='Pilih Cabor'></input>
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
          <p className="text-3xl font-semibold my-6">Available 8 venue</p>
          <div className="grid grid-cols-4 gap-6 max-w-screen-2xl m-auto">
            <div className="h-max bg-white w-max shadow-xl rounded-xl">
              <div className="w-max h-max">
                <Image
                  className="rounded-t-xl"
                  src={"/img-js-sport-hall.png"}
                  alt={"lapang-bola"}
                  width={285}
                  height={150}
                />
                <div className="p-3 font-sans">
                  <p className="text-lg p-3">Venue</p>
                  <p className=" font-bold text-3xl p-2">JS Sports Hall</p>
                  <p className="text-xl p-2">Kab.Bandung</p>
                  <div className="flex gap-1 ml-2 m-auto">
                    <Image
                      src={"/Vectorbola-img.svg"}
                      alt={"bola"}
                      width={28}
                      height={0}
                    />
                    <p className="p-1 text-xl my-auto">Futsal</p>
                    <div className="w-[2px] h-[28px] m-2 bg-slate-400"></div>
                    <div className="flex gap-1">
                      <Image
                        src={"/Vectorbultang-img.svg"}
                        alt={"lapang-bola"}
                        width={28}
                        height={0}
                      />
                      <p className="p-1 text-xl m-auto">Badminton</p>
                    </div>
                  </div>
                  <div className="m-auto my-2 w-[260px] h-[2px] bg-slate-400"></div>
                  <div className="p-3">
                    <p className="font-sans text-xl font-normal">Mulai dari </p>
                    <p className="font-sans text-2xl font-semibold">
                      Rp.100.000,-/jam
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="h-max bg-white w-max shadow-xl rounded-xl">
              <div className="w-max h-max">
                <Image
                  className="rounded-t-xl"
                  src={"/img-js-sport-hall.png"}
                  alt={"lapang-bola"}
                  width={285}
                  height={150}
                />
                <div className="p-3 font-sans">
                  <p className="text-lg p-3">Venue</p>
                  <p className=" font-bold text-3xl p-2">JS Sports Hall</p>
                  <p className="text-xl p-2">Kab.Bandung</p>
                  <div className="flex gap-1 ml-2 m-auto">
                    <Image
                      src={"/Vectorbola-img.svg"}
                      alt={"bola"}
                      width={28}
                      height={0}
                    />
                    <p className="p-1 text-xl my-auto">Futsal</p>
                    <div className="w-[2px] h-[28px] m-2 bg-slate-400"></div>
                    <div className="flex gap-1">
                      <Image
                        src={"/Vectorbultang-img.svg"}
                        alt={"lapang-bola"}
                        width={28}
                        height={0}
                      />
                      <p className="p-1 text-xl m-auto">Badminton</p>
                    </div>
                  </div>
                  <div className="m-auto my-2 w-[260px] h-[2px] bg-slate-400"></div>
                  <div className="p-3">
                    <p className="font-sans text-xl font-normal">Mulai dari </p>
                    <p className="font-sans text-2xl font-semibold">
                      Rp.100.000,-/jam
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-max bg-white w-max shadow-xl rounded-xl ">
              <div className="w-max h-max">
                <Image
                  className="rounded-t-xl"
                  src={"/img-js-sport-hall.png"}
                  alt={"lapang-bola"}
                  width={285}
                  height={150}
                />
                <div className="p-3 font-sans">
                  <p className="text-lg p-3">Venue</p>
                  <p className=" font-bold text-3xl p-2">JS Sports Hall</p>
                  <p className="text-xl p-2">Kab.Bandung</p>
                  <div className="flex gap-1 ml-2 m-auto">
                    <Image
                      src={"/Vectorbola-img.svg"}
                      alt={"bola"}
                      width={28}
                      height={0}
                    />
                    <p className="p-1 text-xl my-auto">Futsal</p>
                    <div className="w-[2px] h-[28px] m-2 bg-slate-400"></div>
                    <div className="flex gap-1">
                      <Image
                        src={"/Vectorbultang-img.svg"}
                        alt={"lapang-bola"}
                        width={28}
                        height={0}
                      />
                      <p className="p-1 text-xl m-auto">Badminton</p>
                    </div>
                  </div>
                  <div className="m-auto my-2 w-[260px] h-[2px] bg-slate-400"></div>
                  <div className="p-3">
                    <p className="font-sans text-xl font-normal">Mulai dari </p>
                    <p className="font-sans text-2xl font-semibold">
                      Rp.100.000,-/jam
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-max bg-white w-max shadow-xl rounded-xl ">
              <div className="w-max h-max">
                <Image
                  className="rounded-t-xl"
                  src={"/img-js-sport-hall.png"}
                  alt={"lapang-bola"}
                  width={285}
                  height={150}
                />
                <div className="p-3 font-sans">
                  <p className="text-lg p-3">Venue</p>
                  <p className=" font-bold text-3xl p-2">JS Sports Hall</p>
                  <p className="text-xl p-2">Kab.Bandung</p>
                  <div className="flex gap-1 ml-2 m-auto">
                    <Image
                      src={"/Vectorbola-img.svg"}
                      alt={"bola"}
                      width={28}
                      height={0}
                    />
                    <p className="p-1 text-xl my-auto">Futsal</p>
                    <div className="w-[2px] h-[28px] m-2 bg-slate-400"></div>
                    <div className="flex gap-1">
                      <Image
                        src={"/Vectorbultang-img.svg"}
                        alt={"lapang-bola"}
                        width={28}
                        height={0}
                      />
                      <p className="p-1 text-xl m-auto">Badminton</p>
                    </div>
                  </div>
                  <div className="m-auto my-2 w-[260px] h-[2px] bg-slate-400"></div>
                  <div className="p-3">
                    <p className="font-sans text-xl font-normal">Mulai dari </p>
                    <p className="font-sans text-2xl font-semibold">
                      Rp.100.000,-/jam
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-max bg-white w-max shadow-xl rounded-xl">
              <div className="w-max h-max">
                <Image
                  className="rounded-t-xl"
                  src={"/img-js-sport-hall.png"}
                  alt={"lapang-bola"}
                  width={285}
                  height={150}
                />
                <div className="p-3 font-sans">
                  <p className="text-lg p-3">Venue</p>
                  <p className=" font-bold text-3xl p-2">JS Sports Hall</p>
                  <p className="text-xl p-2">Kab.Bandung</p>
                  <div className="flex gap-1 ml-2 m-auto">
                    <Image
                      src={"/Vectorbola-img.svg"}
                      alt={"bola"}
                      width={28}
                      height={0}
                    />
                    <p className="p-1 text-xl my-auto">Futsal</p>
                    <div className="w-[2px] h-[28px] m-2 bg-slate-400"></div>
                    <div className="flex gap-1">
                      <Image
                        src={"/Vectorbultang-img.svg"}
                        alt={"lapang-bola"}
                        width={28}
                        height={0}
                      />
                      <p className="p-1 text-xl m-auto">Badminton</p>
                    </div>
                  </div>
                  <div className="m-auto my-2 w-[260px] h-[2px] bg-slate-400"></div>
                  <div className="p-3">
                    <p className="font-sans text-xl font-normal">Mulai dari </p>
                    <p className="font-sans text-2xl font-semibold">
                      Rp.100.000,-/jam
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-max bg-white w-max shadow-xl rounded-xl">
              <div className="w-max h-max">
                <Image
                  className="rounded-t-xl"
                  src={"/img-js-sport-hall.png"}
                  alt={"lapang-bola"}
                  width={285}
                  height={150}
                />
                <div className="p-3 font-sans">
                  <p className="text-lg p-3">Venue</p>
                  <p className=" font-bold text-3xl p-2">JS Sports Hall</p>
                  <p className="text-xl p-2">Kab.Bandung</p>
                  <div className="flex gap-1 ml-2 m-auto">
                    <Image
                      src={"/Vectorbola-img.svg"}
                      alt={"bola"}
                      width={28}
                      height={0}
                    />
                    <p className="p-1 text-xl my-auto">Futsal</p>
                    <div className="w-[2px] h-[28px] m-2 bg-slate-400"></div>
                    <div className="flex gap-1">
                      <Image
                        src={"/Vectorbultang-img.svg"}
                        alt={"lapang-bola"}
                        width={28}
                        height={0}
                      />
                      <p className="p-1 text-xl m-auto">Badminton</p>
                    </div>
                  </div>
                  <div className="m-auto my-2 w-[260px] h-[2px] bg-slate-400"></div>
                  <div className="p-3">
                    <p className="font-sans text-xl font-normal">Mulai dari </p>
                    <p className="font-sans text-2xl font-semibold">
                      Rp.100.000,-/jam
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-max bg-white w-max shadow-xl rounded-xl">
              <div className="w-max h-max">
                <Image
                  className="rounded-t-xl"
                  src={"/img-js-sport-hall.png"}
                  alt={"lapang-bola"}
                  width={285}
                  height={150}
                />
                <div className="p-3 font-sans">
                  <p className="text-lg p-3">Venue</p>
                  <p className=" font-bold text-3xl p-2">JS Sports Hall</p>
                  <p className="text-xl p-2">Kab.Bandung</p>
                  <div className="flex gap-1 ml-2 m-auto">
                    <Image
                      src={"/Vectorbola-img.svg"}
                      alt={"bola"}
                      width={28}
                      height={0}
                    />
                    <p className="p-1 text-xl my-auto">Futsal</p>
                    <div className="w-[2px] h-[28px] m-2 bg-slate-400"></div>
                    <div className="flex gap-1">
                      <Image
                        src={"/Vectorbultang-img.svg"}
                        alt={"lapang-bola"}
                        width={28}
                        height={0}
                      />
                      <p className="p-1 text-xl m-auto">Badminton</p>
                    </div>
                  </div>
                  <div className="m-auto my-2 w-[260px] h-[2px] bg-slate-400"></div>
                  <div className="p-3">
                    <p className="font-sans text-xl font-normal">Mulai dari </p>
                    <p className="font-sans text-2xl font-semibold">
                      Rp.100.000,-/jam
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-max bg-white w-max shadow-xl rounded-xl">
              <div className="w-max h-max">
                <Image
                  className="rounded-t-xl"
                  src={"/img-js-sport-hall.png"}
                  alt={"lapang-bola"}
                  width={285}
                  height={150}
                />
                <div className="p-3 font-sans">
                  <p className="text-lg p-3">Venue</p>
                  <p className=" font-bold text-3xl p-2">JS Sports Hall</p>
                  <p className="text-xl p-2">Kab.Bandung</p>
                  <div className="flex gap-1 ml-2 m-auto">
                    <Image
                      src={"/Vectorbola-img.svg"}
                      alt={"bola"}
                      width={28}
                      height={0}
                    />
                    <p className="p-1 text-xl my-auto">Futsal</p>
                    <div className="w-[2px] h-[28px] m-2 bg-slate-400"></div>
                    <div className="flex gap-1">
                      <Image
                        src={"/Vectorbultang-img.svg"}
                        alt={"lapang-bola"}
                        width={28}
                        height={0}
                      />
                      <p className="p-1 text-xl m-auto">Badminton</p>
                    </div>
                  </div>
                  <div className="m-auto my-2 w-[260px] h-[2px] bg-slate-400"></div>
                  <div className="p-3">
                    <p className="font-sans text-xl font-normal">Mulai dari </p>
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

    </>

  );
};

export default Booking;
