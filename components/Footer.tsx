import Button from './Button';
import Container from './Container';
import { TextField } from './Fields';
export default function Footer() {
  return (
    <footer>
      <Container>
        <div className='flex flex-col items-center border-t border-gray-200 pb-12 pt-8 md:flex-row md:justify-between md:pt-6'>
          <p className='text-xs text-gray-500'>
            &copy; Copyright {new Date().getFullYear()}. All rights reserved.
          </p>
          <form className='mt-6 flex w-full justify-center md:mt-0 md:w-auto'>
            <TextField
              type='email'
              aria-label='Email address'
              placeholder='Email address'
              autoComplete='email'
              required
              className='w-60 min-w-0 shrink'
            />
            <Button type='submit' color='blue' className='ml-4 flex-none'>
              <span className='hidden lg:inline'>Join our newsletter</span>
              <span className='lg:hidden'>Join newsletter</span>
            </Button>
          </form>
        </div>
      </Container>
    </footer>
  );
}
