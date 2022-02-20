import {
  Flex,
  Image,
  Text,
  useDisclosure,
  useMediaQuery,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Icon,
} from '@chakra-ui/react';
import { useForm, FormProvider } from 'react-hook-form';
import { IoMdMailOpen } from 'react-icons/io';

import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { Link } from '../components/Link';

interface FormData {
  email: string;
}

export function Forgot() {
  const [isLargerThan600] = useMediaQuery('(min-width: 600px)');
  const { isOpen, onOpen, onClose } = useDisclosure();

  const methods = useForm<FormData>({ mode: 'all' });

  function onSubmit({ email }: FormData) {
    console.log({ email });
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

        <Text mt="6">Por favor, informe o e-mail associado a sua conta</Text>

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

            <Button
              mt="8"
              isFullWidth
              colorScheme="secondary"
              onClick={onOpen}
              disabled={!methods.formState.isValid}
              isLoading={methods.formState.isSubmitting}
            >
              Enviar e-mail de redefinição
            </Button>
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
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody display="flex" flexDirection="column" alignItems="center">
            <Icon mt="2" as={IoMdMailOpen} fontSize="64" />
            <Text mt="2" fontSize="2xl" fontWeight="bold">
              Obrigado!
            </Text>
            <Text mt="6" textAlign="center">
              Caso o seu email esteja registrado, foi enviado uma email para
              redefinição da sua senha.
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="secondary" isFullWidth onClick={onClose}>
              Ok
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
}
