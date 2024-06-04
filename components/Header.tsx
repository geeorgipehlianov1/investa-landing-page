'use client';

import { navData } from '@/lib/constants';
import {
  Popover,
  PopoverButton,
  PopoverOverlay,
  PopoverPanel,
} from '@headlessui/react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { IoIosArrowUp } from 'react-icons/io';
import { TbMenu2 } from 'react-icons/tb';
import Button from './Button';
import Container from './Container';
import Logo from './Logo';
import NavLinks from './NavLinks';

const MobileNavLinks = ({ children, ...props }: any) => {
  return (
    <PopoverButton
      as={Link}
      className='block text-base leading-7 tracking-tight text-gray-700'
      {...props}
    >
      {children}
    </PopoverButton>
  );
};

export default function Header() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const handleScroll = () => {
    const scrollY = window.scrollY;
    setIsScrolled(scrollY > 50);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);

      // Clean up the scroll event listener when the component unmounts
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white ${
        isScrolled && 'shadow-xl shadow-blue-100'
      }`}
    >
      <nav>
        <Container className='relative z-50 flex justify-between py-8'>
          <div>
            <Logo className='relative z-10' />
          </div>
          <div className='hidden items-center lg:flex lg:gap-10'>
            <NavLinks />
          </div>
          <div className='flex items-center gap-6'>
            <Button href='#' variant='outline' className='hidden lg:block'>
              Get Advice
            </Button>
            <Button href='#' className='hidden lg:block'>
              Hire me
            </Button>
            <Popover className='lg:hidden'>
              {({ open }) => (
                <>
                  <PopoverButton
                    className='relative z-10 -m-2 inline-flex items-center rounded-lg stroke-gray-900 p-2 outline-none hover:bg-gray-200/50 hover:stroke-gray-600 active:stroke-gray-900 [&:not(:focus-visible)]:focus:outline-none'
                    aria-label='Toggle site navigation'
                  >
                    {({ open }) =>
                      open ? (
                        <IoIosArrowUp className='text-2xl' />
                      ) : (
                        <TbMenu2 className='text-2xl' />
                      )
                    }
                  </PopoverButton>
                  <AnimatePresence initial={false}>
                    {open && (
                      <>
                        <PopoverOverlay
                          static
                          as={motion.div}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className='backdrop::blur fixed inset-0 z-0 bg-gray-300/60'
                        />
                        <PopoverPanel
                          static
                          as={motion.div}
                          initial={{ opacity: 0, y: -32 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{
                            opacity: 0,
                            y: -32,
                            transition: { duration: 0.3 },
                          }}
                          className='absolute inset-x-0 top-0 z-0 origin-top rounded-b-2xl bg-gray-50 px-6 pb-6 pt-32 shadow-2xl shadow-gray-900/20'
                        >
                          <div className='space-y-4'>
                            {navData.map(({ id, title, href }) => (
                              <MobileNavLinks key={id} href={href}>
                                {title}
                              </MobileNavLinks>
                            ))}
                          </div>
                          <div className='mt-8 flex flex-col gap-4'>
                            <Button href='#' variant='outline'>
                              Get Advice
                            </Button>
                            <Button href='#'>Hire me</Button>
                          </div>
                        </PopoverPanel>
                      </>
                    )}
                  </AnimatePresence>
                </>
              )}
            </Popover>
          </div>
        </Container>
      </nav>
    </header>
  );
}
