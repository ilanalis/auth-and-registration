import {createBrowserRouter, Navigate} from "react-router-dom";
import {Routes} from "./const.js";
import Login from "../pages/authorization/login/Login.jsx";
import Signup from "../pages/authorization/signup/Signup.jsx";
import Users from "../pages/users/Users.jsx";
import PublicRoute from "../components/publicRoute/publicRoute.jsx";
import AuthorizationLayout from "../pages/authorization/Authorization.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Navigate to={Routes.LOGIN} replace />,
    },
    {
        path: "/",
        element: (
            <PublicRoute>
                <AuthorizationLayout />
            </PublicRoute>
        ),
        children: [
            {
                path: Routes.LOGIN ,
                element: <Login/>,

            },
            {
                path: Routes.SIGNUP,
                element: <Signup/>,
            },
        ],
    },

    {
        path: Routes.USERS,
        element: <Users/>,
    }
]);