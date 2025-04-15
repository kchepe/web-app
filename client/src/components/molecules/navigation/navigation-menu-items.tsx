import { ChevronRight } from 'lucide-react';
import React from 'react';
import {
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from '../../atoms';
import { SlideToggle } from '../slide-toggle';
import { NavigationMenuItem } from './navigation-menu';

interface NavigationMenuItemsProps {
  item: NavigationMenuItem;
}

const NavigationMenuItems = ({ item }: NavigationMenuItemsProps) => {
  if (!item.items) {
    return (
      <SidebarMenuItem>
        <SidebarMenuButton tooltip={item.title}>
          {item.icon && <item.icon />}
          <span>{item.title}</span>
        </SidebarMenuButton>
      </SidebarMenuItem>
    );
  }

  return (
    <SidebarMenuItem>
      <SlideToggle
        trigger={
          <SidebarMenuButton tooltip={item.title}>
            {item.icon && <item.icon />}
            <span>{item.title}</span>
            <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
          </SidebarMenuButton>
        }
      >
        <SidebarMenuSub>
          {item.items?.map((subItem) => (
            <SidebarMenuSubItem key={subItem.title}>
              <SidebarMenuSubButton asChild>
                <a href={subItem.url}>
                  <span>{subItem.title}</span>
                </a>
              </SidebarMenuSubButton>
            </SidebarMenuSubItem>
          ))}
        </SidebarMenuSub>
      </SlideToggle>
    </SidebarMenuItem>
  );
};

export { NavigationMenuItems };
