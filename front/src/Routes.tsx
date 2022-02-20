import { BrowserRouter, Route, Routes as RRDRoutes } from 'react-router-dom';

import { AuthRouter } from './components/AuthRouter';
import { Home } from './pages/Home';

export function Routes() {
  return (
    <BrowserRouter>
      <RRDRoutes>
        <Route path="/" element={<AuthRouter isPublic element={<Home />} />} />
      </RRDRoutes>
    </BrowserRouter>
  );
}
