import React from 'react';
import Link from 'next/link';

const MyModal: React.FC = () => {
    const openModal = () => {
        const modal = document.getElementById('my_modal_5') as HTMLDialogElement | null;
        if (modal) {
            modal.showModal();
        }
    };

    return (
        <div>
            <button className="btn" onClick={openModal}>
                Pilih
            </button>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box h-[500px] rounded-[10px] m-3">
                    <h3 className="text-[35px] font-semibold text-center">Jadwal Dipilih</h3>
                    <div className='w-full h-[1px] bg-black'></div>
                    <p className="py-4 text-[25px] font-medium">JS Sport Hall Futsal</p>
                    <div className='flex flex-col gap-6'>
                        <div className='flex flex-row w-full h-[80px] bg-white border rounded-[10px] p-2'>
                            <div className='flex flex-col p-1 w-full'>
                                <p className='text-[15px] text-[#000000] text-left font-semibold'>Jum'at, 6 Oktober 2023 (18:00 - 19:00 WIB)</p>
                                <p className='text-[25px] text-[#000000] text-left font-medium'>Rp.250.000</p>
                            </div>
                            <div className='m-auto w-[50px]'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#ff0000" viewBox="0 0 256 256"><path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"></path></svg>
                            </div>
                        </div>
                        <div className='flex flex-row w-full h-[80px] bg-white border rounded-[10px] p-2'>
                            <div className='flex flex-col p-1 w-full'>
                                <p className='text-[15px] text-[#000000] text-left font-semibold'>Jum'at, 6 Oktober 2023 (18:00 - 19:00 WIB)</p>
                                <p className='text-[25px] text-[#000000] text-left font-medium'>Rp.250.000</p>
                            </div>
                            <div className='m-auto w-[50px]'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#ff0000" viewBox="0 0 256 256"><path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"></path></svg>
                            </div>
                        </div>
                    <div className=" w-full">
                        <form method="w-full flex flex-row gap-10">
                            <Link href={'/booking'}>
                                <button className="btn bg-[#1B7996] text-white">
                                    Selanjutnya
                                </button>
                            </Link>
                            <button className="btn bg-[#1B7996] text-white">
                                Kembali
                            </button>
                        </form>
                    </div>

                    </div>

                </div>
            </dialog>
        </div>
    );
};

export default MyModal;
