import React, { ReactNode } from 'react';

import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';

type IFixedPanelProps = {
  children: ReactNode | ReactNode[];
};

const StyledPaper = styled(Paper)`
  ${({ theme }): string => `
    padding: ${theme.spacing(2)}px;
    display: flex;
    flex-direction: column;
    color: ${theme.palette.text.secondary};

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
