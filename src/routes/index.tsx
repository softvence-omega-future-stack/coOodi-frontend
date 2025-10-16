import { createBrowserRouter } from "react-router";
import App from "../App";
import Shop from "../pages/Shop";
import Tiers from "../pages/Tiers";
import FAQ from "../pages/Faq";
import Contact from "../pages/Contact";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/shop",
        element: <Shop />
    },
    {
        path: "/tiers",
        element: <Tiers />
    },
    {
        path: "/faq",
        element: <FAQ />
    },
    {
        path: "/contact",
        element: <Contact />
    }
])