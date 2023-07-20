import { SwiperHome, SwiperProducts } from "../../ui/components"





export const HomePage = () => {
    return (
        <div className=" min-h-full mx-auto justify-center  h-[100vh] lg:px-8  1xl:max-w-[1280px] 3xl:max-w-[1440px] mt-8">
            <SwiperHome/>
            <SwiperProducts/>
        </div>
    )
}
