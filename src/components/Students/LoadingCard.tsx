import React from 'react';

import styled from 'styled-components';
import Card from '@material-ui/core/Card';

import Div from '../elements/Div';

const StyledCard = styled(Card)`
  opacity: 0.2;
  animation: 1s ease-in-out infinite alternate glow;

  @keyframes glow {
    from { opacity: 0.3 }
    to { opacity: 0.6 }
  }
`;

const LoadingCard: React.FC = () => (
  <StyledCard>
    <Div h="400px" />
  </StyledCard>
);

export default LoadingCard;
