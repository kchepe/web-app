import React from 'react';
import { Button, ButtonProps, Loading } from '../atoms';
import { Spinner } from '../atoms/spinner';

interface LoadingButtonProps extends ButtonProps {
  loading: boolean;
}

const LoadingButton = ({ loading, children, ...props }: LoadingButtonProps) => {
  return <Button {...props}>{loading ? <Loading /> : children}</Button>;
};

export { LoadingButton };
