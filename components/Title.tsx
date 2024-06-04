import clsx from 'clsx';
import React from 'react';

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  title: string;
}

export default function Title({ title, className, ...props }: TitleProps) {
  return (
    <h2
      className={clsx('font-medium tracking-tight text-gray-900', className)}
      {...props}
    >
      {title}
    </h2>
  );
}
