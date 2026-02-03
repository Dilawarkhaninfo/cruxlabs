'use client';

import React from 'react';
import { cn } from '@/lib/utils';

type MenuToggleProps = React.ComponentProps<'svg'> & {
  open: boolean;
  duration?: number;
};

export function MenuToggleIcon({
  open,
  className,
  fill = 'none',
  stroke = 'currentColor',
  strokeWidth = 2.5,
  strokeLinecap = 'round',
  strokeLinejoin = 'round',
  duration = 500,
  ...props
}: MenuToggleProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap={strokeLinecap}
      strokeLinejoin={strokeLinejoin}
      className={cn('transition-all', className)}
      {...props}
    >
      <line
        x1="3"
        y1="6"
        x2="21"
        y2="6"
        className="origin-center transition-all"
        style={{
          transitionDuration: `${duration}ms`,
          transform: open ? 'rotate(45deg) translateY(6px)' : 'none',
        }}
      />
      <line
        x1="3"
        y1="12"
        x2="21"
        y2="12"
        className="transition-all"
        style={{
          transitionDuration: `${duration}ms`,
          opacity: open ? 0 : 1,
        }}
      />
      <line
        x1="3"
        y1="18"
        x2="21"
        y2="18"
        className="origin-center transition-all"
        style={{
          transitionDuration: `${duration}ms`,
          transform: open ? 'rotate(-45deg) translateY(-6px)' : 'none',
        }}
      />
    </svg>
  );
}