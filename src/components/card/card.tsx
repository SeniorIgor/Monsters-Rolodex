import React, { memo } from 'react';

import { User } from '../../models/User';

import Style from './card.module.scss';

interface CardProps {
  user: User;
}

export const Card: React.FC<CardProps> = memo(({ user }) => {
  return (
    <div className={Style.cardContainer} key={user.id}>
      <img
        alt="user"
        src={`https://robohash.org/${user.id}?set=set2&size=180x180`}
      />
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
});
