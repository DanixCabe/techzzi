import { Navigate } from "react-router-dom";
import { ComputerPeripheralsPage, HardwarePage, HomePage, TechnologyPage } from "../pages";


export const ChildTechzziRoutes =  [
    {
        path: '/',
        element: <HomePage/>,
    },
    {
        path: '/hardware',
        element: <HardwarePage/>,
    },
    {
        path: '/technology',
        element: <TechnologyPage/>,
    },
    {
        path: '/computer-peripherals',
        element: <ComputerPeripheralsPage/>,
    },

]