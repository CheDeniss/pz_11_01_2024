import React from 'react';
import Biography from "./biography.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Gallery from "./pictures.jsx";
import MostFavPict from "./mostFamPict.jsx";
import Layout from "./layout.jsx";
import Error from "./error.jsx";

const router = createBrowserRouter(
    [{
        path: "/",
        element: <Layout/>,
        errorElement: <Error/>,
        children: [
            {path: "/biography", element: <Biography/>},
            {path: "/famouspaint", element: <MostFavPict/>},
            {path: "/gallery", element: <Gallery/>}
        ]
    }]
)


const Artist = () => {
    return (
        <div>
            <RouterProvider router={router}/>
        </div>
    );
};

export default Artist;
