import React from 'react';

import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import useUser from '../../hooks/useUser';

import { IMessage, IUser } from '../../types/types';

type IMessageProps = {
  message: IMessage;
};

// eslint-disable-next-line react/jsx-props-no-spreading, @typescript-eslint/no-unused-vars
const StyledPaper = styled(({ emmiter, ...props }) => <Paper {...props} />)`
  ${({ emmiter, theme }): string => `
    align-self: ${emmiter ? 'flex-end' : 'flex-start'};
    background: ${emmiter ? theme.palette.primary.dark : theme.palette.grey[400]};
    color: ${theme.palette.common[emmiter ? 'white' : 'black']};
    padding: ${theme.spacing(1, 2)};
    max-width: 70%;
    margin: ${theme.spacing(1)}px;
  `}
`;

// eslint-disable-next-line react/jsx-props-no-spreading, @typescript-eslint/no-unused-vars
const StyledTypography = styled(({ emmiter, ...props }) => <Typography {...props} />)`
  ${({ emmiter }): string => `
    font-size: 0.75rem;
    font-style: italic;
    opacity: 0.6;
    ${emmiter ? 'text-align: right;' : ''}
  `}
`;

const Message: React.FC<IMessageProps> = ({ message }) => {
  const { _id } = useUser() as IUser;

  const emmiter = message.from === _id;

  return (
    <StyledPaper emmiter={emmiter}>
      <Typography>{message.content}</Typography>
      <StyledTypography emmiter={emmiter}>{message.date.toLocaleString()}</StyledTypography>
    </StyledPaper>
  );
};
export default Message;
