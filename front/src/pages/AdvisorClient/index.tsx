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
} from '@chakra-ui/react';

import { Button } from '../../components/Button';
import { Layout } from '../../components/Layout';
import { api } from '../../services/api';
import { ClientProps } from './ClientProps';
import { DataBank } from './DataBank';
import { SearchInput } from './SearchInput';
import { TableRows } from './TableRows';

export function AdvisorClient() {
  const [availableServices, setAvailableServices] = useState<string[]>([]);
  const [data, setData] = useState<DataBank[]>([]);
  const [selectClient, setSelectClient] = useState<ClientProps>();

  useEffect(() => {
    if (selectClient) {
      api
        .get(`/open-finances/${selectClient.name}`)
        .then(({ data: { availableServices, banks } }) => {
          setData(banks);
          setAvailableServices(availableServices);
        });
    }
  }, [selectClient]);

  return (
    <Layout navIsCloseable withoutPadding>
      <Flex direction="column">
        <Text
          mt="8"
          fontSize="2xl"
          color="primary.500"
          fontWeight="semibold"
          ml="4"
        >
          CLIENTE
        </Text>

        <SearchInput onChange={setSelectClient} />

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

            <Tabs mt="8" variant="unstyled" w="full">
              <TabList
                pl="8"
                pt="2"
                mb="8"
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
                <TabPanel mx="auto" w="64rem">
                  <Box px="4">
                    <Table variant="unstyled">
                      <Thead>
                        <Tr>
                          <Th
                            borderLeft="4px"
                            color="white"
                            borderColor="primary.500"
                          >
                            Dados
                          </Th>
                          {data.map(({ bank }) => (
                            <Th color="primary.500" key={bank}>
                              {bank}
                            </Th>
                          ))}
                        </Tr>
                      </Thead>
                      <Tbody overflowX="hidden">
                        {data && <TableRows data={data} />}
                      </Tbody>
                    </Table>

                    <Flex direction="column" mt="8" px="auto">
                      <Text
                        pl="4"
                        borderLeft="4px"
                        color="white"
                        borderColor="primary.500"
                      >
                        Insights - Oportunidades de Negócio
                      </Text>
                      <Text pl="5" mt="2" color="primary.500">
                        Confira quais produtos , com base no perfil de risco ,
                        estão disponíveis para esse cliente na XP
                      </Text>
                    </Flex>

                    <Flex direction="column" mt="8" px="auto">
                      <Text
                        pl="4"
                        borderLeft="4px"
                        color="white"
                        borderColor="primary.500"
                      >
                        Produtos XP disponíveis
                      </Text>
                      {availableServices.map(service => (
                        <Text key={service} pl="5" mt="2" color="primary.500">
                          {service}
                        </Text>
                      ))}
                    </Flex>
                  </Box>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </>
        )}
      </Flex>
    </Layout>
  );
}
