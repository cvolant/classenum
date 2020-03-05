import activities from './activities';
import messages from './messages';
import users from './users';
import { IActivity, IMessage, IUser } from '../types/types';

type IFixtures = {
  activities: IActivity[];
  messages: IMessage[];
  users: IUser[];
};

const fixtures: IFixtures = { activities, messages, users };

const getFixtureAsync = <T extends keyof IFixtures>(
  fixture: T,
  callback: (res: IFixtures[T]) => void,
  delay = 2000,
): void => {
  setTimeout(() => {
    callback(fixtures[fixture]);
  }, delay);
};

export {
  getFixtureAsync,
  activities,
  messages,
  users,
};

export default getFixtureAsync;
