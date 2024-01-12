import React from 'react';
import Biography from "./biography.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Gallery from "./pictures.jsx";
import MostFavPict from "./mostFamPict.jsx";
import Layout from "./layout.jsx";
import Error from "./error.jsx";
import ParamEX3 from "./paramPict";
import Perspage from "../EX4/perspage";
import RegForm from "../EX5/regform";
import Error5 from "../EX5/error.jsx"
import OK from "../EX5/ok";

const router = createBrowserRouter(
    [{
        path: "/",
        element: <Layout/>,
        errorElement: <Error/>,
        children: [
            {path: "/biography", element: <Biography/>},
            {path: "/famouspaint", element: <MostFavPict/>},
            {path: "/gallery", element: <Gallery/>},
            {path: "/parampicture/:newH", element: <ParamEX3/>},
            {path: "/perspage", element: <Perspage/>},
            {path: "/regform", element: <RegForm/>},
            {path: "/error", element: <Error5/>},
            {path: "/ok", element: <OK/>}
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
