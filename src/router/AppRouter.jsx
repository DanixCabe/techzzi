import React from 'react'
import { ChildTechzziRoutes, TechzziRoutes } from '../techzzi/routes'
import { ErrorPage } from '../techzzi/pages/ErrorPage'
import { RouterProvider, createHashRouter } from 'react-router-dom'


export const router = createHashRouter([
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
