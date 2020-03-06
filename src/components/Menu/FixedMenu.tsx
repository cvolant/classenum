import React, { ReactNode } from 'react';

import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';

type IFixedMenuProps = {
  children: ReactNode | ReactNode[];
};

const StyledPaper = styled(Paper)`
  padding: ${({ theme }): string => theme.spacing(1, 2)};
  display: flex;
  flex-direction: column;
  color: ${({ theme }): string => theme.palette.text.secondary}
`;

const FixedMenu: React.FC<IFixedMenuProps> = ({ children }) => (
  <StyledPaper square>
    {children}
  </StyledPaper>
);

export default FixedMenu;
