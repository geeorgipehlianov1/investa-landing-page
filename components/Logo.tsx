import clsx from 'clsx';
import Link from 'next/link';

interface LogoProps extends React.HTMLAttributes<HTMLHeadingElement> {
  className?: string;
}

export default function Logo({ className, ...props }: LogoProps) {
  return (
    <Link href={'/'}>
      <h2
        className={clsx(
          'text-3xl font-bold text-gray-600 duration-300 hover:text-gray-900',
          className
        )}
        {...props}
      >
        Investa
      </h2>
    </Link>
  );
}
