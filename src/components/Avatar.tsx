import React from 'react';

import styled from 'styled-components';
import MuiAvatar from '@material-ui/core/Avatar';

type IStyledAvatarProps = {
  size?: 'small' | 'medium' | 'large';
  color?: string;
};

type IAvatarProps = IStyledAvatarProps & {
  user: {
    name: string;
    img?: string;
  };
};

const StyledMuiAvatar = styled(MuiAvatar)<IStyledAvatarProps>`
  ${({ color, size = 'medium', theme }): string => {
    const wh = theme.spacing({
      small: 3,
      medium: 5,
      large: 7,
    }[size]);
    return `
      height: ${wh};
      width: ${wh};
      ${color ? `color: ${color};` : ''}
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
    {!img ? name.split(' ').slice(0, 2).map((word) => word[0]) : undefined}
  </StyledMuiAvatar>
);

export default Avatar;
