import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';

import { Routes } from './components/Routes';
import { AuthProvider } from './contexts/authContext';
import { theme } from './theme';

import './App.css';

export function App() {
  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </ChakraProvider>
    </BrowserRouter>
  );
}
