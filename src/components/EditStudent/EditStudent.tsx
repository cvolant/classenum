import React, {
  ChangeEventHandler,
  FormEventHandler,
  useState,
  useEffect,
} from 'react';

import styled from 'styled-components';
import useTheme from '@material-ui/core/styles/useTheme';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Check from '@material-ui/icons/Check';

import { Typography } from '@material-ui/core';
import usePanel, { IPanelContext } from '../../hooks/usePanel';
import Div from '../elements/Div';

import { IStudent, IId, IActivity } from '../../types/types';

import getFixtures from '../../fixtures';

type IEditStudentProps = {
  handleAddStudent?: (student: Partial<IStudent> & { name: string }) => void;
  handleEditStudent?: (student: Partial<IStudent> & { _id: IId }) => void;
  student?: IStudent;
};

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;

  & > * {
    margin: ${({ theme }): string => theme.spacing(1)}px;
  }
`;

const EditStudent: React.FC<IEditStudentProps> = ({
  handleAddStudent, handleEditStudent, student,
}) => {
  const theme = useTheme();
  const { nextScreen } = usePanel() as IPanelContext;
  const [name, setName] = useState('');
  const [activity, setActivity] = useState<IId | ''>('');
  const [activities, setActivities] = useState<IActivity[] | undefined>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (student && handleEditStudent) {
      setName(student.name);
    }
  }, [student, handleEditStudent]);

  useEffect(() => {
    let isMounted = true;
    getFixtures(['activities'], ({ activities: foundActivities }) => {
      if (isMounted) {
        setActivities(foundActivities);
        if (student && handleEditStudent) {
          setActivity((student.activities && student.activities[0]) || '');
        }
        setLoading(false);
      }
    });
    return (): void => {
      isMounted = false;
    };
  }, [student, handleEditStudent]);

  const handleChangeActivity: ChangeEventHandler<HTMLInputElement> = (e) => {
    setActivity(e.target.value);
  };

  const handleChangeName: ChangeEventHandler<HTMLInputElement> = (e) => {
    setName(e.target.value);
  };

  const handleSubmit: FormEventHandler = (e): void => {
    e.preventDefault();
    if (name && student && handleEditStudent) {
      handleEditStudent({
        _id: student._id,
        name,
        activities: (student.activities && student.activities[0]) === activity || !activity
          ? student.activities || []
          : [activity, ...student.activities || []],
      });
    } else if (name && handleAddStudent) {
      handleAddStudent({ name, activities: activity ? [activity] : [] });
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
      <Typography align="center">
        {student && handleEditStudent
          ? `Modifier l'étudiant ${student.name}`
          : 'Ajouter un étudiant ?'}
      </Typography>
      <StyledForm noValidate onSubmit={handleSubmit}>
        <TextField
          autoFocus
          label="Nom de l'étudiant"
          name="name"
          onChange={handleChangeName}
          required
          value={name}
          variant="outlined"
        />
        <TextField
          select
          disabled={!activities}
          label={loading ? 'Chargement' : 'Activité'}
          value={activity}
          onChange={handleChangeActivity}
          variant="outlined"
        >
          {(activities || []).map((option) => (
            <MenuItem key={option._id} value={option._id}>
              {option.name}
            </MenuItem>
          ))}
        </TextField>
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

export default EditStudent;
