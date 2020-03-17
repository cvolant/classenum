import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Clear from '@material-ui/icons/Clear';

import useScreen from '../../hooks/useScreen';
import Avatar from '../elements/Avatar';
import ScreenView from './ScreenView';
import StatusChip from './StatusChip';
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
`;

const StyledCardContent = styled(CardContent)`
  display: flex;
  justify-content: space-between;
`;

const StudentPageContent: React.FC<IStudentPageContentProps> = ({ student, activities }) => {
  const [seeScreen, setSeeScreen] = useState(true);
  const history = useHistory();
  const screen = useScreen();

  const goBack = (): void => {
    history.push('/');
  };

  const toggleSeeScreen = (toSee?: boolean) => (): void => {
    setSeeScreen(typeof toSee === 'boolean' ? toSee : !seeScreen);
  };

  return (
    <Div p="20px" flexGrow overflow="auto">
      <StyledCard>
        <CardHeader
          avatar={<Avatar size="large" user={student} />}
          action={(
            <IconButton onClick={goBack}>
              <Clear />
            </IconButton>
          )}
          subheader={student.status ? (
            <StatusChip status={student.status} />
          ) : undefined}
        />
        {student.screenView && (
          <>
            <StyledCardContent>
              <Typography variant="h6">
                Vue de l&apos;écran
              </Typography>
              <Button onClick={toggleSeeScreen()}>
                {seeScreen ? "Cacher l'écran" : "Montrer l'écran"}
              </Button>
            </StyledCardContent>
            <Collapse in={seeScreen} timeout="auto" unmountOnExit>
              <ScreenView height={screen.xs ? '200px' : '500px'} url={student.screenView} />
            </Collapse>
          </>
        )}
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
};

export default StudentPageContent;
