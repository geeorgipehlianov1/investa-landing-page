import clsx from 'clsx';
import { forwardRef, ReactNode } from 'react';
import { FaUser } from 'react-icons/fa';
import { TbMenu2 } from 'react-icons/tb';
import Logo from './Logo';

interface AppScreenProps {
  children: ReactNode;
  className?: string;
  [key: string]: any;
}

const AppScreen = ({ children, className, ...props }: AppScreenProps) => {
  return (
    <div
      className={clsx('flex min-h-screen flex-col bg-gray-900', className)}
      {...props}
    >
      <div className='flex items-center justify-between px-4 pt-4'>
        <TbMenu2 className='text-xl text-white' />
        <Logo className='text-xl text-gray-300 duration-300 hover:text-white' />
        <FaUser className='text-xl text-white' />
      </div>
      {children}
    </div>
  );
};

interface AppScreenTitleProps {
  children: ReactNode;
}

AppScreen.Title = forwardRef<HTMLDivElement, AppScreenTitleProps>(
  function AppScreenTitle({ children }, ref) {
    return (
      <div ref={ref} className='px-4 pt-4 text-2xl font-bold text-white'>
        {children}
      </div>
    );
  }
);

interface AppScreenSubtitleProps {
  children: ReactNode;
}

AppScreen.Subtitle = forwardRef<HTMLDivElement, AppScreenSubtitleProps>(
  function AppScreenSubtitle({ children }, ref) {
    return (
      <div ref={ref} className='px-4 text-sm text-gray-500'>
        {children}
      </div>
    );
  }
);

interface AppScreenBodyProps {
  children: ReactNode;
  className?: string;
}

AppScreen.Body = forwardRef<HTMLDivElement, AppScreenBodyProps>(
  function AppScreenBody({ children, className }, ref) {
    return (
      <div
        ref={ref}
        className={clsx('mt-6 flex-auto rounded-t-2xl bg-white', className)}
      >
        {children}
      </div>
    );
  }
);

interface AppScreenHeaderProps {
  children: ReactNode;
}

AppScreen.Header = forwardRef<HTMLDivElement, AppScreenHeaderProps>(
  function AppScreenHeader({ children }, ref) {
    return (
      <div ref={ref} className='mt-6 px-4 text-white'>
        {children}
      </div>
    );
  }
);

export default AppScreen;
