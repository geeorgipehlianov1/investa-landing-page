import Image, { StaticImageData } from 'next/image';
import logoBbc from '../public/bbc.svg';
import logoCbs from '../public/cbs.svg';
import logoCnn from '../public/cnn.svg';
import logoFastCompany from '../public/fast-company.svg';
import logoForbes from '../public/forbes.svg';
import logoHuffpost from '../public/huffpost.svg';
import logoTechcrunch from '../public/techcrunch.svg';
import logoWired from '../public/wired.svg';

interface Logo {
  _id: number;
  title: string;
  logo: StaticImageData;
}

const logos: Logo[] = [
  { _id: 2001, title: 'Forbes', logo: logoForbes },
  { _id: 2002, title: 'TechCrunch', logo: logoTechcrunch },
  { _id: 2003, title: 'Wired', logo: logoWired },
  { _id: 2004, title: 'CNN', logo: logoCnn },
  { _id: 2005, title: 'BBC', logo: logoBbc },
  { _id: 2006, title: 'CBS', logo: logoCbs },
  { _id: 2007, title: 'Fast Company', logo: logoFastCompany },
  { _id: 2008, title: 'HuffPost', logo: logoHuffpost },
];

export default function ExtraLogos() {
  return (
    <div className='relative -mt-4 lg:col-span-7 lg:mt-0 xl:col-span-6'>
      <p className='text-center text-sm font-semibold text-gray-900 lg:text-left'>
        As featured in
      </p>
      <ul
        role='list'
        className='mx-auto mt-8 flex max-w-xl flex-wrap justify-center gap-x-10 gap-y-8 lg:mx-0 lg:justify-start'
      >
        {logos.map(({ title, logo }) => (
          <li key={title}>
            <Image src={logo} alt={title} className='h-8' unoptimized />
          </li>
        ))}
      </ul>
    </div>
  );
}
