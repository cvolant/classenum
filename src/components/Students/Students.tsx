import React, { useState } from 'react';

import styled from 'styled-components';
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';
import Email from '@material-ui/icons/Email';

import usePanel from '../../hooks/usePanel';
import LoadingCard from './LoadingCard';
import { displayMessages } from '../Messages/Messages';
import StudentCard from './StudentCard';
import Div from '../elements/Div';

import { IId, IStudent } from '../../types/types';
import ConfirmDialog from '../elements/ConfirmDialog';

export type IStudentsProps = {
  loading?: boolean;
  students?: IStudent[];
  handleRemoveStudent: (student: IStudent) => void;
};

const StyledFab = styled(Fab)`
  ${({ theme }): string => `
    position: fixed;
    bottom: ${theme.spacing(3)}px;
    right: ${theme.spacing(6)}px;
  `}
`;

const Students: React.FC<IStudentsProps> = ({ loading, students, handleRemoveStudent }) => {
  const [selected, setSelected] = useState<IId[]>([]);
  const [remove, setRemove] = useState<IStudent | undefined>(undefined);
  const { updatePanel } = usePanel();

  const toggleSelect = ({ _id }: { _id: IId }) => (): void => {
    const index = selected.indexOf(_id);
    if (index >= 0) {
      setSelected([
        ...selected.slice(0, index),
        ...selected.slice(index + 1),
      ]);
    } else {
      setSelected([
        _id,
        ...selected,
      ]);
    }
  };

  const handleCloseRemoveDialog = (): void => {
    setRemove(undefined);
  };

  const askConfirmRemove = (studentToRemove: IStudent) => (): void => {
    setRemove(studentToRemove);
  };

  const handleConfirmRemove = (studentToRemove: IStudent) => (): void => {
    handleRemoveStudent(studentToRemove);
    handleCloseRemoveDialog();
  };

  return (
    <Div p="20px" flexGrow overflow="auto">
      <Grid container spacing={2}>
        {students
          ? students.map((student) => (
            <Grid item xs={12} sm={6} lg={4} xl={5} key={student._id}>
              <StudentCard
                student={student}
                selected={selected.includes(student._id)}
                handleSelect={toggleSelect(student)}
                handleRemove={askConfirmRemove(student)}
              />
            </Grid>
          )) : loading && Array.from(Array(9)).map((_e, lcIndex) => (
            // eslint-disable-next-line react/no-array-index-key
            <Grid item xs={12} sm={6} lg={4} xl={5} key={lcIndex}>
              <LoadingCard />
            </Grid>
          ))}
      </Grid>
      {students && selected.length ? (
        <StyledFab
          color="secondary"
          disabled={!students}
          onClick={displayMessages(
            selected.map((sel) => students.find((student) => student._id === sel)) as IStudent[],
            updatePanel,
          )}
        >
          <Email />
        </StyledFab>
      ) : null}
      {remove && (
        <ConfirmDialog
          description="Êtes vous sûr de vouloir le retirer de la liste des étudiants suivis ?"
          handleCancel={handleCloseRemoveDialog}
          handleConfirm={handleConfirmRemove(remove)}
          open
          title={`Retirer ${remove.name} ?`}
        />
      )}
    </Div>
  );
};
export default Students;
