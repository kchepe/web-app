'use client';

import React from 'react';
import { PopupMenu } from '../popup-menu';
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar, Text } from '../../atoms';
import { UserBadge } from '../user-badge';
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

const NavigationUser = () => {
  const { isMobile } = useSidebar();
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <PopupMenu side={isMobile ? 'bottom' : 'right'} menu={menuItems}>
          <SidebarMenuButton
            className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            size="lg"
          >
            <UserBadge name="John Doe" className="h-8 w-8 rounded-lg" />
            <div className="grid flex-1 text-left text-sm leading-tight">
              <Text className="truncate font-semibold">John Doe</Text>
              <Text className="truncate text-xs">johndoe@gmail.com</Text>
            </div>
            <ChevronsUpDown className="ml-auto size-4" />
          </SidebarMenuButton>
        </PopupMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
};

export { NavigationUser };
