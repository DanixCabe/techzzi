import { Outlet } from "react-router-dom"
import { Footer, Navbar, Offcanvas } from "../../ui/components";
import { useCheckAuth } from "../../auth/hooks"


export const TechzziRoutes = () => {
    const status = useCheckAuth();
    return (
        <>
            <Navbar />
            <Offcanvas/>
            <section className="mt-20 mb-10">
                <Outlet />
            </section>
            <Footer/>

        </>
    )
}
