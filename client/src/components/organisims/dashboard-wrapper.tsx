import { ReactNode } from 'react';
import { NavigationLogo, NavigationMenu, NavigationPanel, NavigationUser } from '../molecules';
import { NavigationContent } from '../molecules/navigation/navigation-content';

interface DashboardWrapperProps {
  children: ReactNode;
}

const DashboardWrapper = ({ children }: DashboardWrapperProps) => {
  return (
    <NavigationPanel
      header={<NavigationLogo />}
      footer={<NavigationUser />}
      menuList={<NavigationMenu />}
    >
      <NavigationContent>{children}</NavigationContent>
    </NavigationPanel>
  );
};

export { DashboardWrapper };
