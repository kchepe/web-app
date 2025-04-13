import { ReactNode } from 'react';
import {
  Header,
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarInset,
  SidebarProvider,
} from '../atoms';

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
    </Sidebar>
    <SidebarInset>{children}</SidebarInset>
  </SidebarProvider>
);

export { SidePanel };
