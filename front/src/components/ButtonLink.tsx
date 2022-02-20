import { Button, ButtonProps } from '@chakra-ui/react';
import {
  Link as RRDLink,
  LinkProps as RRDLinkProps,
  useMatch,
  useResolvedPath,
} from 'react-router-dom';

export function ButtonLink({
  children,
  to,
  reloadDocument,
  replace,
  state,
  ...props
}: RRDLinkProps & ButtonProps) {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <RRDLink
        to={to}
        reloadDocument={reloadDocument}
        replace={replace}
        state={state}
      >
        <Button
          as="span"
          textDecor={{ textDecoration: match ? 'underline' : 'none' }}
          {...props}
        >
          {children}
        </Button>
      </RRDLink>
    </div>
  );
}
