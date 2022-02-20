import { useNavigate } from 'react-router-dom';

import { useAuth } from '../contexts/authContext';

interface AuthRouterProps {
  element: React.ReactNode;
  isPublic?: boolean;
}

export function AuthRouter({ isPublic = false, element }: AuthRouterProps) {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  if (isPublic && isAuthenticated) {
    navigate('/dashboard', { replace: true });
  }

  if (!isPublic && !isAuthenticated) {
    navigate('/login', { replace: true });
  }

  return <>{element}</>;
}
