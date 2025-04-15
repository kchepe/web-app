'use client';

import React from 'react';
import { PopupMenu } from './popup-menu';

const NavUser = () => {
  return (
    <PopupMenu
      trigger={<button>trigger me</button>}
      menu={[
        {
          header: 'User',
          options: [
            {
              label: 'Profile',
              subOptions: [{ header: 'User Profile', options: [] }],
            },
            { label: 'Settings', onClick: () => console.log('Settings clicked') },
            { label: 'Logout', onClick: () => console.log('Logout clicked') },
          ],
        },
      ]}
    />
  );
};

export { NavUser };
