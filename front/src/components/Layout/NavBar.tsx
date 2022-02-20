import { useRef } from 'react';

import {
  useDisclosure,
  useMediaQuery,
  IconButton,
  Flex,
  Box,
} from '@chakra-ui/react';
import { FiMenu } from 'react-icons/fi';

import { DrawerMenu } from './DrawerMenu';
import { NavBarContent } from './NavBarContent';
import { ProfileInfos } from './ProfileInfos';

interface NavBarProps {
  navIsCloseable: boolean;
}

export function NavBar({ navIsCloseable }: NavBarProps) {
  const [isLargerThan800] = useMediaQuery('(min-width: 800px)');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      {!isLargerThan800 ? (
        <Box p="2">
          <IconButton
            position="absolute"
            top="0"
            left="0"
            aria-label="navigation menu"
            icon={<FiMenu />}
            ref={btnRef}
            variant="ghost"
            color="primary.500"
            fontSize="xx-large"
            onClick={onOpen}
          />
        </Box>
      ) : (
        <>
          {navIsCloseable ? (
            <Flex
              position="absolute"
              top="0"
              left="0"
              p="4"
              alignItems="center"
            >
              <IconButton
                aria-label="navigation menu"
                icon={<FiMenu />}
                ref={btnRef}
                variant="ghost"
                color="primary.500"
                fontSize="xx-large"
                mr="2"
                onClick={onOpen}
              />

              <ProfileInfos />
            </Flex>
          ) : (
            <NavBarContent />
          )}
        </>
      )}
      <DrawerMenu isOpen={isOpen} btnRef={btnRef} onClose={onClose} />
    </>
  );
}
