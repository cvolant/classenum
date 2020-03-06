import React from 'react';

import styled from 'styled-components';
import Button, { ButtonProps } from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

import Div from '../elements/Div';
import { IMenuItem } from '../../types/types';

type IMenuContentButtonProps = {
  center?: boolean;
};

export type IMenuContentProps = IMenuContentButtonProps & {
  menuItems: IMenuItem[];
};

// eslint-disable-next-line react/jsx-props-no-spreading, @typescript-eslint/no-unused-vars
const StyledButton = styled(({ center, ...props }) => <Button {...props} />)<ButtonProps & IMenuContentButtonProps>`
  ${({ center }): string => (!center ? `
    & .MuiButton-label {
      justify-content: flex-start;
    }
  ` : '')}
`;

const MenuContent: React.FC<IMenuContentProps> = ({ center, menuItems }) => (
  <>
    <Div flex align={center ? 'space-between' : 'flex-end'}>
      {menuItems.map(({ label, labelVisible, Icon }) => !labelVisible && (
        <IconButton aria-label={label} color="inherit" key={label}>
          {Icon && <Icon />}
        </IconButton>
      ))}
    </Div>
    {menuItems.map(({ label, labelVisible, Icon }) => labelVisible && (
      <StyledButton
        center={center}
        color="inherit"
        key={label}
        size="large"
        startIcon={Icon ? <Icon /> : undefined}
      >
        {label}
      </StyledButton>
    ))}
  </>
);
export default MenuContent;
