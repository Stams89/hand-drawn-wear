import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../../services/contexts/AuthContext';

export const ProtectedRoute = ({ children }) => {
  const { currentUser } = useAuthContext();

  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  return (
    <>
      {children}
    </>
  );
};
