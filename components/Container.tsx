import clsx from 'clsx';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export default function Container({ className, ...props }: ContainerProps) {
  return (
    <div
      className={clsx(
        'mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8',
        className
      )}
      {...props}
    />
  );
}
