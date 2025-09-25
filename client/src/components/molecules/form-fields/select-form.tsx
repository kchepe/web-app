'use client';

import { SelectMenu, SelectOption } from '../select-menu';
import { FormElement } from './form-element';
import { Root } from '@radix-ui/react-select';

interface SelectFormProps
  extends Omit<React.ComponentProps<typeof Root>, 'name' | 'onValueChange' | 'defaultValue'> {
  name: string;
  label?: string;
  options: SelectOption[];
  placeholder?: string;
}

const SelectForm = ({ name, label, options, placeholder, ...props }: SelectFormProps) => {
  return (
    <FormElement
      name={name}
      label={label}
      render={({ onChange, value }) => (
        <SelectMenu
          {...props}
          onValueChange={onChange}
          defaultValue={value}
          placeholder={placeholder}
          options={options}
        />
      )}
    />
  );
};

export { SelectForm };
