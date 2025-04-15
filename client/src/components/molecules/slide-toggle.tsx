import React from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../atoms';

interface SlideToggleProps {
  children: React.ReactNode;
  trigger: React.ReactNode;
}

const SlideToggle = ({ children, trigger }: SlideToggleProps) => {
  return (
    <Collapsible>
      <CollapsibleTrigger asChild>{trigger}</CollapsibleTrigger>
      <CollapsibleContent>{children}</CollapsibleContent>
    </Collapsible>
  );
};

export { SlideToggle };
