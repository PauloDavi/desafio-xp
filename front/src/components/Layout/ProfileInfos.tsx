import { Avatar, AvatarBadge, Flex, IconButton, Text } from '@chakra-ui/react';
import { FiEdit2 } from 'react-icons/fi';

import { useAuth } from '../../contexts/authContext';

export function ProfileInfos() {
  const { user } = useAuth();

  if (!user) return null;

  return (
    <Flex alignItems="center">
      <Avatar src={user.avatar} name={user.name}>
        <AvatarBadge boxSize="1.25em">
          <IconButton
            rounded="full"
            colorScheme="gray"
            color="black"
            size="xs"
            aria-label="edit user photo"
            icon={<FiEdit2 />}
          />
        </AvatarBadge>
      </Avatar>
      <Flex ml="4" direction="column" color="white" maxW="32">
        <Text fontSize="xl" fontWeight="bold">
          {user.name}
        </Text>
        <Text fontSize="sm" fontWeight="light" isTruncated>
          {user.email}
        </Text>
      </Flex>
    </Flex>
  );
}
