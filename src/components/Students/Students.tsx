import React from 'react';

import Grid from '@material-ui/core/Grid';

import StudentCard from './StudentCard';
import LoadingCard from './LoadingCard';
import Div from '../elements/Div';

import users from '../../fixtures/users';

export type IStudentsProps = {
  subtitle?: string;
  title?: string;
};

const Students: React.FC<IStudentsProps> = () => (
  <Div p="20px" flexGrow overflow="auto">
    <Grid container spacing={2}>
      {users
        ? users.map((user) => (user.role === 'student'
          ? (
            <Grid item xs={12} sm={6} lg={4} xl={5} key={user._id}>
              <StudentCard student={user} />
            </Grid>
          ) : null
        )) : Array.from(Array(9)).map((_e, lcIndex) => (
          // eslint-disable-next-line react/no-array-index-key
          <Grid item xs={12} sm={6} lg={4} xl={5} key={lcIndex}>
            <LoadingCard />
          </Grid>
        ))}
    </Grid>
  </Div>
);

export default Students;
