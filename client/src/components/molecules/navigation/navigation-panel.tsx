import { ReactNode } from 'react';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarInset,
  SidebarProvider,
  SidebarRail,
} from '../../atoms';

interface SidePanelProps {
  children: ReactNode;
  header: ReactNode;
  footer: ReactNode;
  menuList: ReactNode;
}

const NavigationPanel = ({ children, header, footer, menuList }: SidePanelProps) => (
  <SidebarProvider>
    <Sidebar collapsible="icon">
      <SidebarHeader>{header}</SidebarHeader>
      <SidebarContent>{menuList}</SidebarContent>
      <SidebarFooter>{footer}</SidebarFooter>
      <SidebarRail />
    </Sidebar>
    <SidebarInset>{children}</SidebarInset>
  </SidebarProvider>
);

export { NavigationPanel };
