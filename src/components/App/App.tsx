import React, { useState, useEffect, ChangeEventHandler } from 'react';
import axios from 'axios';

import { CardList } from '../card-list';
import { Search } from '../search';

import { User } from '../../models/User';

import Style from './App.module.scss';

interface AppState {
  users: User[];
  search: string;
}

const initialState = {
  users: [],
  search: '',
};

export const App: React.FC = () => {
  const [state, setState] = useState<AppState>(initialState);
  const filterUsers = state.users.filter((user) =>
    user.name.toLowerCase().includes(state.search.toLowerCase())
  );

  useEffect(() => {
    axios
      .get<User[]>('https://jsonplaceholder.typicode.com/users')
      .then((res) =>
        setState((prevState) => ({ ...prevState, users: res.data }))
      )
      .catch((err: Error) => console.log(err.message));
  }, []);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) =>
    setState((prevState) => ({ ...prevState, search: e.target.value }));

  return (
    <div className={Style.container}>
      <h1>Monsters Rolodex</h1>
      <Search handleChange={handleChange} placeholder="search monsters" />
      <CardList users={filterUsers} />
    </div>
  );
};
