import { Outlet } from "react-router-dom"
import { Navbar } from "../components/Navbar"
import { useCheckAuth } from "../../auth/hooks"


export const TechzziRoutes = () => {
    const status = useCheckAuth();
    return (
        <>
            <Navbar />
            <div className="container min-h-full justify-center mx-auto h-[1920px] px-8">
                <Outlet />
            </div>
            
        </>
    )
}
