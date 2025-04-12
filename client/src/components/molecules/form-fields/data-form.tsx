'use client';

import { DefaultValues, FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ReactNode } from 'react';
import { Form } from '@/components/atoms';

interface DateFormProps {
  onSubmit?: SubmitHandler<FieldValues>;
  schema: z.ZodSchema<FieldValues>;
  initialValues: DefaultValues<FieldValues>;
  children: ReactNode;
  resetFieldsAfterSubmit?: boolean;
}

const DataForm = ({
  onSubmit,
  schema,
  initialValues,
  children,
  resetFieldsAfterSubmit = false,
}: DateFormProps) => {
  const form = useForm({
    mode: 'onTouched',
    resolver: zodResolver(schema),
    defaultValues: initialValues,
  });

  const handleValidSubmit: SubmitHandler<FieldValues> = async (data) => {
    await onSubmit?.(data);
    if (resetFieldsAfterSubmit) {
      form.reset(initialValues);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleValidSubmit)}>{children}</form>
    </Form>
  );
};

export { DataForm };
