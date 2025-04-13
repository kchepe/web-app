import { DashboardWrapper } from '@/components';
import { ReactNode } from 'react';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => (
  <DashboardWrapper>
    <div className="-mt-10">{children}</div>
  </DashboardWrapper>
);

export default MainLayout;
