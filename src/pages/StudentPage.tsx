import React, { useEffect, useState, useCallback } from 'react';

import Help from '@material-ui/icons/Help';
import BarChart from '@material-ui/icons/BarChart';
import Edit from '@material-ui/icons/Edit';
import Email from '@material-ui/icons/Email';
import Settings from '@material-ui/icons/Settings';
import Videocam from '@material-ui/icons/Videocam';

import usePanel, { IPanelContext } from '../hooks/usePanel';
import usePageData, { IPageDataContext } from '../hooks/usePageData';
import EditStudent from '../components/EditStudent/EditStudent';
import Loading from '../components/elements/Loading';
import MenuContent from '../components/MenuContent';
import Messages, { displayMessages } from '../components/Messages/Messages';
import NotFoundPage from './NotFoundPage';
import StudentPageContent from '../components/Students/StudentPageContent';

import {
  IId,
  IActivity,
  IStudent,
} from '../types/types';
import getFixtures from '../fixtures';

type IStudentPageProps = {
  id: IId;
};

const StudentPage: React.FC<IStudentPageProps> = ({ id }) => {
  const { updatePanel } = usePanel() as IPanelContext;
  const { pageData, updatePageData } = usePageData() as IPageDataContext;
  const [student, setStudent] = useState<IStudent | undefined>();
  const [activities, setActivities] = useState<IActivity[] | undefined>();
  const [loading, setLoading] = useState(true);

  const { menuItems } = pageData;


  const handleEditStudent = useCallback((studentToEdit: Partial<IStudent> & { _id: IId }): void => {
    setStudent((formerStudent) => {
      if (formerStudent) {
        updatePanel({ open: false, screenIndex: 1 });
        return {
          ...formerStudent,
          ...studentToEdit,
        };
      }
      return undefined;
    });
  }, [updatePanel]);

  useEffect(() => {
    updatePageData({
      menuItems: [
        {
          disabled: !student,
          Icon: Email,
          label: 'Envoyer un message',
          labelVisible: true,
          onClick: student ? displayMessages([student], updatePanel) : undefined,
        },
        {
          disabled: !student,
          Icon: Edit,
          label: 'Éditer',
          labelVisible: true,
          onClick: student ? (): void => {
            updatePanel({ screenIndex: 0 });
          } : undefined,
        },
        {
          disabled: true,
          Icon: Videocam,
          label: 'Parler en visio',
          labelVisible: true,
        },
        {
          disabled: true,
          label: "Statistiques de l'édudiant",
          labelVisible: true,
          Icon: BarChart,
        },
        {
          disabled: true,
          label: 'Paramètres',
          Icon: Settings,
        },
        {
          disabled: true,
          label: 'Aide',
          Icon: Help,
        },
      ],
    });
  }, [student, updatePageData, updatePanel]);

  useEffect(() => {
    let isMounted = true;
    getFixtures(['activities', 'users'], ({ activities: foundActivities, users }) => {
      if (isMounted && users) {
        const foundUser = users.find((findUser) => findUser._id === id);
        if (foundUser && foundUser.role === 'student') {
          const foundStudent = foundUser;
          setStudent(foundStudent);
          if (foundStudent) {
            updatePageData({
              title: foundStudent.name,
            });
          }
          if (foundActivities && foundStudent.activities) {
            const studentActivities = foundStudent.activities.map(
              (studentActivity) => foundActivities.find(
                (foundActivity) => foundActivity._id === studentActivity,
              ),
            ).filter((studentActivity) => !!studentActivity) as IActivity[];
            setActivities(studentActivities);
          }
        }
      }
      setLoading(false);
    });
    return (): void => {
      isMounted = false;
    };
  }, [id, updatePageData]);

  useEffect(() => {
    if (updatePanel && menuItems && student) {
      updatePanel({
        chapters: [
          student
            ? <EditStudent key="edit-student" handleEditStudent={handleEditStudent} student={student} />
            : null,
          <MenuContent key="menu-content" menuItems={menuItems} />,
          <Messages key="messages" recipients={[student]} />,
        ],
        screenIndex: 1,
      });
    }
  }, [handleEditStudent, menuItems, student, updatePanel]);

  if (loading) {
    return <Loading />;
  }

  if (student) {
    return <StudentPageContent student={student} activities={activities} />;
  }

  return <NotFoundPage />;
};

export default StudentPage;
