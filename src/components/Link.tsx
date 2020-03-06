import React from 'react';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';

import MuiLink, { LinkProps as MuiLinkProps } from '@material-ui/core/Link';

type ILinkProps = RouterLinkProps & MuiLinkProps;

const Link: React.FC<ILinkProps> = (props) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <MuiLink component={RouterLink} {...props} />
);
export default Link;
