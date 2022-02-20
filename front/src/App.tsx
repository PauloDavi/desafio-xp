import { ChakraProvider } from '@chakra-ui/react';

import { AuthProvider } from './contexts/authContext';
import { Routes } from './Routes';
import { theme } from './theme';

export function App() {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ChakraProvider>
  );
}
