'use client';

import React from 'react';
import { PopupMenu } from './popup-menu';
import { Header, SidebarMenuButton, Text, useSidebar } from '../atoms';
import { UserBadge } from './user-badge';
import { Bell, ChevronsUpDown, LogOut, ReceiptText, User } from 'lucide-react';

const menuItems = [
  {
    options: [
      {
        label: 'Account',
        icon: User,
      },
      {
        label: 'Billing',
        icon: ReceiptText,
      },
      {
        label: 'Notifications',
        icon: Bell,
      },
    ],
  },
  {
    options: [
      {
        label: 'Logout',
        icon: LogOut,
        showSeparator: true,
      },
    ],
  },
];

const NavUser = () => {
  const { isMobile } = useSidebar();
  return (
    <PopupMenu side={isMobile ? 'bottom' : 'right'} menu={menuItems}>
      <SidebarMenuButton className="h-14">
        <UserBadge name="John Doe" />
        <div className="flex flex-col text-xs">
          <Header variant="h6" className="truncate">
            John Doe
          </Header>
          <Text className="text-gray-500 truncate">bryanell1347@gmail.com</Text>
        </div>
        <ChevronsUpDown className="ml-auto size-4" />
      </SidebarMenuButton>
    </PopupMenu>
  );
};

export { NavUser };
