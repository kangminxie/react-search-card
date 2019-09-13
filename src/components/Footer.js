// ./components/Footer.js
import React from 'react';

import Clock from './widgets/Clock';

// functional component
const Footer = () => {
  return (
    <div className="footer">
      <p>Updated by MountKingX on August 2019</p>
      <Clock />
    </div>
  );
}

export default Footer;
