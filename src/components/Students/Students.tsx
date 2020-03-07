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

export type IStudentsProps = {
  loading?: boolean;
  students?: IStudent[];
};

const StyledFab = styled(Fab)`
  ${({ theme }): string => `
    position: fixed;
    bottom: ${theme.spacing(3)}px;
    right: ${theme.spacing(6)}px;
  `}
`;

const Students: React.FC<IStudentsProps> = ({ loading, students }) => {
  const [selected, setSelected] = useState<IId[]>([]);
  const [, updatePanel] = usePanel();

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
              />
            </Grid>
          )) : loading && Array.from(Array(9)).map((_e, lcIndex) => (
            // eslint-disable-next-line react/no-array-index-key
            <Grid item xs={12} sm={6} lg={4} xl={5} key={lcIndex}>
              <LoadingCard />
            </Grid>
          ))}
      </Grid>
      {selected.length && (
        <StyledFab
          color="secondary"
          onClick={displayMessages(updatePanel)}
        >
          <Email />
        </StyledFab>
      )}
    </Div>
  );
};
export default Students;
