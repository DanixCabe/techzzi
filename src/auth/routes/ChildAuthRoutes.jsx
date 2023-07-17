import { Navigate } from "react-router-dom";
import { RegisterPage } from "../pages/RegisterPage";


export const ChildAuthRoutes =  [
    {
        path: '/register/',
        element: <RegisterPage/>,
    },
    {
        path: '/register/*',
        element: <Navigate to='/register/'/>,
    }
]