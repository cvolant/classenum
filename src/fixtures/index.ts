import activities, { getActivity } from './activities';
import messages from './messages';
import session from './session';
import users from './users';
import {
  IActivity,
  IMessage,
  IUser,
  ISession,
} from '../types/types';

type IFixtures = {
  activities: IActivity[];
  messages: IMessage[];
  users: IUser[];
  session: ISession;
};

const allFixtures: IFixtures = {
  activities,
  messages,
  session,
  users,
};

const getFixtureAsync = <T extends keyof IFixtures>(
  fixtures: T[],
  callback: (res: Partial<IFixtures>) => void,
  delay = 1000,
): void => {
  setTimeout(() => {
    callback(fixtures.reduce(
      (prev, fixture) => ({
        ...prev,
        [fixture]: allFixtures[fixture],
      }),
      {},
    ));
  }, delay);
};

export {
  getFixtureAsync,
  getActivity,
  activities,
  messages,
  users,
};

export default getFixtureAsync;
