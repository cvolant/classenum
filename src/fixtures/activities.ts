import { IActivity } from '../types/types';

export const activities: Array<IActivity> = [
  {
    _id: 'a0001',
    date: new Date(1583405100951),
    name: 'Exercice pratique : Carpe Diem !',
    subject: 'humanities',
    teacher: 'u0001',
  },
  {
    _id: 'a0002',
    date: new Date(1583405097351),
    name: 'Les déclinaisons',
    subject: 'latin',
    teacher: 'u0002',
  },
  {
    _id: 'a0003',
    date: new Date(1583405097351),
    name: 'Intégrales et primitives',
    subject: 'mathematics',
  },
  {
    _id: 'a0004',
    date: new Date(1583405095551),
    name: "TP: Diffraction et longueur d'ondes",
    subject: 'physics',
  },
  {
    _id: 'a0005',
    date: new Date(1583405095551),
    name: 'TP: Électrolyse et vitesse des ions',
    subject: 'chemistry',
  },
];

export default activities;
