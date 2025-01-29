// import { useUserContext } from '@/contexts/useUserContext';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({children}) => {
    // const { isUserLoggedIn } = useUserContext();
    const isUserLoggedIn = false;

    if (isUserLoggedIn) {
        return <Navigate to="/users" replace />;
    }
    return children;
};


export default PublicRoute;