import { SidebarGroup, SidebarMenu } from '../../atoms';
import { BookOpen, Bot, LucideIcon, Settings2, SquareTerminal } from 'lucide-react';
import { NavigationMenuItems } from './navigation-menu-items';

export interface NavigationMenuItem {
  title: string;
  url: string;
  icon: LucideIcon;
  isActive?: boolean;
  items?: {
    title: string;
    url: string;
  }[];
}

const navMain: NavigationMenuItem[] = [
  {
    title: 'Playground',
    url: '#',
    icon: SquareTerminal,
    isActive: true,
    items: [
      {
        title: 'History',
        url: '#',
      },
      {
        title: 'Starred',
        url: '#',
      },
      {
        title: 'Settings',
        url: '#',
      },
    ],
  },
  {
    title: 'Models',
    url: '#',
    icon: Bot,
    items: [
      {
        title: 'Genesis',
        url: '#',
      },
      {
        title: 'Explorer',
        url: '#',
      },
      {
        title: 'Quantum',
        url: '#',
      },
    ],
  },
  {
    title: 'Documentation',
    url: '#',
    icon: BookOpen,
    items: [
      {
        title: 'Introduction',
        url: '#',
      },
      {
        title: 'Get Started',
        url: '#',
      },
      {
        title: 'Tutorials',
        url: '#',
      },
      {
        title: 'Changelog',
        url: '#',
      },
    ],
  },
  {
    title: 'Settings',
    url: '#',
    icon: Settings2,
  },
];

const NavigationMenu = () => {
  return (
    <SidebarGroup>
      <SidebarMenu>
        {navMain.map((item) => (
          <NavigationMenuItems key={item.title} item={item} />
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
};

export default NavigationMenu;
