import { ReactNode } from 'react';
import { SidePanel } from '../molecules/side-panel';

interface DashboardWrapperProps {
  children: ReactNode;
}

const DashboardWrapper = ({ children }: DashboardWrapperProps) => {
  return <SidePanel>{children}</SidePanel>;
};

export { DashboardWrapper };
