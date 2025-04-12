import { cn } from '@/lib/utils';
import { TextProps, Text } from './text';

interface HeaderProps extends TextProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const Header = ({ variant = 'h1', children, className }: HeaderProps) => {
  const textSizes = {
    h1: 'text-4xl lg:text-5xl',
    h2: 'text-3xl',
    h3: 'text-2xl',
    h4: 'text-xl',
    h5: 'text-lg',
    h6: 'text-base',
  };

  return (
    <Text className={cn('scroll-m-20 font-bold tracking-tight', textSizes[variant], className)}>
      {children}
    </Text>
  );
};

export default Header;
