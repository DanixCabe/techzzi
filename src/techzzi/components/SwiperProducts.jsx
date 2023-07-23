// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import {EffectCoverflow, Pagination, Navigation  } from 'swiper/modules'

export const SwiperProducts = () => {
    return (
        <Swiper
                grabCursor={true}
                loop={false}
                spaceBetween={32}
                breakpoints={{
                    320: {
                        slidesPerView: 1.4,
                        spaceBetween: 10,
                    },
                    567: {
                        slidesPerView: 2.3,
                        spaceBetween: 15
                    },
                    767: {
                        slidesPerView: 2.7,
                        spaceBetween: 40
                    },
                    1023: {
                        slidesPerView: 3,
                        spaceBetween: 30
                    },
                    1200: {
                        slidesPerView: 4,
                        spaceBetween: 30
                    }
                }}
                pagination={{el:'.swiper-pagination',clickable: true}}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true,
                }}
                modules={[EffectCoverflow, Navigation, Pagination]}
                className='swiper-products mx-8'
            >

            <SwiperSlide className="swiper-products__swiper-slide-products">
                <a href='' className='d-flex justify-center items-center'>
                    <div className='swiper-products__slider-items  rounded-lg border-gray-400 dark:border-slate-200 shadow-sm hover:border-cyan-600 dark:hover:border-cyan-600'>
                        <div id='card-head' className='p-5 border-b-[1px] rounded-t-lg dark:border-slate-200 bg-slate-200'>
                            <img src='/src/assets/images/carousel_products/img-switch-zelda.png' className='card-img-top' alt='...'/>
                        </div>
                        <div id='card-body' className='bg-white border-b-[0px] border-gray-400  dark:border-slate-200 text-slate-800 dark:text-white dark:bg-slate-900 rounded-b-lg p-5'>
                            <p className='font-semibold'>Name</p>
                            <p>dcto</p>
                            <p className='font-semibold text-3xl text-cyan-400'>$300.00</p>
                        </div>
                    </div>
                </a>
            </SwiperSlide>

            
            <SwiperSlide className="swiper-products__swiper-slide-products">
                <a href='' className='d-flex justify-center items-center'>
                    <div className='swiper-products__slider-items  rounded-lg border-gray-400 dark:border-slate-200 shadow-sm hover:border-cyan-600 dark:hover:border-cyan-600'>
                        <div id='card-head' className='p-5 border-b-[1px] rounded-t-lg dark:border-slate-200 bg-slate-200'>
                            <img src='/src/assets/images/carousel_products/img-switch-zelda.png' className='card-img-top' alt='...'/>
                        </div>
                        <div id='card-body' className='bg-white border-b-[0px] border-gray-400  dark:border-slate-200 text-slate-800 dark:text-white dark:bg-slate-900 rounded-b-lg p-5'>
                            <p className='font-semibold'>Name</p>
                            <p>dcto</p>
                            <p className='font-semibold text-3xl text-cyan-400'>$300.00</p>
                        </div>
                    </div>
                </a>
            </SwiperSlide>   

            
            <SwiperSlide className="swiper-products__swiper-slide-products">
                <a href='' className='d-flex justify-center items-center'>
                    <div className='swiper-products__slider-items  rounded-lg border-gray-400 dark:border-slate-200 shadow-sm hover:border-cyan-600 dark:hover:border-cyan-600'>
                        <div id='card-head' className='p-5 border-b-[1px] rounded-t-lg dark:border-slate-200 bg-slate-200'>
                            <img src='/src/assets/images/carousel_products/img-switch-zelda.png' className='card-img-top' alt='...'/>
                        </div>
                        <div id='card-body' className='bg-white border-b-[0px] border-gray-400  dark:border-slate-200 text-slate-800 dark:text-white dark:bg-slate-900 rounded-b-lg p-5'>
                            <p className='font-semibold'>Name</p>
                            <p>dcto</p>
                            <p className='font-semibold text-3xl text-cyan-400'>$300.00</p>
                        </div>
                    </div>
                </a>
            </SwiperSlide>   

            
            <SwiperSlide className="swiper-products__swiper-slide-products">
                <a href='' className='d-flex justify-center items-center'>
                    <div className='swiper-products__slider-items  rounded-lg border-gray-400 dark:border-slate-200 shadow-sm hover:border-cyan-600 dark:hover:border-cyan-600'>
                        <div id='card-head' className='p-5 border-b-[1px] rounded-t-lg dark:border-slate-200 bg-slate-200'>
                            <img src='/src/assets/images/carousel_products/img-switch-zelda.png' className='card-img-top' alt='...'/>
                        </div>
                        <div id='card-body' className='bg-white border-b-[0px] border-gray-400  dark:border-slate-200 text-slate-800 dark:text-white dark:bg-slate-900 rounded-b-lg p-5'>
                            <p className='font-semibold'>Name</p>
                            <p>dcto</p>
                            <p className='font-semibold text-3xl text-cyan-400'>$300.00</p>
                        </div>
                    </div>
                </a>
            </SwiperSlide>   

            
            <SwiperSlide className="swiper-products__swiper-slide-products">
                <a href='' className='d-flex justify-center items-center'>
                    <div className='swiper-products__slider-items  rounded-lg border-gray-400 dark:border-slate-200 shadow-sm hover:border-cyan-600 dark:hover:border-cyan-600'>
                        <div id='card-head' className='p-5 border-b-[1px] rounded-t-lg dark:border-slate-200 bg-slate-200'>
                            <img src='/src/assets/images/carousel_products/img-switch-zelda.png' className='card-img-top' alt='...'/>
                        </div>
                        <div id='card-body' className='bg-white border-b-[0px] border-gray-400  dark:border-slate-200 text-slate-800 dark:text-white dark:bg-slate-900 rounded-b-lg p-5'>
                            <p className='font-semibold'>Name</p>
                            <p>dcto</p>
                            <p className='font-semibold text-3xl text-cyan-400'>$300.00</p>
                        </div>
                    </div>
                </a>
            </SwiperSlide>


            
            <SwiperSlide className="swiper-products__swiper-slide-products">
                <a href='' className='d-flex justify-center items-center'>
                    <div className='swiper-products__slider-items  rounded-lg border-gray-400 dark:border-slate-200 shadow-sm hover:border-cyan-600 dark:hover:border-cyan-600'>
                        <div id='card-head' className='p-5 border-b-[1px] rounded-t-lg dark:border-slate-200 bg-slate-200'>
                            <img src='/src/assets/images/carousel_products/img-switch-zelda.png' className='card-img-top' alt='...'/>
                        </div>
                        <div id='card-body' className='bg-white border-b-[0px] border-gray-400  dark:border-slate-200 text-slate-800 dark:text-white dark:bg-slate-900 rounded-b-lg p-5'>
                            <p className='font-semibold'>Name</p>
                            <p>dcto</p>
                            <p className='font-semibold text-3xl text-cyan-400'>$300.00</p>
                        </div>
                    </div>
                </a>
            </SwiperSlide>      


            
                {/* {
                    imagesSwiperSlide.map((image) => { 
                        return (
                            <SwiperSlide className='' key={image}>
                                <img src={image} alt={image} className='rounded-md' />
                            </SwiperSlide>
                        )
                    })
                } */}
                <div className='slider-controler h-auto'>
                    <div className='swiper-button-next'></div>   
                    <div className='swiper-button-prev'></div>   
                    <div className='swiper-pagination'></div>
                </div>
        </Swiper>
    )
}
