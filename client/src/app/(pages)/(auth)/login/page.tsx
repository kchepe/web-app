'use client';

import { Button, DataForm, Header, InputForm, Paragraph, PasswordInputForm } from '@/components';
import React from 'react';
import { loginInitialValues, loginSchema } from './login-form-values';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import { User } from 'lucide-react';
import { toast } from 'sonner';

const Login = () => {
  const handleLogin: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    toast.info('Login successful!');
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="space-y-8 w-80">
        <div className="flex items-center flex-col gap-1">
          <Header variant="h3">Login</Header>

          <Paragraph className="text-sm text-gray-500 dark:text-gray-300">
            Please enter your credentials.
          </Paragraph>
        </div>
        <DataForm initialValues={loginInitialValues} schema={loginSchema} onSubmit={handleLogin}>
          <div className="space-y-4">
            <InputForm
              name="username"
              label="Username"
              placeholder="Enter username"
              startIcon={User}
            />
            <PasswordInputForm name="password" label="Password" placeholder="Enter Password" />
            <div>
              <Button type="submit" className="w-full">
                Login
              </Button>
            </div>
          </div>
        </DataForm>
      </div>
    </div>
  );
};

export default Login;
