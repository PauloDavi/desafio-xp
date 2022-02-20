import { Box, Flex } from '@chakra-ui/react';
import { AiOutlinePoweroff } from 'react-icons/ai';
import { BsChatLeft } from 'react-icons/bs';
import { MdOutlineDashboard } from 'react-icons/md';

import { useAuth } from '../../contexts/authContext';
import { Button } from '../Button';
import { Link } from '../Link';
import { ProfileInfos } from './ProfileInfos';

export function NavBarContent() {
  const { handleLogOut } = useAuth();

  return (
    <Flex
      backgroundColor="gray.900"
      direction="column"
      h="100vh"
      py="4"
      px="6"
      borderRightColor="primary.500"
      borderRightWidth="2px"
    >
      <ProfileInfos />

      <Flex as="nav" mt="24" fontSize="lg" direction="column" gap="4">
        <Link color="white" icon={MdOutlineDashboard} to="/advisor-area">
          Dashboard
        </Link>

        <Link color="white" icon={BsChatLeft} to="/advisor-area">
          Chat
        </Link>
      </Flex>

      <Box mt="auto">
        <Button
          onClick={handleLogOut}
          leftIcon={<AiOutlinePoweroff />}
          variant="ghost"
          colorScheme="secondary"
        >
          Sair
        </Button>
      </Box>
    </Flex>
  );
}
