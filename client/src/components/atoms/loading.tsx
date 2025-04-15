import React from 'react';
import { Text } from '.';
import { cn } from '@/lib/utils';

const Loading = () => (
  <div className="flex items-center gap-2">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn('animate-spin')}
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
    <Text className="text-sm">Loading...</Text>
  </div>
);
export { Loading };
