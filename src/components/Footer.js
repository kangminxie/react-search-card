// ./components/Footer.js
import React from 'react';

import Clock from './widgets/Clock';

// functional component
const Footer = () => {
  return (
    <div className="my-4">
      <p>Last updated by MountKingX on September 2019</p>
      <Clock />
    </div>
  );
}

export default Footer;
