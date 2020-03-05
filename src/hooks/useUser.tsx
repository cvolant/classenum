import { users } from '../fixtures';
import { IUser } from '../types/types';

const useUser = (): IUser | null => users[0];

export default useUser;
