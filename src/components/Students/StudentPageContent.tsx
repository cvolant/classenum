import React from 'react';

import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import ScreenView from './ScreenView';
import StudentProgress from './StudentProgress';
import Div from '../elements/Div';
import { IStudent, IActivity } from '../../types/types';

type IStudentPageContentProps = {
  student: IStudent;
  activities?: IActivity[];
};

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const StudentPageContent: React.FC<IStudentPageContentProps> = ({ student, activities }) => (
  <Div p="20px" flexGrow overflow="auto">
    <StyledCard>
      <CardContent>
        <Typography variant="h6">Vue de l&apos;écran</Typography>
      </CardContent>
      {student.screenView && <ScreenView url={student.screenView} />}
      <CardContent>
        {activities?.length
          ? (
            <>
              <Typography variant="h6">
                Activité en cours
              </Typography>
              <Typography paragraph>
                {activities[0].name}
              </Typography>
              <StudentProgress progress={student.currentProgress} />
            </>
          ) : (
            <Typography paragraph>
              Pas d&apos;activité en cours
            </Typography>
          )}
        {activities && activities.length > 1
          ? (
            <>
              <Typography variant="h6">Précédentes activités</Typography>
              {activities.slice(1).map((mapActivity) => (
                <Typography key={mapActivity._id}>
                  {mapActivity.name}
                </Typography>
              ))}
            </>
          ) : null}
      </CardContent>
    </StyledCard>
  </Div>
);

export default StudentPageContent;
