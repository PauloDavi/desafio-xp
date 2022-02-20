import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
} from '@chakra-ui/react';

interface ButtonProps extends ChakraButtonProps {
  colorScheme?: 'primary' | 'secondary';
  href?: string;
}

export function Button({
  colorScheme = 'primary',
  href,
  children,
  ...props
}: ButtonProps) {
  return (
    <ChakraButton
      href={href}
      backgroundColor={
        colorScheme === 'primary' ? 'primary.500' : 'secondary.900'
      }
      color={colorScheme === 'primary' ? 'gray.100' : 'white'}
      _hover={{
        backgroundColor:
          colorScheme === 'primary' ? 'primary.900' : 'secondary.700',
      }}
      {...props}
    >
      {children}
    </ChakraButton>
  );
}
