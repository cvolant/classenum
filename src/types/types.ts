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
  subjects: ISubject | Array<ISubject>;
};
type IStudent = {
  role: 'student';
  status?: 'fine' | 'needs help';
  activities?: Array<IId>;
  marks?: Record<ISubject, Array<number>>;
};
type IUserRoles = ITeacher | IStudent;

export type IUser = IUserRoles & {
  _id: IId;
  name: string;
  img?: string;
  messages?: Array<IId>;
  screenView?: string;
};
