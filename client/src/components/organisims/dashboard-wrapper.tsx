import { ReactNode } from 'react';
import { NavigationPanel } from '../molecules';

interface DashboardWrapperProps {
  children: ReactNode;
}

const DashboardWrapper = ({ children }: DashboardWrapperProps) => {
  return <NavigationPanel>{children}</NavigationPanel>;
};

export { DashboardWrapper };
