import { ReactNode } from 'react';
import {
  Header,
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
} from '../atoms';
import { NavUser } from './nav-user';

interface SidePanelProps {
  children: ReactNode;
}

const SidePanel = ({ children }: SidePanelProps) => (
  <SidebarProvider>
    <Sidebar>
      <SidebarHeader>
        <Header variant="h3" className="font-extrabold">
          Logo.
        </Header>
      </SidebarHeader>
      <SidebarContent></SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <NavUser />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
    <SidebarInset>{children}</SidebarInset>
  </SidebarProvider>
);

export { SidePanel };
