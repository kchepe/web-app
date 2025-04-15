'use client';

import React, { useEffect, useState } from 'react';
import { Alert, AlertDescription, AlertTitle } from '../atoms';
import { BadgeInfo, Check, OctagonX, TriangleAlert } from 'lucide-react';

interface BannerProps {
  title?: string;
  description: string;
  variant: 'info' | 'error' | 'success' | 'warning';
  showBanner: boolean;
  closeBanner: () => void;
}

const Banner = ({ title, description, variant, closeBanner, showBanner }: BannerProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      closeBanner();
    }, 5000);

    return () => clearTimeout(timer);
  }, [showBanner]);

  if (!showBanner) return null;

  const variants = {
    success: {
      style: 'bg-green-500/10 text-green-500',
      icon: <Check />,
    },
    info: {
      style: 'bg-blue-500/10 text-blue-500',
      icon: <BadgeInfo />,
    },
    error: {
      style: 'bg-red-500/10 text-red-500',
      icon: <OctagonX />,
    },
    warning: {
      style: 'bg-yellow-500/10 text-yellow-500',
      icon: <TriangleAlert />,
    },
  };

  return (
    <Alert className={`${variants[variant].style} flex items-start gap-2`}>
      {variants[variant].icon}
      <div>
        {title && <AlertTitle>{title}</AlertTitle>}
        <AlertDescription>{description}</AlertDescription>
      </div>
    </Alert>
  );
};

export { Banner };
