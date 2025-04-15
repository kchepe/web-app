'use client';

import React, { createElement, Fragment, ReactElement, ReactNode } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '../atoms';
import { LucideIcon } from 'lucide-react';

interface IPopupMenuOption {
  label: string | ReactNode;
  onClick?: () => void;
  icon?: LucideIcon;
  subMenus?: IMenu[];
  showSeparator?: boolean;
}
interface IMenu {
  header?: string | ReactNode;
  options: IPopupMenuOption[];
}

interface PopupMenuProps {
  children: ReactNode;
  menu: IMenu[];
  side?: 'left' | 'right' | 'top' | 'bottom';
}

const PopupMenu = ({ children, menu, side }: PopupMenuProps) => {
  const renderMenuOption = (option: IPopupMenuOption, depthKey: string) => {
    if (option.subMenus && option.subMenus.length > 0) {
      return (
        <DropdownMenuSub key={`${depthKey}-${option.label}`}>
          <DropdownMenuSubTrigger>
            {option.icon && (
              <span className="mr-1">
                {createElement(option.icon as LucideIcon, { className: 'w-4 h-4' })}
              </span>
            )}
            {option.label}
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent className="min-w-56 rounded-lg">
            {option.subMenus.map((subMenu, subIndex) => (
              <Fragment key={`submenu-${depthKey}-${subIndex}`}>
                {subMenu.header && (
                  <>
                    {subIndex !== 0 && <DropdownMenuSeparator />}
                    <DropdownMenuLabel>{subMenu.header}</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                  </>
                )}
                <DropdownMenuGroup>
                  {subMenu.options.map((subOption, i) =>
                    renderMenuOption(subOption, `${depthKey}-${subIndex}-${i}`)
                  )}
                </DropdownMenuGroup>
              </Fragment>
            ))}
          </DropdownMenuSubContent>
        </DropdownMenuSub>
      );
    }

    return (
      <Fragment key={`${depthKey}-${option.label}`}>
        {option.showSeparator && <DropdownMenuSeparator />}
        <DropdownMenuItem key={`${depthKey}-${option.label}`} onClick={option.onClick}>
          {option.icon && (
            <span className="mr-1">
              {createElement(option.icon as LucideIcon, { className: 'w-4 h-4' })}
            </span>
          )}
          {option.label}
        </DropdownMenuItem>
      </Fragment>
    );
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
        side={side}
      >
        {menu.map((item, index) => (
          <Fragment key={`group-${index}`}>
            {item.header && (
              <>
                {index !== 0 && <DropdownMenuSeparator />}
                <DropdownMenuLabel>{item.header}</DropdownMenuLabel>
                <DropdownMenuSeparator />
              </>
            )}
            <DropdownMenuGroup>
              {item.options.map((option, i) => renderMenuOption(option, `${index}-${i}`))}
            </DropdownMenuGroup>
          </Fragment>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export { PopupMenu };
