import { IUser } from '../types/types';

export const users: Array<IUser> = [
  {
    _id: 'u0001',
    img: '../assets/images/jkeating.jpg',
    messages: [
      'm0001',
    ],
    name: 'John Keating',
    role: 'teacher',
    status: 'available',
    subjects: 'humanities',
  },
  {
    _id: 'u0002',
    name: 'Mac Allister',
    role: 'teacher',
    subjects: 'latin',
  },
  {
    _id: 'u0003',
    activities: ['a0001', 'a0002'],
    img: '../assets/images/tanderson.jpg',
    messages: [
      'm0001',
    ],
    name: 'Todd Anderson',
    role: 'student',
    screenView: 'https://www.youtube.com/embed/0rxiKoCv-98?autoplay=1&amp;start=538&amp;mute=1&amp;controls=0',
    status: 'fine',
  },
  {
    _id: 'u0004',
    activities: ['a0001', 'a0002'],
    img: '../assets/images/nperry.jpg',
    messages: [
      'm0001',
    ],
    name: 'Neil Perry',
    role: 'student',
    screenView: 'https://www.youtube.com/embed/TRXw85NLMY8?autoplay=1&amp;start=538&amp;mute=1&amp;controls=0',
    status: 'fine',
  },
  {
    _id: 'u0005',
    activities: ['a0001'],
    img: '../assets/images/koverstreet.jpg',
    messages: [
      'm0001',
    ],
    name: 'Knox Overstreet',
    role: 'student',
    screenView: 'https://www.youtube.com/embed/hJgQCbRsq-I?autoplay=1&amp;start=28&amp;mute=1&amp;controls=0',
    status: 'fine',
  },
  {
    _id: 'u0006',
    activities: ['a0001', 'a0002', 'a0004'],
    img: '../assets/images/cdalton.jpg',
    messages: [
      'm0001',
    ],
    name: 'Charlie Dalton',
    role: 'student',
    screenView: 'https://www.youtube.com/embed/0jwFrbcYOFw?autoplay=1&amp;start=58&amp;mute=1&amp;controls=0',
    status: 'fine',
  },
  {
    _id: 'u0007',
    activities: ['a0001', 'a0003', 'a0005'],
    img: '../assets/images/rcameron.jpg',
    messages: [
      'm0001',
    ],
    name: 'Richard Cameron',
    role: 'student',
    screenView: 'https://www.youtube.com/embed/JaBIffQ20aM?autoplay=1&amp;start=10&amp;mute=1&amp;controls=0',
    status: 'fine',
  },
  {
    _id: 'u0008',
    activities: ['a0001', 'a0003'],
    img: '../assets/images/smeeks.jpg',
    messages: [
      'm0001',
    ],
    name: 'Steven Meeks',
    role: 'student',
    screenView: 'https://www.youtube.com/embed/WMdFnFjyR48?autoplay=1&amp;start=295&amp;mute=1&amp;controls=0',
    status: 'fine',
  },
  {
    _id: 'u0009',
    activities: ['a0001', 'a0003'],
    img: '../assets/images/gpitts.jpg',
    messages: [
      'm0001',
    ],
    name: 'Gerard Pitts',
    role: 'student',
    screenView: 'https://www.youtube.com/embed/-WoQsLZmynY?autoplay=1&amp;start=102&amp;mute=1&amp;controls=0',
    status: 'fine',
  },
  {
    _id: 'u0010',
    activities: ['a0001', 'a0004'],
    messages: [
      'm0001',
    ],
    name: 'Chet Danburry',
    role: 'student',
    screenView: 'https://www.youtube.com/embed/kw5N3w0m6hU?autoplay=1&amp;start=62&amp;mute=1&amp;controls=0',
    status: 'fine',
  },
];

export default users;
