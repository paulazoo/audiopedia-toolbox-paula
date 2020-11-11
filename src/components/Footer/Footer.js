// Template for components
import React, { useEffect, useState } from 'react';

// Redux

// Style
import './Footer.css';

// Custom Components

export default function Footer() {
  return (
    <div className='footer'>
      <p>Accidentally deleted something you didn't mean to delete?</p>
      <br />
      <p>
        Please contact us at 
{' '}
<b>The Engineering Team</b>
      </p>
    </div>
  );
}
