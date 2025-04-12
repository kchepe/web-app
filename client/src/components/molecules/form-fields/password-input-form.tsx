'use client';

import { FormElement } from './form-element';
import { TextField, TextFieldProps } from '../textfield';
import { Eye, EyeClosed, Lock } from 'lucide-react';
import { useState } from 'react';

interface InputFormProps
  extends Omit<TextFieldProps, 'name' | 'label' | 'startIcon' | 'endIcon' | 'type'> {
  label?: string;
  name: string;
}

const PasswordInputForm = ({ name, label, ...props }: InputFormProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <FormElement
      name={name}
      label={label}
      render={(field) => (
        <TextField
          type={showPassword ? 'text' : 'password'}
          startIcon={Lock}
          endIcon={
            showPassword ? (
              <Eye
                className="h-4 w-4 pointer cursor-pointer"
                onClick={handleTogglePasswordVisibility}
              />
            ) : (
              <EyeClosed
                className="h-4 w-4 cursor-pointer"
                onClick={handleTogglePasswordVisibility}
              />
            )
          }
          {...field}
          {...props}
        />
      )}
    />
  );
};

export { PasswordInputForm };
