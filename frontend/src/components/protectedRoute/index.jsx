import { Navigate } from 'react-router-dom';
import { useUserContext } from "../../contexts/useUserContext.jsx";
import PropTypes from 'prop-types';  // Импорт PropTypes

const ProtectedRoute = ({ children }) => {
  const { isUserLoggedIn } = useUserContext();
  if (!isUserLoggedIn) {
    return <Navigate to="/" replace />;
  }

  return children;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
