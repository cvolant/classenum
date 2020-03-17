import React from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';

import Div from './Div';

const Loading: React.FC = () => (
  <Div flex flexColumn align="center" w="100%">
    <Div flex align="center" h="50vh">
      <CircularProgress />
    </Div>
  </Div>
);

export default Loading;
