import React from 'react';

import { IPanelUpdater } from '../../hooks/usePanel';

import Div from '../elements/Div';

const Messages: React.FC = () => (
  <Div flex flexColumn align="space-between">
    <Div h="100px" background="blue" />
    <Div h="200px" background="red" />
    <Div h="100px" background="yellow" />
  </Div>
);

export const displayMessages = (updatePanel?: IPanelUpdater) => (): void => {
  if (updatePanel) {
    updatePanel({ right: [<Messages key="messages" />] });
  }
};

export default Messages;
