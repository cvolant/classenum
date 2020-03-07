import React, { createRef, useEffect } from 'react';

import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';

import Div from '../elements/Div';

import { IMessage } from '../../types/types';
import Message from './Message';

type IMessageListProps = {
  loading?: boolean;
  messages?: IMessage[];
};

const MessageList: React.FC<IMessageListProps> = ({ loading, messages }) => {
  const messageListRef = createRef<HTMLDivElement>();

  useEffect(() => {
    if (messageListRef && messageListRef.current) {
      const messageList = messageListRef.current;
      messageList.scrollTop = messageList.scrollHeight;
    }
  }, [messages, messageListRef]);
  if (loading) {
    return <LinearProgress />;
  }
  return (
    <Div
      align="flex-start"
      flex
      flexColumn
      flexGrow
      overflow="auto"
      ref={messageListRef}
    >
      {messages
        ? messages.map((message) => <Message message={message} key={message._id} />)
        : <Typography key="no-message">Aucun message</Typography>}
    </Div>
  );
};

export default MessageList;
