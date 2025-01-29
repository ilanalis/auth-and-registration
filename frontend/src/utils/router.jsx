import {createBrowserRouter, Navigate} from "react-router-dom";
import {Routes} from "./const.js";
import Login from "../pages/login/Login.jsx";
import Signup from "../pages/signup/Signup.jsx";
import Users from "../pages/users/Users.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Navigate to={Routes.LOGIN} replace />,
    },
    {
        path: Routes.LOGIN ,
        element: <Login/>,

    },
    {
        path: Routes.SIGNUP,
        element: <Signup/>,
    },
    {
        path: Routes.USERS,
        element: <Users/>,
    }
]);