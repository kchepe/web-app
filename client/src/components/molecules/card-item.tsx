import { cn } from "@/lib/utils";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../atoms";

interface CardItemProps {
  header?: {
    title: string;
    description?: string;
    titleClassName?: string;
    descriptionClassName?: string;
  };
  children: React.ReactNode;
  className?: string;
}

const CardItem = ({ header, children, className }: CardItemProps) => {
  return (
    <Card className={cn(className)}>
      {header && (
        <CardHeader>
          <CardTitle className={header.titleClassName}>
            {header.title}
          </CardTitle>
          <CardDescription className={header.descriptionClassName}>
            {header?.description}
          </CardDescription>
        </CardHeader>
      )}
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export { CardItem };
