import React, { useEffect } from 'react';

import styled from 'styled-components';
import { useTheme } from '@material-ui/core/styles';
import Search from '@material-ui/icons/Search';

import usePageData from '../hooks/usePageData';
import Div from '../components/elements/Div';

const Magnifier = styled(Search)`
  width: 100%;
  height: 100%;
  animation: 2s ease-in-out infinite alternate leftright;
  transform: translate(-50px);

  @keyframes leftright {
    from { transform: translate(-50px) }
    to { transform: translate(50px) }
  }
`;

const StyledDiv = styled(Div)`
  animation: 2s ease-in-out 1.2s infinite alternate bottomtop;
  transform: translateY(-50px);

  @keyframes bottomtop {
    from { transform: translateY(-50px) }
    to { transform: translate(50px) }
  }
`;

const NotFound: React.FC = () => {
  const [, setPageData] = usePageData();
  const theme = useTheme();

  useEffect(() => {
    if (setPageData) {
      setPageData({
        title: 'Page non trouvée',
        subtitle: '404',
      });
    }
  }, [setPageData]);

  return (
    <Div flex flexColumn align="center" w="100%">
      <StyledDiv flex align="center" h="50vh">
        <Magnifier htmlColor={theme.palette.grey[800]} />
      </StyledDiv>
    </Div>
  );
};
export default NotFound;
