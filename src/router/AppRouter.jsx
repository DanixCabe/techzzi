import React from 'react'
import { AuthRoutes, ChildAuthRoutes } from '../auth/routes'
import { ChildTechzziRoutes, TechzziRoutes } from '../techzzi/routes'
import { ErrorPage } from '../techzzi/pages/ErrorPage'
import { RouterProvider, createHashRouter } from 'react-router-dom'


export const router = createHashRouter([
    {
        path: 'register',
        element: <AuthRoutes/>,
        children: ChildAuthRoutes
    },
    {
        path: '/',
        element: <TechzziRoutes/>,
        children: ChildTechzziRoutes,
        errorElement: <ErrorPage/>
    },
])

export const AppRouter = () => {
    return (
       <RouterProvider router={router}/> 
    )
}
