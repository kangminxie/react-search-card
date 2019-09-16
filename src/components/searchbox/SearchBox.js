import React from 'react';

import './searchbox.css';

const SearchBox = ({ onSearchChange }) =>
  <input
    className='search-box'
    type='search'
    placeholder='search your monsters'
    onChange={onSearchChange}
  />;

export default SearchBox;
