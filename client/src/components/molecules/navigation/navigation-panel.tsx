import { ReactNode } from 'react';
import {
  Header,
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
} from '../../atoms';
import { NavigationUser } from './navigation-user';
import NavigationMenu from './navigation-menu';
import { NavigationContent } from './navigation-content';
import { GalleryVerticalEnd } from 'lucide-react';
import { NavigationLogo } from './navigation-logo';

interface SidePanelProps {
  children: ReactNode;
}

const NavigationPanel = ({ children }: SidePanelProps) => (
  <SidebarProvider>
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <NavigationLogo />
      </SidebarHeader>
      <SidebarContent>
        <NavigationMenu />
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <NavigationUser />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
    <SidebarInset>
      <NavigationContent>{children}</NavigationContent>
    </SidebarInset>
  </SidebarProvider>
);

export { NavigationPanel };
