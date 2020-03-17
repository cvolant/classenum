import React, { useEffect, useState } from 'react';

import styled from 'styled-components';
import CardMedia from '@material-ui/core/CardMedia';

import Div from '../elements/Div';

export type IScreenViewProps = {
  height?: string;
  url: string;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars, react/jsx-props-no-spreading
const StyledDiv = styled(({ loading, ...props }) => <Div {...props} />)<{ loading?: boolean }>`
  pointer-events: none;
  flex-grow: 1;
  ${({ loading }): string => (loading ? `
    background: black;
    opacity: 0.2;
    animation: 1s ease-in-out infinite alternate glow;

    @keyframes glow {
      from { opacity: 0.3 }
      to { opacity: 0.6 }
    }

    & > * {
      opacity: 0;
    }
  ` : '')}
`;

const ScreenView: React.FC<IScreenViewProps> = ({ height, url }) => {
  const [isReady, setIsReady] = useState<boolean | number>(false);

  useEffect((): () => void => {
    const timeout = setTimeout(() => {
      setIsReady(true);
    }, 6000);
    setIsReady(timeout);
    return (): void => clearTimeout(timeout);
  }, []);

  return (
    <StyledDiv loading={isReady !== true} h={height}>
      <CardMedia
        allow="autoplay; encrypted-media;"
        allowFullScreen
        component="iframe"
        frameBorder="0"
        height="100%"
        scrolling="no"
        src={url}
        title="vue de l'écran"
      />
    </StyledDiv>
  );
};

export default ScreenView;
