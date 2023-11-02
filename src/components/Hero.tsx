import React from 'react'

function Hero() {
    return (
        <section id='hero' className='max-w-screen-2xl mx-auto'>
            <div className='h-[540px] bg-[linear-gradient(103deg,#1B7996_0%,#569AB7_52.15%,#9CC5D0_99.14%)] relative flex items-center px-36 overflow-hidden'>
                <div className='max-w-screen-xl mx-auto w-full'>
                    <h1 className='text-[4rem] font-semibold text-white mb-4'>Neuron Sportify</h1>
                    <p className='text-white  text-[1.75rem]'>Jadikan Olahragamu semakin <br /> mudah dan menyenangkan</p>
                </div>
                <img src="/ring.png" alt="png" width={600} height={700} className='absolute right-0 -top-20' />
            </div>
        </section>
    )
}

export default Hero