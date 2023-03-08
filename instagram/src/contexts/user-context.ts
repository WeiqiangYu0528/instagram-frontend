import { createContext } from 'react';
import { UserContextType } from './context-type';

const defaultState = {
    username: "",
  };

const UserContext = createContext<UserContextType>(defaultState);
export default UserContext;