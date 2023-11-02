import React from 'react'
import { footerLinks } from '../../constants'

const Footer = () => {
    return (
        <footer className='max-w-screen-2xl bg-white mx-auto'>
            <div className='text-lg p-16'>
                <div className='flex flex-row m-auto gap-10'>
                    <div className='w-[300px] h-[167px] bg-cover bg-no-repeat bg-[url("/logo-footer.svg")]'>
                    </div>
                    <div className='footer_links'>
                        {footerLinks.map((Link) => (
                            <div key={Link.title}
                                className='footer_links p-3'>
                                <h3 className=' p-3 font-bold'>{Link.title}</h3>
                                {Link.links.map((item) => (
                                    <a
                                        key={item.title}
                                        href={item.href}
                                        className="text-gray-400 flex flex-col p-3 "
                                    >
                                        {item.title}
                                    </a>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='border m-10'></div>
            <div className='max-w-screen-2xl mx-auto p-10'>
                <p className="text-gray-500 text-center  dark:text-gray-400">2023 <a href="https://www.neuronworks.co.id/" className="hover:underline">
                    &copy; PT.Neuronworks Indonesia</a> All Rights Reserved.</p>
            </div>
        </footer>
    )
}

export default Footer