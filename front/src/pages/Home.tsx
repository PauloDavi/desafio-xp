import { Flex, Image, Text, useMediaQuery } from '@chakra-ui/react';

import { ButtonLink } from '../components/ButtonLink';

export function Home() {
  const [isLargerThan900] = useMediaQuery('(min-width: 900px)');
  const [isLargerThan600] = useMediaQuery('(min-width: 600px)');

  return (
    <Flex direction="row">
      {isLargerThan600 && (
        <Image
          src="/home-background.png"
          alt="home-background.png"
          h="100vh"
          w="50vw"
          objectFit="cover"
        />
      )}
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        minH={isLargerThan600 ? 'auto' : '100vh'}
        w={isLargerThan600 ? '50vw' : 'full'}
      >
        <Image src="/home-logo.png" alt="home-background.png" h="6rem" />

        <Flex
          gap="16"
          mt={['32', '44']}
          direction={isLargerThan900 ? 'row' : 'column'}
        >
          <Flex direction="column" alignItems="center">
            <Text>ASSESSOR</Text>
            <ButtonLink to="/login" mt="2" w="48" colorScheme="secondary">
              Entrar
            </ButtonLink>
          </Flex>

          <Flex direction="column" alignItems="center">
            <Text>ESCRITÓRIO</Text>
            <ButtonLink
              mt="2"
              w="48"
              to="/"
              disabled
              variant="outline"
              backgroundColor="transparent"
              borderColor="secondary.500"
              color="secondary.700"
              _hover={{
                borderColor: 'secondary.700',
              }}
            >
              Em breve...
            </ButtonLink>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
