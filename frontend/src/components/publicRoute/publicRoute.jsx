// import { useUserContext } from '@/contexts/useUserContext';
import { Navigate } from 'react-router-dom';

const PublicRoute = () => {
    // const { isUserLoggedIn } = useUserContext();
    const isUserLoggedIn = false;

    if (isUserLoggedIn) {
        return <Navigate to="/users" replace />;
    }
    return;
    // return children;
};


export default PublicRoute;