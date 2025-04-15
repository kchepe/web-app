'use client';

import {
  Banner,
  Button,
  DataForm,
  Header,
  InputForm,
  Loading,
  LoadingButton,
  Paragraph,
  PasswordInputForm,
} from '@/components';
import { useState } from 'react';
import { loginInitialValues, loginSchema } from './login-form-values';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import { User } from 'lucide-react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const Login = () => {
  const { push } = useRouter();
  const [showBanner, setShowBanner] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin: SubmitHandler<FieldValues> = async (data) => {
    setLoading(true);
    const response = await signIn('credentials', { redirect: false, ...data });
    setLoading(false);
    if (!response?.ok) {
      setShowBanner(true);
      return;
    }
    push('/');
  };

  const handleCloseBanner = () => {
    setShowBanner(false);
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

        <Banner
          variant="error"
          description="Invalid username or password"
          showBanner={showBanner}
          closeBanner={handleCloseBanner}
        />

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
              <LoadingButton loading={loading} type="submit" disabled={loading} className="w-full">
                Login
              </LoadingButton>
            </div>
          </div>
        </DataForm>
      </div>
    </div>
  );
};

export default Login;
