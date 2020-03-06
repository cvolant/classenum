import React, { useEffect, useState } from 'react';

import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Chip from '@material-ui/core/Chip';
import IconButton from '@material-ui/core/IconButton';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Cancel from '@material-ui/icons/Cancel';
import Check from '@material-ui/icons/Check';
import Help from '@material-ui/icons/Help';
import Email from '@material-ui/icons/Email';
import Eye from '@material-ui/icons/RemoveRedEye';
import FullScreen from '@material-ui/icons/Fullscreen';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

import Avatar from '../elements/Avatar';
import { IStudentStatus, IStudent } from '../../types/types';

import { getActivity } from '../../fixtures';

type IThemeColor = 'primary' | 'secondary' | 'success' | 'info' | 'error';

type IStatusChip = {
  status: string;
  Icon: (props: SvgIconProps) => JSX.Element;
  color: IThemeColor;
};

export type IStudentCardProps = {
  student: IStudent;
};

const statusChips: Record<IStudentStatus, IStatusChip> = {
  fine: {
    status: 'Tout va bien',
    Icon: Check,
    color: 'success',
  },
  question: {
    status: "J'ai une question",
    Icon: Help,
    color: 'info',
  },
  problem: {
    status: "J'ai un problème",
    Icon: Cancel,
    color: 'error',
  },
};

const StyledDiv = styled.div<{ loading?: boolean }>`
  pointer-events: none;
  ${({ loading }): string => (loading ? `
    background: black;
    opacity: 0.2;
    animation: 1s ease-in-out infinite alternate glow;

    @keyframes glow {
      from { opacity: 0.3 }
      to { opacity: 0.6 }
    }

    & > * {
      opacity: 0;
    }
  ` : '')}
`;

const StyledLinearProgress = styled(LinearProgress)`
  background: ${({ theme }): string => theme.palette.secondary.light};
`;

// eslint-disable-next-line react/jsx-props-no-spreading, @typescript-eslint/no-unused-vars
const StyledChip = styled(({ bgColor, ...props }) => <Chip {...props} />) <{ bgColor: IThemeColor }>`
  ${({ bgColor, theme }): string => `
    background: ${(bgColor && theme.palette[bgColor].main) || ''};
  `}
`;

const StudentCard: React.FC<IStudentCardProps> = ({ student }) => {
  const [seeScreen, setSeeScreen] = useState(false);
  const [isReady, setIsReady] = useState<boolean | number>(false);
  const statusChip = student.status ? statusChips[student.status] : undefined;

  useEffect((): () => void => (): void => {
    if (isReady && typeof isReady !== 'boolean') {
      clearTimeout(isReady);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleSeeScreen = (toSee?: boolean) => (): void => {
    const newSeeScreen = typeof toSee === 'boolean' ? toSee : !seeScreen;

    if (typeof isReady === 'number') {
      clearTimeout(isReady);
    }
    setIsReady(newSeeScreen
      ? setTimeout(() => {
        setIsReady(true);
      }, 6000) : false);
    setSeeScreen(newSeeScreen);
  };

  const activity = student.activities && student.activities[0]
    ? getActivity(student.activities[0])
    : undefined;

  return (
    <Card>
      <CardHeader
        avatar={<Avatar size="large" user={student} />}
        action={(
          <IconButton aria-label="settings">
            <FullScreen />
          </IconButton>
        )}
        title={student.name}
        subheader={statusChip ? (
          <StyledChip
            bgColor={statusChip.color}
            icon={<statusChip.Icon />}
            label={statusChip.status}
          />
        ) : undefined}
      />
      {seeScreen ? (
        <StyledDiv loading={isReady !== true}>
          <CardMedia
            allow="autoplay; encrypted-media;"
            allowFullScreen
            component="iframe"
            frameBorder="0"
            scrolling="no"
            src={student.screenView}
            title="vue de l'écran"
          />
        </StyledDiv>
      ) : (
        <CardContent>
          {activity
            ? (
              <>
                <Typography variant="body2" color="textSecondary" component="p">
                  Activité en cours :
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" paragraph>
                  {activity.name}
                </Typography>
              </>
            ) : (
              <Typography variant="body2" color="textSecondary" component="p" paragraph>
                Pas d&apos;activité en cours
              </Typography>
            )}
          <Typography variant="body2" color="textSecondary" component="p">
            Avancement dans l&apos;activité :
            {' '}
            {student.currentProgress}
            %
          </Typography>
          <StyledLinearProgress
            variant="determinate"
            color="secondary"
            value={student.currentProgress}
          />
        </CardContent>
      )}
      <CardActions disableSpacing>
        <IconButton aria-label="voir" onClick={toggleSeeScreen()}>
          <Eye />
        </IconButton>
        <IconButton aria-label="message">
          <Email />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default StudentCard;
