import { ComponentProps } from "react";
import { Input } from "../atoms";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

const SearchInput = ({
  className,
  ...props
}: Omit<ComponentProps<"input">, "type">) => {
  return (
    <div
      className={cn(
        "flex h-10 items-center rounded-md border border-input bg-white pl-3 text-sm ring-offset-background focus-within:ring-1 focus-within:ring-ring",
        className
      )}
    >
      <Search className="w-4 h-4" />
      <Input
        type="search"
        className="w-full p-2 placeholder:text-muted-foreground focus-visible:ring-0 border-none"
        {...props}
      />
    </div>
  );
};

export { SearchInput };
