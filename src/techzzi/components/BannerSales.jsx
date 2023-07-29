import React from 'react'

export const BannerSales = () => {
    return (
        <>
            <section className=" mx-4 lg:mx-0 text-white">
                <h4 className='font-semibold text-3xl md:text-4xl text-slate-800 dark:text-white'>Sales</h4>
                <aside className='flex row-auto mt-4'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 w-full '>
                        <a href='#'>
                            <div className='banner-keyboard border-[1px] border-slate-400 shadow hover:border-cyan-400 dark:hover:border-cyan-600'>
                                <p className='text-lg xl:text-3xl font-normal xl:font-extralight '>Logitech</p>
                                <p className='text-4xl xl:text-5xl font-semibold '>G913</p>
                                <div className='flex items-center space-x-1 text-orange-400'>
                                    <p className='text-4xl xl:text-6xl font-semibold'>40</p>
                                    <p className='uppercase font-medium text-xs xl:text-lg mt-1 xl:mt-3'>%<span className='block'>off</span></p>
                                </div>
                            </div>
                        </a>
                        <a href='#'>
                            <div className='banner-headset border-[1px] border-slate-400 shadow hover:border-cyan-600 dark:hover:border-cyan-600'>
                                <p className='text-lg xl:text-3xl font-normal xl:font-extralight'>Logitech</p>
                                <p className='text-4xl xl:text-5xl font-semibold '>G733</p>
                                <div className='flex items-center space-x-1 text-orange-400'>
                                    <p className='text-4xl xl:text-6xl font-semibold line'>25</p>
                                    <p className='uppercase font-medium text-xs xl:text-lg mt-1 xl:mt-3'>%<span className='block'>off</span></p>
                                </div>
                            </div>
                        </a>
                    </div>

                </aside>
            </section>

        
        </>
    )
}
