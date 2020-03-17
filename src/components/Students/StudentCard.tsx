import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Chip from '@material-ui/core/Chip';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Cancel from '@material-ui/icons/Cancel';
import Check from '@material-ui/icons/Check';
import Checked from '@material-ui/icons/CheckBoxOutlined';
import Edit from '@material-ui/icons/Edit';
import Email from '@material-ui/icons/Email';
import Eye from '@material-ui/icons/RemoveRedEye';
import Help from '@material-ui/icons/Help';
import Remove from '@material-ui/icons/RemoveCircleOutline';
import Unchecked from '@material-ui/icons/CheckBoxOutlineBlank';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

import usePanel, { IPanelContext } from '../../hooks/usePanel';
import Avatar from '../elements/Avatar';
import EditStudent from '../EditStudent/EditStudent';
import ScreenView from './ScreenView';
import StudentProgress from './StudentProgress';
import { displayMessages } from '../Messages/Messages';
import { IStudentStatus, IStudent, IId } from '../../types/types';

import { getActivity } from '../../fixtures';

type IThemeColor = 'primary' | 'secondary' | 'success' | 'info' | 'error';

type IStatusChip = {
  status: string;
  Icon: (props: SvgIconProps) => JSX.Element;
  color: IThemeColor;
};

export type IStudentCardProps = {
  student: IStudent;
  selected?: boolean;
  handleSelect: () => void;
  handleEditStudent?: (student: Partial<IStudent> & { _id: IId }) => void;
  handleRemove: () => void;
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

const StyledCard = styled(Card) <{ selected?: boolean }>`
  ${({ theme, selected }): string => `
    transition: ${theme.transitions.create('background')};
    ${(selected ? `
      background: radial-gradient(circle at bottom center,
        ${theme.palette.grey[600]} 0%,
        ${theme.palette.grey[800]} 80%,
        ${theme.palette.grey[900]} 100%
      );
      border: 1px solid ${theme.palette.grey[600]}
    ` : `
      border: 1px solid ${theme.palette.background.paper};
    `)}
  `}
`;

// eslint-disable-next-line react/jsx-props-no-spreading, @typescript-eslint/no-unused-vars
const StyledChip = styled(({ bgColor, ...props }) => <Chip {...props} />) <{ bgColor: IThemeColor }>`
  ${({ bgColor, theme }): string => `
    background: ${(bgColor && theme.palette[bgColor].dark) || ''};
    color: ${(bgColor && theme.palette[bgColor].contrastText) || ''};
    & svg {
      color: ${(bgColor && theme.palette[bgColor].contrastText) || ''};
    }
  `}
`;

const StyledCardActions = styled(CardActions)`
  display: flex;
  justify-content: space-between;
`;

const StudentCard: React.FC<IStudentCardProps> = ({
  student, selected, handleSelect, handleRemove, handleEditStudent,
}) => {
  const history = useHistory();
  const { updatePanel } = usePanel() as IPanelContext;
  const [seeScreen, setSeeScreen] = useState(false);
  const statusChip = student.status ? statusChips[student.status] : undefined;

  const toggleSeeScreen = (toSee?: boolean) => (): void => {
    setSeeScreen(typeof toSee === 'boolean' ? toSee : !seeScreen);
  };

  const goToStudentPage = (): void => {
    history.push(`/eleve/${student._id}-${student.name.toLowerCase().replace(' ', '-')}`);
  };

  const handleEdit = (): void => {
    updatePanel({
      chapters: [<EditStudent key="edit-student" handleEditStudent={handleEditStudent} student={student} />],
      screenIndex: 0,
      open: true,
    });
  };

  const activity = student.activities && student.activities[0]
    ? getActivity(student.activities[0])
    : undefined;

  return (
    <StyledCard selected={selected}>
      <CardActionArea onClick={goToStudentPage}>
        <CardHeader
          avatar={<Avatar size="large" user={student} />}
          title={student.name}
          subheader={statusChip ? (
            <StyledChip
              bgColor={statusChip.color}
              icon={<statusChip.Icon />}
              label={statusChip.status}
            />
          ) : undefined}
        />
      </CardActionArea>
      {seeScreen && student.screenView ? <ScreenView url={student.screenView} /> : (
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
          <StudentProgress progress={student.currentProgress} />
        </CardContent>
      )}
      <StyledCardActions disableSpacing>
        <div>
          <IconButton
            aria-label="voir"
            disabled={!student.screenView}
            onClick={toggleSeeScreen()}
          >
            <Eye />
          </IconButton>
          <IconButton
            aria-label="message"
            onClick={displayMessages([student], updatePanel)}
          >
            <Email />
          </IconButton>
          <IconButton
            aria-label={selected ? 'déselectionner' : 'selectionner'}
            onClick={handleSelect}
          >
            {selected ? <Checked /> : <Unchecked />}
          </IconButton>
        </div>
        <div>
          <IconButton
            aria-label="editer"
            onClick={handleEdit}
          >
            <Edit />
          </IconButton>
          <IconButton
            aria-label="retirer"
            onClick={handleRemove}
          >
            <Remove />
          </IconButton>
        </div>
      </StyledCardActions>
    </StyledCard>
  );
};

export default StudentCard;
