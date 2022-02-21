import { Route, Routes as RRDRoutes } from 'react-router-dom';

import { AdvisorArea } from '../pages/AdvisorArea';
import { AdvisorClient } from '../pages/AdvisorClient';
import { Forgot } from '../pages/Forgot';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { SingIn } from '../pages/SingIn';
import { AuthRouter } from './AuthRouter';

export function Routes() {
  return (
    <RRDRoutes>
      <Route path="/" element={<AuthRouter isPublic element={<Home />} />} />
      <Route
        path="/login"
        element={<AuthRouter isPublic element={<Login />} />}
      />
      <Route
        path="/sing-in"
        element={<AuthRouter isPublic element={<SingIn />} />}
      />
      <Route
        path="/forgot"
        element={<AuthRouter isPublic element={<Forgot />} />}
      />
      <Route
        path="/advisor-area"
        element={<AuthRouter element={<AdvisorArea />} />}
      />
      <Route
        path="/advisor-area/client"
        element={<AuthRouter element={<AdvisorClient />} />}
      />
    </RRDRoutes>
  );
}
