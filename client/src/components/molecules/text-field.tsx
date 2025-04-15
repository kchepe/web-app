import { ComponentProps, createElement, isValidElement, ReactElement } from 'react';
import { Input } from '../atoms/input';
import { Label } from '../atoms/typography';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

export interface TextFieldProps extends ComponentProps<'input'> {
  startIcon?: LucideIcon | ReactElement<LucideIcon>;
  endIcon?: LucideIcon | ReactElement<LucideIcon>;
  label?: string;
}

const TextField = ({ startIcon, endIcon, label, className, ...props }: TextFieldProps) => {
  return (
    <div>
      {label && <Label className="mb-2">{label}</Label>}
      <div className="relative">
        {startIcon && (
          <div className="absolute inset-y-0 left-0 flex items-center ml-3 pointer-events-none">
            {isValidElement(startIcon)
              ? startIcon
              : createElement(startIcon as LucideIcon, { className: 'w-4 h-4' })}
          </div>
        )}
        <Input
          className={cn(className, {
            'pl-9': startIcon,
            'pl-3': !startIcon,
            'pr-9': endIcon,
            'pr-3': !endIcon,
          })}
          {...props}
        />
        {endIcon && (
          <div className="absolute inset-y-0 right-0 flex items-center mr-3">
            {isValidElement(endIcon)
              ? endIcon
              : createElement(endIcon as LucideIcon, { className: 'w-4 h-4' })}
          </div>
        )}
      </div>
    </div>
  );
};

export { TextField };
