// ./components/Header.js
import React from 'react';

// functional component
const Header = () => {
  const welcome = 'Game Start from Here - App';
  return (
    <div className="footer">
      <h1>{welcome}</h1>
      <hr />
    </div>
  );
}

export default Header;
