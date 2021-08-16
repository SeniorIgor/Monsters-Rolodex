import React, { memo } from 'react';

import { Card } from '../card';
import { User } from '../../models/User';

import Style from './card-list.module.scss';

interface CardListProps {
  users: User[];
}

export const CardList: React.FC<CardListProps> = memo(({ users }) => {
  const renderUsers = users.map((user) => <Card user={user} key={user.id} />);

  return <div className={Style.cardList}>{renderUsers}</div>;
});
