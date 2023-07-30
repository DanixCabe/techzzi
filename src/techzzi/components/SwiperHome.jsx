// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import {EffectCoverflow, Pagination, Navigation  } from 'swiper/modules'

const urlImages = 'https://res.cloudinary.com/dk5aoscls/image/upload/v1690691489'

const imagesSwiperSlide = [`${urlImages}/images/carousel/home-4090rtx.jpg`,`${urlImages}/images/carousel/home-asusrog.jpg`,`${urlImages}/images/carousel/home-ps5.jpg`]

export const SwiperHome = () => {
    return (
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
    )
}
