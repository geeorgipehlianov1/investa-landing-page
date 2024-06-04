import { accountData } from '@/lib/constants';
import Container from './Container';
import Title from './Title';

const Account = () => {
  return (
    <section>
      <Container
        id='account'
        aria-label='Features for building a portfolio'
        className='py-20 sm:py-32'
      >
        <div className='mx-auto max-w-2xl sm:text-center'>
          <Title
            title='Now is the time to open your Account.'
            className='text-2xl'
          />
          <p className='mt-2 text-lg text-gray-600'>
            With typical market returns, you have to start young to secure your
            future. With Investa, it is never too late to build your nest egg.
          </p>
        </div>
        <ul
          role='list'
          className='mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3'
        >
          {accountData.map((item: any) => (
            <li
              key={item.name}
              className='group cursor-pointer rounded-2xl border border-gray-200 p-8 duration-300 hover:border-gray-300 hover:bg-gray-100'
            >
              <item.icon className='h-8 w-8' />
              <h3 className='mt-6 font-semibold text-gray-900 duration-300 group-hover:text-black'>
                {item.name}
              </h3>
              <p className='mt-2 text-gray-700 duration-300 group-hover:text-black'>
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default Account;
