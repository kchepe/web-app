import { PageMap, SidebarTrigger } from '@/components';
import React, { ReactNode } from 'react';

const NavigationContent = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 border-b">
        <div className="flex items-center gap-3 px-3">
          <SidebarTrigger />
          <div className="mr-2 h-4 w-px bg-gray-200" />
          <PageMap />
        </div>
      </header>
      <div className="p-4">{children}</div>
    </>
  );
};

export { NavigationContent };
