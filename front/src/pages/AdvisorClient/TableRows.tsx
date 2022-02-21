import { Box, Td, Tr } from '@chakra-ui/react';

import { DataBank } from './DataBank';

interface TableRowsProps {
  data: DataBank[];
}

interface StyledTdProps {
  children: React.ReactNode;
}

function StyledTd({ children }: StyledTdProps) {
  return (
    <Td p="2">
      <Box p="2" bg="white" textAlign="center">
        {children}
      </Box>
    </Td>
  );
}

export function TableRows({ data }: TableRowsProps) {
  return (
    <>
      <Tr>
        <Td color="primary.500">Perfil de Risco</Td>
        {data.map(({ score, bank }) => (
          <StyledTd key={bank}>{score}</StyledTd>
        ))}
      </Tr>
      <Tr>
        <Td color="primary.500">Data de Abertura da Conta</Td>
        {data.map(({ startDate, bank }) => (
          <StyledTd key={bank}>
            {new Date(startDate).toLocaleDateString('pt-BR', {
              timeZone: 'UTC',
            })}
          </StyledTd>
        ))}
      </Tr>
      <Tr>
        <Td color="primary.500">Possui Cartão de Crédito</Td>
        {data.map(({ hasCreditCard, bank }) => (
          <StyledTd key={bank}>{hasCreditCard ? 'Sim' : 'Não'}</StyledTd>
        ))}
      </Tr>
      <Tr>
        <Td color="primary.500">Investimentos no Banco</Td>
        {data.map(({ investments, bank }) => (
          <StyledTd key={bank}>{investments.join(', ')}</StyledTd>
        ))}
      </Tr>
      <Tr>
        <Td color="primary.500">Linhas de Crédito</Td>
        {data.map(({ credits, bank }) => (
          <StyledTd key={bank}>{credits.join(', ')}</StyledTd>
        ))}
      </Tr>
    </>
  );
}
