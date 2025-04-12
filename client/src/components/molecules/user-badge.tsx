import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "../atoms";

interface UserBadgeProps {
  className?: string;
  imageUrl?: string;
  name: string;
  size?: "sm" | "md" | "lg";
}

const UserBadge = ({
  className,
  imageUrl,
  name,
  size = "md",
}: UserBadgeProps) => {
    
  const getInitials = (name: string) => {
    const words = name.split(" ");
    if (words.length === 1) {
      return words[0].charAt(0).toUpperCase();
    }
    return `${words[0].charAt(0).toUpperCase()}${words[words.length - 1].charAt(0).toUpperCase()}`;
  };

  const sizeClass = {
    sm: "size-8",
    md: "size-10",
    lg: "size-14",
  };

  return (
    <Avatar className={cn(className, sizeClass[size])}>
      <AvatarImage src={imageUrl} alt="user-avatar" />
      <AvatarFallback className="bg-gray-300">
        {getInitials(name)}
      </AvatarFallback>
    </Avatar>
  );
};

export { UserBadge };
