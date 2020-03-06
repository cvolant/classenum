import React from 'react';

import Help from '@material-ui/icons/Help';
import Add from '@material-ui/icons/Add';
import BarChart from '@material-ui/icons/BarChart';
import Email from '@material-ui/icons/Email';
import Launch from '@material-ui/icons/Launch';
import Settings from '@material-ui/icons/Settings';
import Videocam from '@material-ui/icons/Videocam';

import PageLayout from '../components/elements/PageLayout';
import Students from '../components/Students/Students';
import { IMenuItem } from '../types/types';

const menuItems: IMenuItem[] = [
  { label: 'Ajouter un élève', labelVisible: true, Icon: Add },
  { label: 'Envoyer un message à tous', labelVisible: true, Icon: Email },
  { label: 'Parler à tous en visio', labelVisible: true, Icon: Videocam },
  { label: 'Lancer une activité', labelVisible: true, Icon: Launch },
  { label: 'Voir les statistiques', labelVisible: true, Icon: BarChart },
  { label: 'Paramètres', Icon: Settings },
  { label: 'Aide', Icon: Help },
];

const ClassPage: React.FC = () => (
  <PageLayout title="Classe" subtitle="Matiere" menuItems={menuItems}>
    <Students />
  </PageLayout>
);

export default ClassPage;
