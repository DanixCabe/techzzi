
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import {EffectCoverflow, Pagination, Navigation  } from 'swiper/modules'
import { SwiperSlideHome } from '../../ui/components/SwiperSlideHome';

const imagesSwiperSlide = ['/src/assets/carousel/home-4090rtx.jpg','/src/assets/carousel/home-asusrog.jpg','/src/assets/carousel/home-ps5.jpg']



export const HomePage = () => {
    return (
        <div className=" min-h-full mx-auto justify-center  h-[1920px] lg:px-8  1xl:max-w-[1280px] 3xl:max-w-[1440px]">
            <div className='w-auto  flex flex-col items-center justify-center'>
                <p className='text-4xl font-semibold text-cyan-500'>TechZzi SPA</p>
            </div>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={false}
                slidesPerView={'auto'}
                coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 2.5,
                }}
                pagination={{el:'.swiper-pagination',clickable: true}}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true,
                }}
                modules={[EffectCoverflow, Navigation, Pagination]}
                className='swiper_container '
            >   
                {
                    imagesSwiperSlide.map((image) => { 
                        return (
                            <SwiperSlide className='' key={image}>
                                <img src={image} alt={image} className='rounded-md' />
                            </SwiperSlide>
                        )
                    })
                }
                <div className='slider-controler h-auto'>
                    
                    <div className='swiper-pagination'></div>
                </div>
            </Swiper>
        </div>
    )
}
