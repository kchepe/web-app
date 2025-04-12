import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
  } from "../atoms";
  import * as SelectPrimitive from "@radix-ui/react-select";
  
  export interface SelectOption {
    value: string;
    label: string;
    disabled?: boolean;
  }
  
  export interface SelectMenuProps
    extends React.ComponentProps<typeof SelectPrimitive.Root> {
    placeholder?: string;
    options: SelectOption[];
  }
  
  const SelectMenu = ({ placeholder, options, ...props }: SelectMenuProps) => {
    return (
      <Select {...props}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem
              key={option.value}
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    );
  };
  
  export { SelectMenu };
  