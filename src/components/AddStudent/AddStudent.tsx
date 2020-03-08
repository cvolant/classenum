import React, {
  ChangeEventHandler,
  FormEventHandler,
  useState,
} from 'react';

import styled from 'styled-components';
import useTheme from '@material-ui/core/styles/useTheme';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Check from '@material-ui/icons/Check';

import { Typography } from '@material-ui/core';
import usePanel from '../../hooks/usePanel';
import Div from '../elements/Div';

import { IStudent } from '../../types/types';

type IAddStudentProps = {
  handleAddStudent: (student: Partial<IStudent> & { name: string }) => void;
};

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;

  & > * {
    margin: ${({ theme }): string => theme.spacing(1)}px;
  }
`;

const AddStudent: React.FC<IAddStudentProps> = ({ handleAddStudent }) => {
  const theme = useTheme();
  const { nextScreen } = usePanel();
  const [name, setName] = useState('');

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setName(e.target.value);
  };

  const handleSubmit: FormEventHandler = (e): void => {
    e.preventDefault();
    if (name) {
      handleAddStudent({ name });
    }
    setName('');
  };

  return (
    <Div flex flexColumn>
      <Div flex align="flex-end" alignItems="flex-start" p={theme.spacing(1, 0)}>
        <IconButton onClick={nextScreen}>
          <ChevronRight />
        </IconButton>
      </Div>
      <Typography>Ajouter un étudiant ?</Typography>
      <StyledForm noValidate onSubmit={handleSubmit}>
        <TextField
          autoFocus
          label="Nom de l'étudiant"
          name="name"
          onChange={handleChange}
          required
          value={name}
          variant="outlined"
        />
        <Button
          color="primary"
          startIcon={<Check />}
          type="submit"
          variant="contained"
        >
          Valider
        </Button>
      </StyledForm>
    </Div>
  );
};

export default AddStudent;
