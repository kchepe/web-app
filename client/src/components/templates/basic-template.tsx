import React, { ReactNode } from 'react';
import { Header } from '../atoms';

interface BasicTemplateProps {
  children: ReactNode;
  title: string;
}

const BasicTemplate = ({ children, title }: BasicTemplateProps) => {
  return (
    <div>
      <Header variant="h4">{title}</Header>
      <div className="mt-4">{children}</div>
    </div>
  );
};

export { BasicTemplate };
