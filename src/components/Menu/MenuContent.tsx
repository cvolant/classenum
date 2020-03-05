import React from 'react';

import styled from 'styled-components';
import Button, { ButtonProps } from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Help from '@material-ui/icons/Help';
import Add from '@material-ui/icons/Add';
import BarChart from '@material-ui/icons/BarChart';
import Email from '@material-ui/icons/Email';
import Launch from '@material-ui/icons/Launch';
import Settings from '@material-ui/icons/Settings';
import Videocam from '@material-ui/icons/Videocam';

import Div from '../Div';

const menuItems = [
  { label: 'Ajouter un élève', Icon: Add },
  { label: 'Envoyer un message à tous', Icon: Email },
  { label: 'Parler à tous en visio', Icon: Videocam },
  { label: 'Lancer une activité', Icon: Launch },
  { label: 'Voir les statistiques', Icon: BarChart },
];

type IMenuContentProps = {
  center?: boolean;
};

const StyledButton = styled(Button)<ButtonProps & IMenuContentProps>`
  ${({ center }): string => (!center ? `
    & .MuiButton-label {
      justify-content: flex-start;
    }
  ` : '')}
`;

const MenuContent: React.FC<IMenuContentProps> = ({ center }) => (
  <>
    <Div flex align={center ? 'space-between' : 'flex-end'}>
      <IconButton color="inherit" aria-label="aide">
        <Help />
      </IconButton>
      <IconButton color="inherit" aria-label="paramètres">
        <Settings />
      </IconButton>
    </Div>
    {menuItems.map(({ label, Icon }) => (
      <StyledButton
        center={center}
        color="inherit"
        size="large"
        startIcon={<Icon />}
      >
        {label}
      </StyledButton>
    ))}
  </>
);
export default MenuContent;
