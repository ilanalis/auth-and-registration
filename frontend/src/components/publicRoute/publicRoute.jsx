// import { useUserContext } from '@/contexts/useUserContext';
import { Navigate } from 'react-router-dom';
import {useUserContext} from "../../contexts/useUserContext.jsx";

const PublicRoute = ({children}) => {
    const { isUserLoggedIn } = useUserContext();

    if (isUserLoggedIn) {
        return <Navigate to="/users" replace />;
    }
    return children;
};


export default PublicRoute;