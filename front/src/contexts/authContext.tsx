import { createContext, useCallback, useContext, useMemo } from 'react';

import { useNavigate } from 'react-router-dom';

import { useLocalStorage } from '../hooks/useLocalStorage';

interface User {
  name: string;
  email: string;
  avatar?: string;
}

interface IAuthContextProps {
  isAuthenticated: boolean;
  user?: User;
  handleLogin(props: HandleLoginProps): void;
  handleLogOut(): void;
}

export const AuthContext = createContext({} as IAuthContextProps);

interface AuthProviderProps {
  children: React.ReactNode;
}

interface HandleLoginProps {
  email: string;
  password: string;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const navigate = useNavigate();

  const [user, setUser] = useLocalStorage<User | undefined>('user', undefined);

  const isAuthenticated = useMemo(() => !!user, [user]);

  const handleLogin = useCallback(
    ({ email, password }: HandleLoginProps) => {
      console.log(password);
      setUser({
        name: 'Fulano',
        email,
      });
      navigate('/advisor-area');
    },
    [navigate, setUser],
  );

  const handleLogOut = useCallback(() => {
    setUser(undefined);
    navigate('/');
  }, [navigate, setUser]);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, user, handleLogin, handleLogOut }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}
