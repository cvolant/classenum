import { IMessage } from '../types/types';

export const messages: IMessage[] = [
  {
    _id: 'm0001',
    content: 'Bonne séance à tous !',
    date: new Date(1583405235951),
    from: 'u0001',
    to: [
      'u0003',
      'u0004',
      'u0005',
      'u0006',
      'u0007',
      'u0008',
      'u0009',
      'u00010',
    ],
  },
  {
    _id: 'm0002',
    content: 'Monsieur, vous aimez le baseball ?',
    date: new Date(1583405234951),
    from: 'u0004',
    to: ['u0001'],
  },
  {
    _id: 'm0003',
    content: "Bien sûr ! J'étais même très bon étant jeune.",
    date: new Date(1583405235051),
    from: 'u0001',
    to: ['u0004'],
  },
  {
    _id: 'm0004',
    content: 'Depuis quand vous avez arrêté ?',
    date: new Date(1583405235081),
    from: 'u0004',
    to: ['u0001'],
  },
  {
    _id: 'm0005',
    content: "... d'être jeune ? ^^",
    date: new Date(1583405235121),
    from: 'u0004',
    to: ['u0001'],
  },
  {
    _id: 'm0006',
    content: 'On règlera ça sur un terrain de baseball.',
    date: new Date(1583405235181),
    from: 'u0001',
    to: ['u0004'],
  },
  {
    _id: 'm0007',
    content: 'Quand vous voulez !',
    date: new Date(1583405235211),
    from: 'u0004',
    to: ['u0001'],
  },
  {
    _id: 'm0008',
    content: "Monsieur, y'a Gerard qui a un problème avec son ordi.",
    date: new Date(1583405235811),
    from: 'u0006',
    to: ['u0001'],
  },
  {
    _id: 'm0009',
    content: 'Comment ça : "y\'a" ? Pourquoi donc écorcher la langue dans vos message ? De la poésie, Steven, même ici, mettez de la poésie !',
    date: new Date(1583405235891),
    from: 'u0001',
    to: ['u0006'],
  },
  {
    _id: 'm0010',
    content: "Monsieur, vous êtes sûr que pour nos examens de fin d'année...",
    date: new Date(1583405235991),
    from: 'u0008',
    to: ['u0001'],
  },
  {
    _id: 'm0011',
    content: 'Monsieur, vous devriez venir voir ce match : ce sont des artistes !',
    date: new Date(1583405236191),
    from: 'u0004',
    to: ['u0001'],
  },
  {
    _id: 'm0012',
    content: "Carpe Diem, ça j'aime bien. On pourra refaire cette activité de temps en temps ?",
    date: new Date(1583405236191),
    from: 'u0007',
    to: ['u0001'],
  },
];

export default messages;
