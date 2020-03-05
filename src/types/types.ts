export type IId = string;

export type IMessage = {
  from?: IId;
  content: string;
};

export type ISubject =
| 'philosophy'
| 'mathemetics'
| 'french'
| 'english'
| 'history'
| 'geography'
| 'sciences';

type ITeacher = {
  role: 'teacher';
  status?: 'busy' | 'available';
  subjects: ISubject | [ISubject];
};
type IStudent = {
  role: 'student';
  status?: 'fine' | 'needs help';
  activities?: [string];
  marks?: Record<ISubject, [number]>;
};
type IUserRoles = ITeacher | IStudent;

export type IUser = IUserRoles & {
  _id: IId;
  name: string;
  img?: string;
  messages?: [IMessage];
};
