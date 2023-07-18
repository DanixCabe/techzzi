import { SwiperSlide } from 'swiper/react';

export const SwiperSlideHome = ({image, index}) => {
    console.log(image)
    return (
        <>
            <SwiperSlide key={image}>
                <img src={image} alt={image} />
            </SwiperSlide>
        </>
    )
}
