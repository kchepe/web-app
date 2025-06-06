import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { DashboardWrapper } from '@/components';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { ReactNode } from 'react';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = async ({ children }: MainLayoutProps) => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/login');
  }
  return <DashboardWrapper>{children}</DashboardWrapper>;
};

export default MainLayout;
