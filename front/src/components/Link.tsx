/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Icon,
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from '@chakra-ui/react';
import {
  Link as RRDLink,
  LinkProps as RRDLinkProps,
  useMatch,
  useResolvedPath,
} from 'react-router-dom';

interface LinkProps extends ChakraLinkProps, Omit<RRDLinkProps, 'color'> {
  icon?: any;
}

export function Link({
  children,
  to,
  reloadDocument,
  replace,
  state,
  icon,
  ...props
}: LinkProps) {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });
  console.log(match);

  return (
    <div>
      <RRDLink
        to={to}
        reloadDocument={reloadDocument}
        replace={replace}
        state={state}
      >
        <ChakraLink
          as="span"
          display="flex"
          alignItems="center"
          textDecor={{ textDecoration: match ? 'underline' : 'none' }}
          {...props}
        >
          {icon && <Icon as={icon} mr="2" />}
          {children}
        </ChakraLink>
      </RRDLink>
    </div>
  );
}
