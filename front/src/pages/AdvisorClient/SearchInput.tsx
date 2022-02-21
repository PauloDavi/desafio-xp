/* eslint-disable react/no-children-prop */
import { useEffect, useState } from 'react';

import {
  Box,
  Divider,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  List,
  ListItem,
  Tooltip,
  useDisclosure,
} from '@chakra-ui/react';
import { AiFillInfoCircle } from 'react-icons/ai';
import { BiSearchAlt } from 'react-icons/bi';
import { conformToMask } from 'vanilla-text-mask';

import { useDebounce } from '../../hooks/useDebounce';
import { api } from '../../services/api';
import { ClientProps } from './ClientProps';
import { cpfMask } from './cpfMask';

interface SearchInputProps {
  onChange(client: ClientProps | undefined): void;
}

export function SearchInput({ onChange }: SearchInputProps) {
  const [clients, setClients] = useState<ClientProps[]>([]);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [searchClient, setSearchClient] = useState('');
  const debouncedSearchClient = useDebounce(searchClient, 300);
  const [selectClientName, setSelectClientName] = useState<string>();

  useEffect(() => {
    api
      .get('/open-finances', { params: { search: debouncedSearchClient } })
      .then(({ data }) => {
        setClients(data);
      });
  }, [debouncedSearchClient]);

  return (
    <Box
      onBlur={() => {
        setTimeout(() => {
          onClose();
        }, 100);
      }}
      mt="4"
      w="full"
    >
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={
            <Icon as={BiSearchAlt} fontSize="28" arial-label="search" mt="2" />
          }
        />
        <Input
          _placeholder={{ color: 'gray.800' }}
          placeholder="Pesquisa um cliente"
          variant="flushed"
          onFocus={() => debouncedSearchClient !== '' && onOpen()}
          value={searchClient}
          onChange={e => {
            setSearchClient(e.target.value);
            if (!isOpen) {
              onOpen();
            }
            if (isOpen && e.target.value === '') {
              onClose();
            }
          }}
          backgroundColor="white"
          size="lg"
        />
        <Tooltip
          hasArrow
          label="Pesquise o usuário pelo nome ou CPF"
          bg="primary.500"
          color="gray.100"
        >
          <InputRightElement
            children={
              <Icon
                as={AiFillInfoCircle}
                fontSize="28"
                arial-label="search"
                mt="2"
                mr="4"
              />
            }
          />
        </Tooltip>
      </InputGroup>

      <Box position="relative" zIndex="modal">
        {isOpen && (
          <Box
            position="absolute"
            maxH="52"
            overflowY="scroll"
            top="2"
            mx="1rem"
            w="calc(100% - 2rem)"
          >
            <List
              bg="white"
              borderRadius="4px"
              border={isOpen ? '1px solid rgba(0,0,0,0.1)' : 'none'}
              boxShadow="6px 5px 8px rgba(0,50,30,0.02)"
            >
              {clients.length > 0 ? (
                clients.map((item, index) => (
                  <>
                    {index !== 0 && <Divider />}
                    <ListItem
                      px="4"
                      py="2"
                      borderBottom="1px solid rgba(0,0,0,0.01)"
                      bg={
                        item.name === selectClientName
                          ? 'rgba(0,0,0,0.05)'
                          : 'inherit'
                      }
                      cursor="pointer"
                      _hover={{
                        backgroundColor: 'rgba(0,0,0,0.05)',
                      }}
                      onClick={() => {
                        if (item.name === selectClientName) {
                          onChange(undefined);
                          setSelectClientName(undefined);
                        } else {
                          onChange(item);
                          setSelectClientName(item.name);
                        }
                        setSearchClient('');
                        onClose();
                      }}
                      key={item.name}
                    >{`${item.name} - ${
                      conformToMask(item.cpf, cpfMask, {
                        guide: false,
                      }).conformedValue
                    }`}</ListItem>
                  </>
                ))
              ) : (
                <ListItem px="4" py="2">
                  Nenhum, usuários encontrado
                </ListItem>
              )}
            </List>
          </Box>
        )}
      </Box>
    </Box>
  );
}
