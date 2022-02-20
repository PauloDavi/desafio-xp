import { Flex, Icon, Image, SimpleGrid, Text } from '@chakra-ui/react';
import { AiOutlineUser } from 'react-icons/ai';

import { Button } from '../components/Button';
import { ButtonLink } from '../components/ButtonLink';
import { Layout } from '../components/Layout';

export function AdvisorArea() {
  return (
    <Layout>
      <Flex
        w="full"
        h="full"
        direction="column"
        justify="center"
        align="center"
      >
        <SimpleGrid mb="12" columns={[1, 2, 3]} spacing="12">
          <ButtonLink
            to="/advisor-area/client"
            borderColor="primary.500"
            fontSize="xl"
            borderWidth="medium"
            backgroundColor="transparent"
            py="12"
            color="gray.100"
            _hover={{
              backgroundColor: 'primary.900',
            }}
          >
            <Icon
              aria-label="cliente"
              fontSize="5xl"
              p="2"
              mr="4"
              backgroundColor="primary.500"
              rounded="full"
              as={AiOutlineUser}
            />
            <Text>CLIENTE</Text>
          </ButtonLink>
          <Button
            borderColor="primary.500"
            borderWidth="medium"
            backgroundColor="transparent"
            p="12"
          >
            <Flex direction="column">
              <Text fontSize="xl">Base</Text>
              <Text mt="2" fontSize="small">
                Em breve..
              </Text>
            </Flex>
          </Button>
          <Button
            borderColor="primary.500"
            borderWidth="medium"
            backgroundColor="transparent"
            p="12"
          >
            <Flex direction="column">
              <Text fontSize="xl">Meu Perfil</Text>
              <Text mt="2" fontSize="small">
                Em breve..
              </Text>
            </Flex>
          </Button>
        </SimpleGrid>

        <Flex direction={['column', 'row']} gap="12" justify="center">
          <Flex direction="column" justify="center">
            <Image
              src="/xp-store.png"
              alt="xp store"
              h={['32', '40', '56', '64']}
              objectFit="cover"
            />
            <Button mt="4" colorScheme="primary">
              Acessar loja
            </Button>
          </Flex>

          <Flex direction="column" justify="center">
            <Image
              src="/xp-tutor.png"
              alt="xp tutor"
              h={['32', '40', '56', '64']}
              objectFit="cover"
            />
            <Button mt="4" colorScheme="primary">
              Acessar mais tutorias
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Layout>
  );
}
