import React from 'react';

import styled from 'styled-components';
import { useTheme } from '@material-ui/core/styles';
import Search from '@material-ui/icons/Search';

import Div from '../components/Div';

import PageLayout from '../components/PageLayout';

const Magnifier = styled(Search)`
  width: 30%;
  height: 30%;
  animation: 2s ease-in-out infinite alternate leftright;
  @keyframes leftright {
    from { transform: translate(-50px) }
    to { transform: translate(50px) }
  }
`;

const NotFound: React.FC = () => {
  const theme = useTheme();

  return (
    <PageLayout title="Page non trouvée" subtitle="404">
      <Div flex align="center">
        <Magnifier htmlColor={theme.palette.grey[300]} />
      </Div>
    </PageLayout>
  );
};
export default NotFound;
