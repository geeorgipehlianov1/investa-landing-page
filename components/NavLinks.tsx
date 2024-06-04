import { navData } from '@/lib/constants';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

export default function NavLinks() {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  return (
    <>
      {navData.map(({ id, title, href }) => (
        <Link
          key={id}
          href={href}
          className='relative -mx-3 -my-2 px-3 rounded-lg py-2 text-base text-gray-700 transition-colors'
          onMouseEnter={() => setHoverIndex(id)}
          onMouseLeave={() => setHoverIndex(null)}
        >
          <AnimatePresence>
            {hoverIndex === id && (
              <motion.span
                className='absolute inset-0 rounded-lg bg-gray-100'
                layoutId='hoverBackground'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.15 } }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <span className='relative z-10'>{title}</span>
        </Link>
      ))}
    </>
  );
}
