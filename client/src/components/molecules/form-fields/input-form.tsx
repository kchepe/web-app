'use client';

import { FormElement } from './form-element';
import { TextField, TextFieldProps } from '../text-field';

interface InputFormProps extends Omit<TextFieldProps, 'name' | 'label'> {
  label?: string;
  name: string;
}

const InputForm = ({ name, label, ...props }: InputFormProps) => {
  return (
    <FormElement
      name={name}
      label={label}
      render={(field) => <TextField {...field} {...props} />}
    />
  );
};

export { InputForm };
