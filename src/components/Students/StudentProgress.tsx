import React from 'react';

import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';

type IStudentProgressProps = {
  progress?: number;
};

const StyledLinearProgress = styled(LinearProgress)`
  ${({ theme }): string => `
    background: ${theme.palette.secondary.light};
    height: ${theme.spacing(1)}px;
    border-radius: ${theme.spacing(0.5)}px;
    margin-bottom: ${theme.spacing(2)}px;
  `}
`;

const StudentProgress: React.FC<IStudentProgressProps> = ({ progress }) => (progress ? (
  <>
    <Typography variant="body2" color="textSecondary" component="p">
      Avancement dans l&apos;activité :
      {' '}
      {progress}
      %
    </Typography>
    <StyledLinearProgress
      variant="determinate"
      color="secondary"
      value={progress}
    />
  </>
) : null);

export default StudentProgress;
