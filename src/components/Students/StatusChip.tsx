import React from 'react';

import styled from 'styled-components';
import Chip from '@material-ui/core/Chip';
import Cancel from '@material-ui/icons/Cancel';
import Check from '@material-ui/icons/Check';
import Help from '@material-ui/icons/Help';

import { IStudentStatus } from '../../types/types';

type IThemeColor = 'primary' | 'secondary' | 'success' | 'info' | 'error';

export type IScreenViewProps = {
  status: IStudentStatus;
};


// eslint-disable-next-line react/jsx-props-no-spreading, @typescript-eslint/no-unused-vars
const StyledChip = styled(({ bgColor, ...props }) => <Chip {...props} />) <{ bgColor: IThemeColor }>`
  ${({ bgColor, theme }): string => `
    background: ${(bgColor && theme.palette[bgColor].dark) || ''};
    color: ${(bgColor && theme.palette[bgColor].contrastText) || ''};
    & svg {
      color: ${(bgColor && theme.palette[bgColor].contrastText) || ''};
    }
  `}
`;

const StatusChip: React.FC<IScreenViewProps> = ({ status }) => {
  const statusChip = {
    fine: {
      status: 'Tout va bien',
      Icon: Check,
      color: 'success',
    },
    question: {
      status: "J'ai une question",
      Icon: Help,
      color: 'info',
    },
    problem: {
      status: "J'ai un problème",
      Icon: Cancel,
      color: 'error',
    },
  }[status];

  return (
    <StyledChip
      bgColor={statusChip.color}
      icon={<statusChip.Icon />}
      label={statusChip.status}
    />
  );
};

export default StatusChip;
