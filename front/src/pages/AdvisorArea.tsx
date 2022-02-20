import { Flex, Icon, Image, Text } from '@chakra-ui/react';
import { AiOutlineUser } from 'react-icons/ai';

import { Button } from '../components/Button';
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
        <Flex
          direction={['column', 'row']}
          gap="12"
          justify="space-around"
          mb="12"
          w="full"
        >
          <Button
            flex="1"
            borderColor="primary.500"
            fontSize="xl"
            borderWidth="medium"
            backgroundColor="transparent"
            p="12"
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
          </Button>
          <Button
            flex="1"
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
            flex="1"
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
        </Flex>
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
