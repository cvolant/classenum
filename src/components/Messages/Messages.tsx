import React, { ChangeEventHandler, useEffect, useState } from 'react';

import styled from 'styled-components';
import useTheme from '@material-ui/core/styles/useTheme';
import Avatar from '@material-ui/core/Avatar';
import Fab from '@material-ui/core/Fab';
import Chip from '@material-ui/core/Chip';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import Send from '@material-ui/icons/Send';

import usePanel, { IPanelUpdater } from '../../hooks/usePanel';
import Div from '../elements/Div';
import MessageList from './MessageList';

import { IUser, IMessage } from '../../types/types';

import getFixtures from '../../fixtures';

type IMessagesProps = {
  recipients: IUser[];
};

const NewMessageDiv = styled(Div)`
  ${({ theme }): string => `
    & > * {
      margin: ${theme.spacing(1)}px;
    }
  `}
`;

const StyledChip = styled(Chip)`
  ${({ theme }): string => `
    margin: ${theme.spacing(0.5)}px;
  `}
`;

const StyledTextField = styled(TextField)`
  flex-grow: 1;
`;

const Messages: React.FC<IMessagesProps> = ({ recipients }) => {
  const theme = useTheme();
  const [panel, updatePanel] = usePanel();
  const [newMessage, setNewMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [messages, setMessages] = useState<IMessage[] | undefined>();

  useEffect(() => {
    getFixtures(['messages'], ({ messages: foundMessages }) => {
      setMessages(foundMessages);
      setLoading(false);
    });
  }, [/* onLoad only */]);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setNewMessage(e.target.value);
  };

  const handleSend = (): void => {
    setNewMessage('');
  };

  const handleReturn = (): void => {
    console.log('From Messags, handleReturn. updatePanel:', updatePanel, 'panel:', panel);
    if (updatePanel) {
      updatePanel({ left: undefined });
    }
    console.log('From Messags, handleReturn. updatePanel:', updatePanel, 'panel:', panel);
  };

  return (
    <Div flex flexColumn>
      <Div flex alignItems="flex-start" p={theme.spacing(1, 0)}>
        <IconButton onClick={handleReturn}>
          <ChevronLeft />
        </IconButton>
        <Div flex flexWrap maxHeight="300px" overflow="auto">
          {[
            <Typography key="a">À : </Typography>,
            ...recipients.map(({ _id, name, img }) => (
              <StyledChip
                avatar={<Avatar alt={name} src={img} />}
                key={_id}
                label={name}
                size="small"
              />
            )),
          ]}
        </Div>
      </Div>
      <MessageList loading={loading} messages={messages} />
      <NewMessageDiv flex align="flex-start">
        <StyledTextField
          multiline
          onChange={handleChange}
          rowsMax={5}
          value={newMessage}
          variant="outlined"
        />
        <Fab color="secondary" onClick={handleSend}>
          <Send />
        </Fab>
      </NewMessageDiv>
    </Div>
  );
};

export const displayMessages = (recipients: IUser[], updatePanel?: IPanelUpdater) => (): void => {
  if (updatePanel) {
    updatePanel({ left: [<Messages key="messages" recipients={recipients} />] });
  }
};

export default Messages;
