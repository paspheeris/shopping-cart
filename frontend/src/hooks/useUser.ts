import {useState} from 'react';
import {User} from '../../../common/types/User';

export const users = [
  {
    "id": 1,
    "email": "test.user@gmail.com"
  },
  {
    "id": 2,
    "email": "test.user2@gmail.com"
  }
]

const useUser = () => {
  return useState<User>(users[0]);
}

export default useUser;
