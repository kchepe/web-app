
  import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/atoms";
import {
    ControllerRenderProps,
    FieldValues,
    get,
    useFormContext,
  } from "react-hook-form";
  
  interface FormElementProps {
    name: string;
    render: (
      field: ControllerRenderProps<FieldValues, string>
    ) => React.ReactNode;
    label?: string;
  }
  
  const FormElement = ({ name, render, label }: FormElementProps) => {
    const {
      control,
      formState: { errors },
    } = useFormContext();
  
    const error = get(errors, name);
  
    return (
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel>{label}</FormLabel>
            <FormControl>{render(field)}</FormControl>
            {error && (
              <FormMessage className="text-[11px] ml-2">
                {error.message}
              </FormMessage>
            )}
          </FormItem>
        )}
      />
    );
  };
  
  export { FormElement };
  