import { ArrowRight } from '@phosphor-icons/react/dist/ssr/ArrowRight'
import { MapPin } from '@phosphor-icons/react/dist/ssr/MapPin'
import React from 'react'

function Search() {
    return (
        <div className='z-50 w-[900px] mx-auto bg-white -translate-y-12 rounded-lg border border-[rgba(124,124,124,0.50)] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] p-6 flex gap-10 items-center justify-between'>
            <div className='flex items-center gap-16'>

                <div className='flex gap-6 items-center'>
                    <MapPin size={60} weight='fill' className='bg-[#1B7996] text-white p-3 rounded-lg ' />
                    <div>
                        <p className='text-xl font-medium'>Lokasi</p>
                        <select className='-translate-x-1'>
                            <option value="">Bandung</option>
                            <option value="">Jakarta</option>
                            <option value="">Surabaya</option>
                        </select>
                    </div>
                </div>
                <div className='w-[2px] h-[60px] bg-[#7C7C7C70]'></div>
                <div className='flex gap-6 items-center'>
                    <img src="/whistle.svg" alt="whistle" width={65} height={65} className='bg-[#1B7996] text-white px-3 py-[18px] rounded-lg' />
                    <div>
                        <p className='text-xl font-medium'>Cabang Olahraga</p>
                        <select className='-translate-x-1'>
                            <option value="">Badminton</option>
                            <option value="">Sepak bola</option>
                            <option value="">Tenis</option>
                        </select>
                    </div>
                </div>
            </div>

            <button className='flex items-center gap-5 text-[21px] bg-[#1B7996] text-white hover:bg-slate-400 rounded-lg py-4 px-8'>
                <span>Temukan</span>
                <ArrowRight size={32} />
            </button>
        </div>
    )
}

export default Search