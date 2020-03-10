/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useMemo, useState } from 'react';

import Help from '@material-ui/icons/Help';
import Add from '@material-ui/icons/Add';
import BarChart from '@material-ui/icons/BarChart';
import Email from '@material-ui/icons/Email';
import Launch from '@material-ui/icons/Launch';
import Settings from '@material-ui/icons/Settings';
import Videocam from '@material-ui/icons/Videocam';

import usePanel from '../hooks/usePanel';
import usePageData from '../hooks/usePageData';
import EditStudent from '../components/EditStudent/EditStudent';
import MenuContent from '../components/MenuContent';
import Messages, { displayMessages } from '../components/Messages/Messages';
import Students from '../components/Students/Students';
import { IMenuItem, IStudent, IId } from '../types/types';

import getFixtures from '../fixtures';

const ClassPage: React.FC = () => {
  const { updatePanel } = usePanel();
  const [pageData, updatePageData] = usePageData();
  const [students, setStudents] = useState<IStudent[] | undefined>();
  const [loading, setLoading] = useState(true);

  const { menuItems } = pageData;

  const handleRemoveStudent = (studentToRemove: IStudent): void => {
    setStudents(students?.filter((filterStudent) => filterStudent._id !== studentToRemove._id));
  };

  const handleAddStudent = (studentToAdd: Partial<IStudent> & { name: string }): void => {
    setStudents([
      ...students || [],
      {
        _id: students ? `u${parseInt(students[students.length - 1]._id.slice(1), 10) as number}` : 'n0001',
        ...studentToAdd,
        role: 'student',
      },
    ]);
    updatePanel({ open: false, screenIndex: 1 });
  };

  const handleEditStudent = (studentToEdit: Partial<IStudent> & { _id: IId }): void => {
    if (students) {
      const studentIndex = students.findIndex((fiStudent) => fiStudent._id === studentToEdit._id);
      setStudents([
        ...students.slice(0, studentIndex),
        {
          ...students[studentIndex],
          ...studentToEdit,
        },
        ...students.slice(studentIndex + 1),
      ]);
      updatePanel({ open: false, screenIndex: 1 });
    }
  };

  useEffect(() => {
    const newMenuItems: IMenuItem[] = [
      {
        Icon: Add,
        label: 'Ajouter un élève',
        labelVisible: true,
        onClick: (): void => updatePanel({ screenIndex: 0 }),
      },
      {
        disabled: !students,
        Icon: Email,
        label: 'Envoyer un message à tous',
        labelVisible: true,
        onClick: students ? displayMessages(students, updatePanel) : undefined,
      },
      {
        disabled: true,
        Icon: Videocam,
        label: 'Parler à tous en visio',
        labelVisible: true,
      },
      {
        disabled: true,
        label: 'Lancer une activité',
        labelVisible: true,
        Icon: Launch,
      },
      {
        disabled: true,
        label: 'Voir les statistiques',
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
    ];
    if (updatePageData) {
      updatePageData({ menuItems: newMenuItems });
    }
  }, [students]);

  useEffect(() => {
    getFixtures(['session', 'users'], ({ session, users }) => {
      if (updatePageData && session) {
        updatePageData({
          title: session.name,
          subtitle: session.subject,
        });
      }
      setStudents(users?.filter((user) => user.role === 'student') as IStudent[]);
      setLoading(false);
    });
  }, [/* onLoad only */]);

  useEffect(() => {
    if (updatePanel && menuItems && students) {
      updatePanel({
        chapters: [
          <EditStudent key="add-student" handleAddStudent={handleAddStudent} />,
          <MenuContent key="menu-content" menuItems={menuItems} />,
          <Messages key="messages" recipients={students} />,
        ],
        screenIndex: 1,
      });
    }
  }, [menuItems, students]);

  return useMemo(() => (
    <Students
      loading={loading}
      handleRemoveStudent={handleRemoveStudent}
      handleEditStudent={handleEditStudent}
      students={students}
    />
  ), [students, loading]);
};
export default ClassPage;
