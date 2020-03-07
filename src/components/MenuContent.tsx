import React from 'react';

import styled from 'styled-components';
import Button, { ButtonProps } from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

import Div from './elements/Div';
import { IMenuItem } from '../types/types';

type IMenuContentStyleProps = {
  center?: boolean;
};
type IMenuContentProps = IMenuContentStyleProps & {
  menuItems: IMenuItem[];
};

// eslint-disable-next-line react/jsx-props-no-spreading, @typescript-eslint/no-unused-vars
const StyledButton = styled(({ center, ...props }) => <Button {...props} />)<ButtonProps & IMenuContentStyleProps>`
  ${({ center }): string => (!center ? `
    & .MuiButton-label {
      justify-content: flex-start;
    }
  ` : '')}
`;

const MenuContent: React.FC<IMenuContentProps> = ({ center, menuItems }) => (
  <Div flex flexColumn>
    <Div flex align={center ? 'space-between' : 'flex-end'}>
      {menuItems.map(({
        disabled, Icon, label, labelVisible, onClick,
      }) => !labelVisible && (
        <IconButton
          aria-label={label}
          color="inherit"
          disabled={disabled}
          key={label}
          onClick={onClick}
        >
          {Icon && <Icon />}
        </IconButton>
      ))}
    </Div>
    {menuItems.map(({
      disabled, Icon, label, labelVisible, onClick,
    }) => labelVisible && (
      <StyledButton
        center={center}
        color="inherit"
        disabled={disabled}
        key={label}
        onClick={onClick}
        size="large"
        startIcon={Icon ? <Icon /> : undefined}
      >
        {label}
      </StyledButton>
    ))}
  </Div>
);

export default MenuContent;
