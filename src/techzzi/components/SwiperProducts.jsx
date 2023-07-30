// Import Swiper React components
import { useDispatch, useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import {EffectCoverflow, Pagination, Navigation  } from 'swiper/modules';
import { BsFillCartPlusFill } from "react-icons/bs";
import {  startAddProduct } from '../../store/techzzi';



export const SwiperProducts = ({products, title, filterProducts, addProductsInCart } ) => {
    const dispatch = useDispatch();

    const urlImages = 'https://res.cloudinary.com/dk5aoscls/image/upload/v1690691489'

    const onAddCart = (product) => {
        dispatch(startAddProduct(product));
        addProductsInCart(product)
    }

    return (
        <section className='mx-4'>
            <h4 className='font-semibold text-3xl md:text-4xl text-slate-800 dark:text-white'>{title}</h4>
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

                {
                    products.map((product) => product.type === filterProducts &&     
                        (
                            <SwiperSlide key={product.id} className="swiper-products__swiper-slide-products">
                                <div className='swiper-products__slider-items  rounded-lg border-[1px] border-gray-300 shadow-sm '>
                                    <div id='card-head' className='p-5 border-b-[1px] rounded-t-lg dark:border-slate-200 bg-slate-200'>
                                        <img src={`${urlImages}/images/${product.type}/${product.image}`} className='card-img-top' alt={product.name}/>
                                    </div>
                                    <div id='card-body' className='bg-white border-b-[0px] border-gray-300  dark:border-slate-200 text-slate-800 dark:text-white dark:bg-slate-900 rounded-b-lg p-5'>
                                        <p className='text-xs font-semibold opacity-70'>{product.brand}</p>
                                        <p className='text-base font-semibold'>{product.name}</p>
                                        <p className='font-semibold text-3xl text-cyan-400'>${product.price.toFixed(2)}</p>
                                        <button onClick={() => onAddCart(product)} className='flex items-center justify-center text-lg font-bold border-[1px] rounded-sm mt-2 w-36 border-cyan-500 bg-cyan-500 text-white hover:bg-cyan-600 hover:border-cyan-600'>
                                            Add Cart
                                            <BsFillCartPlusFill className='ml-3'/>
                                        </button>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    )
                }
                <div className='slider-controler h-auto'>
                    <div className='swiper-button-next'></div>   
                    <div className='swiper-button-prev'></div>   
                    <div className='swiper-pagination'></div>
                </div>
            </Swiper>
        </section>
    )
}
