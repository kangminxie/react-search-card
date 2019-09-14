import React from 'react';

import './searchbox.css';

const SearchBox = (props) => (
  <input
    className='search-box'
    type='search'
    placeholder='search your monsters'
    onChange={props.onSearchChange}
  />
);

export default SearchBox;
