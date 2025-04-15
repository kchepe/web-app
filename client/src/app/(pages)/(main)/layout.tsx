import { DashboardWrapper } from '@/components';
import { ReactNode } from 'react';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => (
  <DashboardWrapper>{children}</DashboardWrapper>
);

export default MainLayout;
