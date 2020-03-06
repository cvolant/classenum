import { SvgIconProps } from '@material-ui/core/SvgIcon';

export type IMenuItem = {
  label: string;
  onClick?: () => void;
  to?: string;
  Icon?: (props: SvgIconProps) => JSX.Element;
  labelVisible?: boolean;
};

export type IId = string;

export type IMessage = {
  _id: IId;
  content: string;
  date: Date;
  from?: IId;
};

export type ISubject =
| 'humanities'
| 'latin'
| 'mathematics'
| 'history'
| 'geography'
| 'chemistry'
| 'physics';

export type IActivity = {
  _id: IId;
  name: string;
  date?: Date;
  subject: ISubject;
  teacher?: IId;
};

type ITeacher = {
  role: 'teacher';
  status?: 'busy' | 'available';
  subjects: ISubject | ISubject[];
};
type IStudent = {
  role: 'student';
  status?: 'fine' | 'needs help';
  activities?: IId[];
  marks?: Record<ISubject, number[]>;
};
type IUserRoles = ITeacher | IStudent;

export type IUser = IUserRoles & {
  _id: IId;
  name: string;
  img?: string;
  messages?: IId[];
  screenView?: string;
};
