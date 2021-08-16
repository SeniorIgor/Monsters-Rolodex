import React, { ChangeEventHandler } from 'react';

import Style from './search.module.scss';

interface SearchProps {
  placeholder: string;
  handleChange: ChangeEventHandler<HTMLInputElement>;
}

export const Search: React.FC<SearchProps> = ({
  placeholder,
  handleChange,
}) => {
  return (
    <input
      className={Style.search}
      type="search"
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};
