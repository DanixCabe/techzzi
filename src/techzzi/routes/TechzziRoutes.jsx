import { Outlet } from "react-router-dom"
import { Navbar } from "../components/Navbar"
import { useCheckAuth } from "../../auth/hooks"


export const TechzziRoutes = () => {
    const status = useCheckAuth();
    return (
        <>
            <Navbar />
            <Outlet />


        </>
    )
}
