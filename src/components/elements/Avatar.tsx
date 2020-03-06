import React from 'react';

import styled from 'styled-components';
import MuiAvatar from '@material-ui/core/Avatar';

import { IUser } from '../../types/types';

type IStyledAvatarProps = {
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'secondary' | 'info' | 'error' | 'success';
};

type IAvatarProps = IStyledAvatarProps & {
  user: IUser;
};

const StyledMuiAvatar = styled(MuiAvatar)<IStyledAvatarProps>`
  ${({ color = 'primary', size = 'medium', theme }): string => {
    const wh = theme.spacing({
      small: 3,
      medium: 5,
      large: 7,
    }[size]);
    return `
      height: ${wh}px;
      width: ${wh}px;
      background-color: ${theme.palette[color].main};
      color: ${theme.palette[color].contrastText};
    `;
  }}
`;

const Avatar: React.FC<IAvatarProps> = ({
  user: { img, name },
  size,
  color,
}) => (
  <StyledMuiAvatar
    alt={name}
    color={color}
    size={size}
    src={img}
  >
    {!img ? name.split(' ').map((word) => word[0]).join('') : undefined}
  </StyledMuiAvatar>
);

export default Avatar;
