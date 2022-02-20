import { Flex, Image, Text, useMediaQuery } from '@chakra-ui/react';
import { useForm, FormProvider } from 'react-hook-form';

import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { Link } from '../components/Link';
import { useAuth } from '../contexts/authContext';

interface FormData {
  email: string;
  password: string;
}

export function Login() {
  const { handleLogin } = useAuth();

  const [isLargerThan600] = useMediaQuery('(min-width: 600px)');

  const methods = useForm<FormData>({ mode: 'all' });

  function onSubmit({ email, password }: FormData) {
    console.log();
    handleLogin({ email, password });
  }

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

        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <Input
              name="email"
              label="E-mail"
              marginTop="12"
              options={{
                required: 'O e-mail é obrigatório',
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: 'E-mail inválido',
                },
              }}
            />

            <Input
              name="password"
              label="Senha"
              marginTop="4"
              options={{
                required: 'A senha é obrigatória',
              }}
            />

            <Button
              mt="8"
              isFullWidth
              type="submit"
              colorScheme="secondary"
              disabled={!methods.formState.isValid}
              isLoading={methods.formState.isSubmitting}
            >
              Entrar
            </Button>

            <Text textAlign="center" mt="2" fontSize="smaller">
              Esqueceu a senha?
              <Link
                textDecor="underline"
                color="blue.400"
                to="/forgot"
                _hover={{ color: 'blue.500' }}
              >
                Recuperar senha
              </Link>
            </Text>
          </form>
        </FormProvider>
        <Link
          position="absolute"
          bottom="2"
          to="/"
          textAlign="center"
          fontSize="sm"
          transform="translate(-50%, 0);"
          textDecor="underline"
        >
          Termos e condições
        </Link>
      </Flex>
    </Flex>
  );
}
