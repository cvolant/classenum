import { SvgIconProps } from '@material-ui/core/SvgIcon';

export type IMenuItem = {
  disabled?: boolean;
  Icon?: (props: SvgIconProps) => JSX.Element;
  label: string;
  labelVisible?: boolean;
  onClick?: () => void;
  to?: string;
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

export type ISession = {
  subject: string;
  name: string;
  teacher: IId;
};

export type IStudentStatus = 'fine' | 'question' | 'problem';
export type ITeacherStatus = 'busy' | 'available';

type ITeacherSpec = {
  role: 'teacher';
  status?: ITeacherStatus;
  subjects: ISubject | ISubject[];
};
type IStudentSpec = {
  role: 'student';
  activities?: IId[];
  currentProgress?: number;
  marks?: Record<ISubject, number[]>;
  status?: IStudentStatus;
};
type IUserSpec = ITeacherSpec | IStudentSpec;

type IUserCommon = {
  _id: IId;
  name: string;
  img?: string;
  messages?: IId[];
  screenView?: string;
};

export type IUser = IUserCommon & IUserSpec;
export type ITeacher = IUserCommon & ITeacherSpec;
export type IStudent = IUserCommon & IStudentSpec;
