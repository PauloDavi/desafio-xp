import { ReactNode } from 'react';

import { Box, Flex, useMediaQuery } from '@chakra-ui/react';

import { NavBar } from './NavBar';

interface LayoutProps {
  children: ReactNode;
  navIsCloseable?: boolean;
  withoutPadding?: boolean;
}

export function Layout({
  children,
  navIsCloseable = false,
  withoutPadding = false,
}: LayoutProps) {
  const [isLargerThan800] = useMediaQuery('(min-width: 800px)');

  return (
    <Flex background="black" minH="100vh" minW="100vw">
      <NavBar navIsCloseable={navIsCloseable} />
      <Box
        as="main"
        p={withoutPadding ? '0' : '4'}
        w="full"
        mt={isLargerThan800 ? (navIsCloseable ? '16' : '0') : ['12', '8']}
      >
        {children}
      </Box>
    </Flex>
  );
}
