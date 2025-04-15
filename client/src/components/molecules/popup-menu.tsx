'use client';

import React, { Fragment, ReactNode } from 'react';
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

interface IPopupMenuOption {
  label: string | ReactNode;
  onClick?: () => void;
  subOptions?: IPopupMenuOption[];
}
interface IMenu {
  header?: string | ReactNode;
  options: IPopupMenuOption[];
}

interface PopupMenuProps {
  trigger: ReactNode;
  menu: IMenu[];
}

const PopupMenu = ({ trigger, menu }: PopupMenuProps) => {
  const renderMenuOption = (option: IPopupMenuOption, index: number) => {
    if (option.subOptions && option.subOptions.length > 0) {
      return (
        <DropdownMenuSub key={index}>
          <DropdownMenuSubTrigger>{option.label}</DropdownMenuSubTrigger>
          <DropdownMenuSubContent className="min-w-56 rounded-lg">
            {option.subOptions.map(renderMenuOption)}
          </DropdownMenuSubContent>
        </DropdownMenuSub>
      );
    }

    return (
      <Fragment key={index}>
        <DropdownMenuItem key={index} onClick={option.onClick}>
          {option.label}
        </DropdownMenuItem>
      </Fragment>
    );
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{trigger}</DropdownMenuTrigger>
      <DropdownMenuContent className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg">
        {menu.map((item, index) => (
          <Fragment key={index}>
            {item.header && (
              <>
                {index !== 0 && <DropdownMenuSeparator />}
                <DropdownMenuLabel>{item.header}</DropdownMenuLabel>
                <DropdownMenuSeparator />
              </>
            )}
            <DropdownMenuGroup>{item.options.map(renderMenuOption)}</DropdownMenuGroup>
          </Fragment>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export { PopupMenu };
