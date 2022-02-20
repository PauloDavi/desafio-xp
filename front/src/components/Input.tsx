import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from '@chakra-ui/react';
import { RegisterOptions, useFormContext } from 'react-hook-form';

interface inputProps extends ChakraInputProps {
  name: string;
  label: string;
  options?: RegisterOptions;
}

export function Input({
  name,
  label,
  options,
  marginTop,
  ...inputProps
}: inputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <FormControl isInvalid={errors[name]} marginTop={marginTop}>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <ChakraInput
        id={name}
        placeholder="name"
        {...register(name, options)}
        {...inputProps}
      />
      <FormErrorMessage>
        {errors[name] && errors[name]?.message}
      </FormErrorMessage>
    </FormControl>
  );
}
