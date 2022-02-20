import { RefObject } from 'react';

import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
} from '@chakra-ui/react';

import { NavBarContent } from './NavBarContent';

interface DrawerMenuProps {
  isOpen: boolean;
  btnRef: RefObject<HTMLButtonElement>;
  onClose(): void;
}

export function DrawerMenu({ isOpen, btnRef, onClose }: DrawerMenuProps) {
  return (
    <Drawer
      isOpen={isOpen}
      placement="start"
      onClose={onClose}
      finalFocusRef={btnRef}
    >
      <DrawerContent maxW="14rem" p="0">
        <DrawerCloseButton color="white" />
        <DrawerBody p="0">
          <NavBarContent />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
