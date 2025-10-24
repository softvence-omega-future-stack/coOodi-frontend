import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/MainLayouts";
import App from "../App";
import Shop from "../pages/Shop";
import Tiers from "../pages/Tiers";
import FAQ from "../pages/Faq";
import Contact from "../pages/Contact";
import MyBag from "../pages/MyBag";
import NotFound from "../pages/NotFound";
import LoginPage from "../pages/Login";
import SignUpPage from "../pages/Signup";
import Checkbox from "../pages/Checkbox";
import CustomCard from "../pages/CustomCard";
import AccountPage from "../pages/Account";
import EditProfile from "../pages/EditProfile";

export const router = createBrowserRouter([
  {
    element: <Layout />, // 🧭 Layout wraps everything
    children: [
      { path: "/", element: <App /> },
      { path: "/shop", element: <Shop /> },
      { path: "/tiers", element: <Tiers /> },
      { path: "/faq", element: <FAQ /> },
      { path: "/contact", element: <Contact /> },
      { path: "/my-bag", element: <MyBag /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/signup", element: <SignUpPage /> },
      { path: "/checkout", element: <Checkbox /> },
      { path: "/custom", element: <CustomCard /> },
      { path: "/account", element: <AccountPage /> },
      { path: "/edit-profile", element: <EditProfile /> },
      { path: "/*", element: <NotFound /> },
    ],
  },
]);
