import { useEffect, useState } from 'react';

import {
  Box,
  Flex,
  SimpleGrid,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from '@chakra-ui/react';

import { Button } from '../../components/Button';
import { Layout } from '../../components/Layout';
import { ClientProps } from './ClientProps';
import { SearchInput } from './SearchInput';

const data = [
  {
    bank: 'Banco A',
    score: 1,
    startDate: '01/01/2020',
    hasCreditCard: true,
    investments: ['investimento 1'],
    credits: ['credito 1'],
  },
  {
    bank: 'Banco B',
    score: 1,
    startDate: '01/01/2020',
    hasCreditCard: true,
    investments: ['investimento 1'],
    credits: ['credito 1'],
  },
  {
    bank: 'XP',
    score: 1,
    startDate: '01/01/2020',
    hasCreditCard: true,
    investments: ['investimento 1'],
    credits: ['credito 1'],
  },
];

export function AdvisorClient() {
  const [clients, setClients] = useState<ClientProps[]>([]);
  const [selectClient, setSelectClient] = useState<ClientProps>();

  useEffect(() => {
    setClients([
      { name: 'fulano', cpf: '123456789' },
      { name: 'beutrano', cpf: '123456783' },
    ]);
  }, []);

  return (
    <Layout navIsCloseable withoutPadding>
      <Flex direction="column" alignItems="center">
        <Text
          mt="8"
          fontSize="2xl"
          color="primary.500"
          fontWeight="semibold"
          ml="4"
        >
          CLIENTE
        </Text>

        <SearchInput clients={clients} onChange={setSelectClient} />

        {selectClient && (
          <>
            <Box mt="8" px="6" w="full">
              <Flex
                mx="auto"
                rounded="md"
                px="6"
                py="4"
                maxW="60rem"
                w="full"
                direction="column"
                backgroundColor="gray.900"
                borderWidth="medium"
                borderColor="primary.500"
              >
                <Text
                  textAlign={['center', 'center', 'left']}
                  fontSize="4xl"
                  color="primary.500"
                  fontWeight="semibold"
                >
                  Dados
                </Text>
                <Flex
                  textAlign={['center', 'center', 'left']}
                  direction={['column', 'column', 'row']}
                  mt="6"
                >
                  <Flex
                    direction="column"
                    fontSize="2xl"
                    color="primary.500"
                    fontWeight="semibold"
                  >
                    <Text as="span">
                      Nome:{' '}
                      <Text as="span" fontWeight="normal">
                        {selectClient.name}
                      </Text>
                    </Text>
                    <Text as="span" mt="4">
                      CPF:{' '}
                      <Text as="span" fontWeight="normal">
                        {selectClient.cpf}
                      </Text>
                    </Text>
                  </Flex>
                  <SimpleGrid
                    flex={1}
                    ml="8"
                    my={['8', '8', '0']}
                    alignItems="center"
                    justifyContent="center"
                    columns={[1, 1, 3]}
                    spacing={10}
                  >
                    <Button
                      fontSize="smaller"
                      borderWidth="medium"
                      borderColor="primary.500"
                      bg="primary.500"
                      color="black"
                      rounded="none"
                    >
                      Análise de Concorrentes
                    </Button>
                    <Button
                      disabled
                      borderWidth="medium"
                      fontSize="smaller"
                      borderColor="primary.500"
                      backgroundColor="black"
                      color="primary.500"
                      rounded="none"
                    >
                      Análise 360<code>&deg;</code>
                    </Button>
                    <Button
                      disabled
                      borderWidth="medium"
                      fontSize="smaller"
                      borderColor="primary.500"
                      backgroundColor="black"
                      color="primary.500"
                      rounded="none"
                    >
                      Melhores Ofertas
                    </Button>
                  </SimpleGrid>
                </Flex>
              </Flex>
            </Box>

            <Tabs mt="8" variant="unstyled" size="lg" w="full">
              <TabList
                px="8"
                pt="2"
                bg="primary.300"
                borderBottom="4px"
                borderColor="primary.500"
              >
                <Tab
                  _selected={{
                    backgroundColor: 'primary.500',
                    color: 'white',
                  }}
                >
                  Análise de Concorrentes
                </Tab>
                <Tab
                  isDisabled
                  cursor="not-allowed"
                  _selected={{
                    backgroundColor: 'primary.500',
                    color: 'white',
                  }}
                >
                  Análise 360<code>&deg;</code>
                </Tab>
                <Tab
                  isDisabled
                  cursor="not-allowed"
                  _selected={{
                    backgroundColor: 'primary.500',
                    color: 'white',
                  }}
                >
                  Melhores Ofertas
                </Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <Flex mt="8" justify="center">
                    <Table variant="unstyled">
                      <Thead>
                        <Tr>
                          <Th>Dados</Th>
                          {data.map(({ bank }) => (
                            <Th key={bank}>{bank}</Th>
                          ))}
                        </Tr>
                      </Thead>
                      <Tbody>
                        <Tr>
                          <Td>Perfil de Risco</Td>
                          {data.map(({ bank }) => (
                            <Td key={bank}>{bank}</Td>
                          ))}
                        </Tr>
                        <Tr>
                          <Td>Data de Abertura da Conta</Td>
                          {data.map(({ bank }) => (
                            <Td key={bank}>{bank}</Td>
                          ))}
                        </Tr>
                        <Tr>
                          <Td>Possui Cartão de Crédito</Td>
                          {data.map(({ bank }) => (
                            <Td key={bank}>{bank}</Td>
                          ))}
                        </Tr>
                        <Tr>
                          <Td>Investimentos no Banco</Td>
                          {data.map(({ bank }) => (
                            <Td key={bank}>{bank}</Td>
                          ))}
                        </Tr>
                        <Tr>
                          <Td>Linhas de Crédito</Td>
                          {data.map(({ bank }) => (
                            <Td key={bank}>{bank}</Td>
                          ))}
                        </Tr>
                      </Tbody>
                    </Table>
                  </Flex>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </>
        )}
      </Flex>
    </Layout>
  );
}
