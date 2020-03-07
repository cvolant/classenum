import React, { ReactNode } from 'react';

import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';

type IFixedPanelProps = {
  children: ReactNode | ReactNode[];
};

const StyledPaper = styled(Paper)`
  ${({ theme }): string => `
    color: ${theme.palette.text.secondary};
    display: flex;
    flex-direction: column;
    padding: ${theme.spacing(2)}px;
    width: 350px;

    & .MuiButton-label {
      white-space: nowrap;
    }
  `};
`;

const FixedPanel: React.FC<IFixedPanelProps> = ({ children }) => (
  <StyledPaper square>
    {children}
  </StyledPaper>
);

export default FixedPanel;
