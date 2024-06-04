import clsx from 'clsx';
import Link from 'next/link';
import { forwardRef, Ref } from 'react';

const baseStyles: Record<'solid' | 'outline', string> = {
  solid:
    'inline-flex justify-center rounded-lg py-2 px-3 text-sm font-semibold outline-2 outline-offset-2 transition-colors',
  outline:
    'inline-flex justify-center rounded-lg border py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-sm outline-2 outline-offset-2 transition-colors',
};

type VariantColors = 'blue' | 'white' | 'gray';

interface VariantStyles {
  solid: Record<VariantColors, string>;
  outline: Record<'gray', string>;
}

const variantStyles: VariantStyles = {
  solid: {
    blue: 'relative overflow-hidden bg-blue-500 text-white before:absolute before:inset-0 active:before:bg-transparent hover:before:bg-white/10 active:bg-blue-600 active:text-white/80 before:transition-colors',
    white:
      'bg-white text-blue-900 hover:bg-white/90 active:bg-white/90 active:text-blue-900/70',
    gray: 'bg-gray-800 text-white hover:bg-gray-900 active:bg-gray-800 active:text-white/80',
  },
  outline: {
    gray: 'border-gray-300 text-gray-700 hover:border-gray-400 active:bg-gray-100 active:text-gray-700/80',
  },
};

interface ButtonProps {
  variant?: 'solid' | 'outline';
  color?: VariantColors;
  className?: string;
  href?: string;
  [key: string]: any; // To allow other props such as onClick, etc.
}

const Button = forwardRef<HTMLAnchorElement | HTMLButtonElement, ButtonProps>(
  function Button(
    { variant = 'solid', color = 'gray', className, href, ...props },
    ref
  ) {
    const variantStyle = variantStyles[variant] as Record<
      VariantColors,
      string
    >;
    className = clsx(baseStyles[variant], variantStyle[color], className);

    if (href) {
      return (
        <Link
          ref={ref as Ref<HTMLAnchorElement>}
          href={href}
          className={className}
          {...props}
        />
      );
    }

    return (
      <button
        ref={ref as Ref<HTMLButtonElement>}
        className={className}
        {...props}
      />
    );
  }
);

export default Button;
