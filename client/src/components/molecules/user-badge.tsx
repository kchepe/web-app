import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '../atoms';

interface UserBadgeProps {
  className?: string;
  imageUrl?: string;
  name: string;
  size?: 'sm' | 'md' | 'lg' | 'custom';
}

const UserBadge = ({ className, imageUrl, name, size = 'custom' }: UserBadgeProps) => {
  const getInitials = (name: string) => {
    const words = name.split(' ');
    if (words.length === 1) {
      return words[0].charAt(0).toUpperCase();
    }
    return `${words[0].charAt(0).toUpperCase()}${words[words.length - 1].charAt(0).toUpperCase()}`;
  };

  const sizeClass = {
    sm: 'size-8',
    md: 'size-10',
    lg: 'size-14',
    custom: '',
  };

  return (
    <Avatar className={cn(className, sizeClass[size])}>
      <AvatarImage src={imageUrl} alt="user-avatar" />
      <AvatarFallback className={cn(className, 'bg-gray-300 font-bold')}>
        {getInitials(name)}
      </AvatarFallback>
    </Avatar>
  );
};

export { UserBadge };
